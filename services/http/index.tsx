import { URLs } from '@/constants/apis'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

class HTTPService {
  private static instance: HTTPService | null = null
  private baseURL!: string
  private axiosInstance!: AxiosInstance
  private defaultHeaders!: { [key: string]: string | null }

  protected constructor(baseURL?: string, token?: string) {
    if (HTTPService.instance && HTTPService.instance.getBaseURL() === (baseURL ?? URLs.BASE_URL)) {
      return HTTPService.instance
    }

    this.baseURL = baseURL ?? URLs.BASE_URL
    // console.log(this.baseURL)

    this.defaultHeaders = {
      'Content-Type': 'application/json',
      Authorization: token ? token : null,
    }
    this.axiosInstance = axios.create({
      baseURL,
      headers: this.defaultHeaders ? this.defaultHeaders : {},
    })
    this.setupInterceptors()
    HTTPService.instance = this
  }

  public static getInstance(baseURL?: string, token?: string): HTTPService {
    if (!HTTPService.instance || HTTPService.instance.getBaseURL() !== (baseURL ?? URLs.BASE_URL)) {
      HTTPService.instance = new HTTPService(baseURL, token)
    }
    console.log('old instance', HTTPService.instance)
    return HTTPService.instance
  }

  public getBaseURL(): string {
    return this.baseURL
  }

  private setupInterceptors(): void {
    // this.axiosInstance.interceptors.request.use(
    //   async (config: AxiosRequestConfig) => {
    //     const accessToken: string | null = 'accessToken'
    //     if (accessToken) {
    //       config.headers['Authorization'] = `Bearer ${accessToken}`
    //     }
    //     return config
    //   },
    //   (error) => Promise.reject(error)
    // )

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: any) => {
        // console.log('error inter', error?.response?.config?.url)

        if (error.response && error.response.status === 401) {
          const refreshToken: string | null = 'accessToken'
          if (refreshToken) {
            try {
              const refreshedToken: string = await this.refreshAccessToken(refreshToken)
              error.config.headers['Authorization'] = `Bearer ${refreshedToken}`
              return axios(error.config)
            } catch (refreshError) {
              console.info('Error refreshing access token:', (refreshError as Error).message)
              throw refreshError
            }
          }
        }
        // console.info('Global response interceptor error:', (error as Error).message)
        return Promise.reject(error)
      }
    )
  }


  private mergeConfig(
    defaultConfig: AxiosRequestConfig,
    customConfig: AxiosRequestConfig
  ): AxiosRequestConfig {
    return {
      ...defaultConfig,
      ...customConfig,
      headers: {
        ...defaultConfig.headers,
        ...customConfig.headers,
      },
    }
  }

  private async request<T = any>(
    method: string,
    endpoint: string,
    data: any = {},
    customConfig: AxiosRequestConfig = {}
  ): Promise<T> {
    const url = this.baseURL + endpoint
    const config = this.mergeConfig(
      {
        headers: this.defaultHeaders,
      },
      customConfig
    )

    try {
      const response = await this.axiosInstance.request({
        method,
        url,
        data,
        ...config,
      })
      return response.data
    } catch (error) {
      console.info(
        `Error in ${method.toUpperCase()} request to ${endpoint}:`,
        (error as Error).message
      )
      throw error
    }
  }

  public get<T = any>(
    endpoint: string,
    params: any = {},
    customHeaders: AxiosRequestConfig['headers'] = {}
  ): Promise<any> {
    return this.request<T>('get', endpoint, { params }, { headers: customHeaders })
  }

  public post<T = any>(
    endpoint: string,
    data: any = {},
    customConfig: AxiosRequestConfig = {}
  ): Promise<any> {
    return this.request<T>('post', endpoint, data, customConfig)
  }

  public put<T = any>(
    endpoint: string,
    data: any = {},
    customConfig: AxiosRequestConfig = {}
  ): Promise<any> {
    return this.request<T>('put', endpoint, data, customConfig)
  }

  public delete<T = any>(endpoint: string, customConfig: AxiosRequestConfig = {}): Promise<any> {
    return this.request<T>('delete', endpoint, undefined, customConfig)
  }
  private async refreshAccessToken(refreshToken: string): Promise<string> {
    // Add logic here to refresh the access token using the refresh token
    // For example, make a request to your server to refresh the token
    // and return the new access token
    // const response = await axios.post('/refresh-token', { refreshToken });
    // const newAccessToken = response.data.accessToken;
    // return newAccessToken;

    // For simplicity, assuming a synchronous refresh (replace with your logic)
    return refreshToken
  }
  public setBaseUrl(newUrl: string): void {
    this.baseURL = newUrl
    this.axiosInstance.defaults.baseURL = newUrl
  }
}

export default HTTPService
