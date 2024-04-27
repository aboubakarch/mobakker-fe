
import { endpoints } from '@/constants/apis'
import HTTPService from '../http'
import { IProviderRegistrationFormValues } from '@/@types/forms'

class APIService extends HTTPService {
  private static apiInstance: APIService | null = null

  private constructor(baseURL?: string | undefined, token?: string | undefined) {
    super(baseURL, token)
  }

  // Static method to get the singleton apiInstance
  public static getInstance(baseURL?: string | undefined, token?: string | undefined): APIService {
    if (!APIService.apiInstance) {
      APIService.apiInstance = new APIService(baseURL, token)
    }
    return APIService.apiInstance
  }
  public createBranch<T = any>(payload: object): Promise<T> {
    return this.post<T>(endpoints.CREATE_BRANCH, payload)
  }
  public login<T = any>(payload: ILoginPayload): Promise<T> {
    return this.post<T>(endpoints.LOGIN, payload)
  }
  public registerProvider<T = any>(payload: IProviderRegistrationFormValues): Promise<T> {
    return this.post<T>(endpoints.PROVIER_REGISTRATION, payload)
  }

}

export default APIService
