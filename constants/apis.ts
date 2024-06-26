export const URLs = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
};

export const endpoints = {
  CREATE_BRANCH: '/v1/branch/create',
  CREATE_APPOINtMENT: '/v1/appointment/create',
  CREATE_SERVICE_TYPE: '/v1/service-type/create',
  CREATE_SERVICE: '/v1/service/create',
  LOGIN: '/v1/auth/login',
  REFRESH_TOKEN: '/v1/auth/regenerate-token',
  PROVIER_REGISTRATION: '/v1/auth/register/service-provider',
  EMPLOYEE_REGISTRATION: '/v1/auth/register/employee',
  CUSTOMER_CARE_REGISTRATION: '/v1/auth/register/customer-care',
  BRANCH_MANAGER_REGISTRATION: '/v1/auth/register/branch-manager',
  BRANCH: '/v1/branch',
  USER_UPDATE: '/v1/users/update',
  APPOINTMENTS: '/v1/appointment',
  SERVICE: '/v1/service',
  SERVICE_TYPE: '/v1/service-type',
  PROMOTION: '/v1/promotion',
  CREATE_PROMOTION: '/v1/promotion/create',
  SERVICE_BRANCH_MANAGER: '/v1/srvice-provider/branch-manager',
  GET_ALL_EMPLOYEES: '/v1/employee',
  GET_ALL_CUSTOMERS: '/v1/customer',
};
