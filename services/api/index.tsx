
import { endpoints } from '@/constants/apis'
import HTTPService from '../http'
import { IProviderFormValues, IProviderRegistrationFormValues } from '@/@types/forms'

class APIService extends HTTPService {
  private static apiInstance: APIService | null = null

  private constructor(baseURL?: string | undefined) {
    super(baseURL)
  }

  // Static method to get the singleton apiInstance
  public static getInstance(baseURL?: string | undefined): APIService {
    if (!APIService.apiInstance) {
      APIService.apiInstance = new APIService(baseURL)
    }
    return APIService.apiInstance
  }
  public createBranch<T = any>(payload: object): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.post<T>(endpoints.CREATE_BRANCH, payload, customConfig)
  }
  public createAppointment<T = any>(payload: object): Promise<T> {
    return this.post<T>(endpoints.CREATE_APPOINtMENT, payload)
  }
  public editBranch<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.BRANCH}/${id}`, payload)
  }
  public editAppointment<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.APPOINTMENTS}/${id}`, payload)
  }
  public editUser<T = any>(payload: object): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.patch<T>(`${endpoints.USER_UPDATE}`, payload, customConfig)
  }
  public editBranchManager<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.BRANCH_MANAGER_UPDATE}/${id}`, payload)
  }
  public editAdmin<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.ADMIN_UPDATE}/${id}`, payload)
  }
  public editServiceProvider<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.SERVICE_PROVIDER_UPDATE}/${id}`, payload)
  }
  public editCustomerCare<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.CUSTOMER_CARE_UPDATE}/${id}`, payload)
  }
  public editEmployee<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.EMPLOYEE_UPDATE}/${id}`, payload)
  }
  public deleteBranch<T = any>(id: string): Promise<T> {
    return this.delete<T>(`${endpoints.BRANCH}/${id}`)
  }
  public login<T = any>(payload: ILoginPayload): Promise<T> {
    return this.post<T>(endpoints.LOGIN, payload)
  }
  public registerProvider<T = any>(payload: IProviderRegistrationFormValues): Promise<T> {
    return this.post<T>(endpoints.PROVIER_REGISTRATION, payload)
  }
  public verifyOtp<T = any>(payload: IProviderRegistrationFormValues): Promise<T> {
    return this.post<T>(endpoints.OTP_VERIFY, payload)
  }
  public registerEmployees<T = any>(payload: IProviderRegistrationFormValues): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.post<T>(endpoints.EMPLOYEE_REGISTRATION, payload, customConfig)
  }
  public registerBranchManager<T = any>(payload: IProviderFormValues): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.post<T>(endpoints.BRANCH_MANAGER_REGISTRATION, payload, customConfig)
  }
  public registerCustomerCare<T = any>(payload: IProviderFormValues): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.post<T>(endpoints.CUSTOMER_CARE_REGISTRATION, payload, customConfig)
  }
  public getBranches<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.BRANCH, params)
  }
  public getEmployeeBranch<T = any>(): Promise<T> {
    return this.get<T>(endpoints.BRANCH_EMPLOYEE)
  }
  public getCustomers<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.GET_ALL_CUSTOMERS, params)
  }
  public getSubscriptions<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.SUBSCRIPTION, params)
  }
  public getEmployees<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.GET_ALL_EMPLOYEES, params)
  }
  public getAppointments<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.APPOINTMENTS, params)
  }
  public getServices<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.SERVICE, params)
  }
  public getServiceType<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.SERVICE_TYPE, params)
  }
  public deleteService<T = any>(id: string): Promise<T> {
    return this.delete<T>(`${endpoints.SERVICE}/${id}`)
  }
  public createService<T = any>(payload: any): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.post<T>(endpoints.CREATE_SERVICE, payload, customConfig)
  }
  public subscribeSubscription<T = any>(payload: object): Promise<T> {
    return this.post<T>(endpoints.SUBSCRIBE_SUBSCRIPTION, payload)
  }
  public editService<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.SERVICE}/${id}`, payload)
  }
  public assignService<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.ASSIGN_SERVICE}/${id}`, payload)
  }
  public patchEmployee<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.GET_ALL_EMPLOYEES}/${id}`, payload)
  }
  public createServiceType<T = any>(payload: object): Promise<T> {
    return this.post<T>(endpoints.CREATE_SERVICE_TYPE, payload)
  }
  public editServiceType<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.SERVICE_TYPE}/${id}`, payload)
  }
  public deleteServiceType<T = any>(id: string): Promise<T> {
    return this.delete<T>(`${endpoints.SERVICE_TYPE}/${id}`)
  }
  public deletePromotion<T = any>(id: string): Promise<T> {
    return this.delete<T>(`${endpoints.PROMOTION}/${id}`)
  }
  public deleteAppointment<T = any>(id: string): Promise<T> {
    return this.delete<T>(`${endpoints.APPOINTMENTS}/${id}`)
  }
  public deleteUser<T = any>(id: string): Promise<T> {
    return this.delete<T>(`${endpoints.USERS}/${id}`)
  }
  public deleteEmployee<T = any>(id: string): Promise<T> {
    return this.delete<T>(`${endpoints.GET_ALL_EMPLOYEES}/${id}`)
  }
  public getPromotions<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.PROMOTION, params)
  }
  public getServiceBranchManager<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.SERVICE_BRANCH_MANAGER, params)
  }
  public getCities<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.GET_CITIES, params)
  }
  public getCustomerCare<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.CUSTOMER_CARE_EMPLOYEE, params)
  }
  public editPromotion<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.PROMOTION}/${id}`, payload)
  }
  public createPromotion<T = any>(payload: object): Promise<T> {
    return this.post<T>(endpoints.CREATE_PROMOTION, payload)
  }
  public getEmployeeCount<T = any>(params?: any): Promise<T> {
    return this.get<T>(endpoints.EMPLOYEE_COUNT, params)
  }
  public getServiceCount<T = any>(params?: any): Promise<T> {
    return this.get<T>(endpoints.SERVICE_COUNT, params)
  }
  public getPromotionCount<T = any>(params?: any): Promise<T> {
    return this.get<T>(endpoints.PROMOTIONS_COUNT, params)
  }
  public getLoyalProgramCount<T = any>(params?: any): Promise<T> {
    return this.get<T>(endpoints.LOYAL_PROGRAMS_COUNT, params)
  }
}

export default APIService
