
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
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.patch<T>(`${endpoints.BRANCH}/${id}`, payload, customConfig)
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
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.patch<T>(`${endpoints.BRANCH_MANAGER_UPDATE}/${id}`, payload, customConfig)
  }
  public editAdmin<T = any>(id: string, payload: object): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.patch<T>(`${endpoints.ADMIN_UPDATE}/${id}`, payload, customConfig)
  }
  public editServiceProvider<T = any>(id: string, payload: object): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.patch<T>(`${endpoints.SERVICE_PROVIDER_UPDATE}/${id}`, payload, customConfig)
  }
  public editCustomerCare<T = any>(id: string, payload: object): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.patch<T>(`${endpoints.CUSTOMER_CARE_UPDATE}/${id}`, payload, customConfig)
  }
  public editCustomer<T = any>(id: string, payload: object): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.patch<T>(`${endpoints.CUSTOMER_UPDATE}/${id}`, payload, customConfig)
  }
  public editEmployee<T = any>(id: string, payload: object): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.patch<T>(`${endpoints.EMPLOYEE_UPDATE}/${id}`, payload, customConfig)
  }
  public deleteBranch<T = any>(id: string): Promise<T> {
    return this.delete<T>(`${endpoints.BRANCH}/${id}`)
  }
  public login<T = any>(payload: ILoginPayload): Promise<T> {
    return this.post<T>(endpoints.LOGIN, payload)
  }
  public registerProvider<T = any>(payload: IProviderRegistrationFormValues): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.post<T>(endpoints.PROVIER_REGISTRATION, payload, customConfig)
  }
  public registerCustomer<T = any>(payload: IProviderRegistrationFormValues): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.post<T>(endpoints.CUSTOMER_REGISTRATION, payload, customConfig)
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
  public registerAdmin<T = any>(payload: IProviderFormValues): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.post<T>(endpoints.ADMIN_REGISTRATION, payload, customConfig)
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
  public getSubscribers<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.SUBSCRIPTION_SUBSCRIBERS, params)
  }
  public updateSubcriptionStatus<T = any>(id: string, params: any): Promise<T> {
    return this.patch<T>(`${endpoints.UPDATE_SUBSCRIBERS}/${id}`, params)
  }
  public getEmployees<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.GET_ALL_EMPLOYEES, params)
  }
  public getServiceProvider<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.SERVICE_PROVIDER, params)
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
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.patch<T>(`${endpoints.SERVICE}/${id}`, payload, customConfig)
  }
  public assignService<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.ASSIGN_SERVICE}/${id}`, payload)
  }
  public patchEmployee<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.GET_ALL_EMPLOYEES}/${id}`, payload)
  }
  public createServiceType<T = any>(payload: object): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.post<T>(endpoints.CREATE_SERVICE_TYPE, payload, customConfig)
  }
  public editServiceType<T = any>(id: string, payload: object): Promise<T> {
    const customConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return this.patch<T>(`${endpoints.SERVICE_TYPE}/${id}`, payload, customConfig)
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
  public updateAppointmentStatus<T = any>(id: string, status: any): Promise<T> {
    return this.patch<T>(`${endpoints.APPOINTMENTS}/status/${id}`, status)
  }
  public updateServiceStatus<T = any>(id: string, status: any): Promise<T> {
    return this.patch<T>(`${endpoints.SERVICE}/status/${id}`, status)
  }
  public updateBranchStatus<T = any>(id: string, status: any): Promise<T> {
    return this.patch<T>(`${endpoints.BRANCH}/status/${id}`, status)
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
  public getStates<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.STATES, params)
  }
  public getCountries<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.COUNTRIES, params)
  }
  public createCountry<T = any>(params: any): Promise<T> {
    return this.post<T>(endpoints.COUNTRIES, params)
  }
  public sendNotification<T = any>(params: any): Promise<T> {
    return this.post<T>(`${endpoints.NOTIFICATIONS}/send`, params)
  }
  public editCountry<T = any>(id: string, params: any): Promise<T> {
    return this.put<T>(`${endpoints.COUNTRIES}/${id}`, params)
  }
  public createState<T = any>(params: any): Promise<T> {
    return this.post<T>(endpoints.STATES, params)
  }
  public editState<T = any>(id: string, params: any): Promise<T> {
    return this.put<T>(`${endpoints.STATES}/${id}`, params)
  }
  public createCity<T = any>(params: any): Promise<T> {
    return this.post<T>(endpoints.GET_CITIES, params)
  }
  public editCity<T = any>(id: string, params: any): Promise<T> {
    return this.put<T>(`${endpoints.GET_CITIES}/${id}`, params)
  }
  public deleteCity<T = any>(id: string): Promise<T> {
    return this.delete<T>(`${endpoints.GET_CITIES}/${id}`)
  }
  public deleteState<T = any>(id: string): Promise<T> {
    return this.delete<T>(`${endpoints.STATES}/${id}`)
  }
  public deleteCountry<T = any>(id: string): Promise<T> {
    return this.delete<T>(`${endpoints.COUNTRIES}/${id}`)
  }
  public getCustomerCare<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.CUSTOMER_CARE_EMPLOYEE, params)
  }
  public getAdmins<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.GET_ADMIN, params)
  }
  public editPromotion<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.PROMOTION}/${id}`, payload)
  }
  public updatePromotionStatus<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.PROMOTION_STATUS}/${id}`, payload)
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
  public getWeeksAppointments<T = any>(params?: any): Promise<T> {
    return this.get<T>(endpoints.APPOINTMENTS_WEEK, params)
  }
  public getYearsAppointments<T = any>(params?: any): Promise<T> {
    return this.get<T>(endpoints.APPOINTMENTS_MONTH, params)
  }
  public getDailyAppointments<T = any>(params?: any): Promise<T> {
    return this.get<T>(endpoints.APPOINTMENTS_DAILY_REQUEST, params)
  }
  public getTotalAppointments<T = any>(params?: any): Promise<T> {
    return this.get<T>(endpoints.APPOINTMENTS_TOTAL, params)
  }
  public getNotifications<T = any>(params?: any): Promise<T> {
    return this.get<T>(endpoints.NOTIFICATIONS, params)
  }
  public getUnreadNotifications<T = any>(params?: any): Promise<T> {
    return this.get<T>(endpoints.NOTIFICATIONS_UNREAD, params)
  }
  public markNotication<T = any>(id: string, payload?: object): Promise<T> {
    return this.patch<T>(`${endpoints.NOTIFICATIONS_MARK_READ}/${id}`, payload)
  }
  public markAllNotication<T = any>(payload?: object): Promise<T> {
    return this.patch<T>(`${endpoints.NOTIFICATIONS_ALL_MARK_READ}`, payload)
  }
  public addNoticationId<T = any>(payload?: object): Promise<T> {
    return this.post<T>(`${endpoints.NOTIFICATIONS_ADD_ID}`, payload)
  }
  public getMostActiveCity<T = any>(): Promise<T> {
    return this.get<T>(endpoints.APPOINTMENTS_CITY)
  }
  public getMostActiveProvider<T = any>(): Promise<T> {
    return this.get<T>(endpoints.APPOINTMENTS_PROVIDER)
  }
  public getMostActiveService<T = any>(): Promise<T> {
    return this.get<T>(endpoints.APPOINTMENTS_SERVICE)
  }
  public getMostActiveCategory<T = any>(): Promise<T> {
    return this.get<T>(endpoints.SERVICE_ACTIVE_CATE)
  }
  public getBranchRatings<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.BRANCH_RATING, params)
  }
  public getServiceRatings<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.SERVICE_RATING, params)
  }
  public getEmployeeRatings<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.EMPLOYEE_RATING, params)
  }
  public getCustomerRatings<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.CUSTOMER_RATING, params)
  }
  public postCustomerRating<T = any>(params: any): Promise<T> {
    return this.post<T>(`${endpoints.CUSTOMER_RATING_CREATE}`, params)
  }
  public createRefund<T = any>(params: any): Promise<T> {
    return this.post<T>(`${endpoints.REFUND}`, params)
  }
  public getRefunds<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.REFUND, params)
  }
  public refundExecute<T = any>(payload: any): Promise<T> {
    return this.post<T>(endpoints.REFUND_EXECUTE, payload)
  }
  public editRefund<T = any>(id: string, payload: object): Promise<T> {
    return this.patch<T>(`${endpoints.REFUND}/${id}`, payload)
  }
  public createLoyaltyProgram<T = any>(params: any): Promise<T> {
    return this.post<T>(`${endpoints.LOYALTY_PROGRAM_CREATE}`, params)
  }
  public editLoyalProgram<T = any>(id: string, payload?: object): Promise<T> {
    return this.patch<T>(`${endpoints.LOYALTY_PROGRAM}/${id}`, payload)
  }
  public getLoyalPrograms<T = any>(params: any): Promise<T> {
    return this.get<T>(endpoints.LOYALTY_PROGRAM, params)
  }
  public deleteLoyalProgram<T = any>(id: string): Promise<T> {
    return this.delete<T>(`${endpoints.LOYALTY_PROGRAM}/${id}`)
  }
}

export default APIService
