export const prefix = "/v1";
export const URLs = {
  BASE_URL: `${process.env.NEXT_PUBLIC_BASE_URL}${prefix}`,
};

export const endpoints = {
  CREATE_BRANCH: "/branch/create",
  CREATE_APPOINtMENT: "/appointment/create",
  CREATE_SERVICE_TYPE: "/service-type/create",
  CREATE_SERVICE: "/service/create",
  LOGIN: "/auth/login",
  REFRESH_TOKEN: "/auth/regenerate-token",
  PROVIER_REGISTRATION: "/auth/register/service-provider",
  EMPLOYEE_REGISTRATION: "/auth/register/employee",
  CUSTOMER_CARE_REGISTRATION: "/auth/register/customer-care",
  BRANCH_MANAGER_REGISTRATION: "/auth/register/branch-manager",
  ASSIGN_SERVICE: "/branch/assign-service",
  BRANCH: "/branch",
  USER_UPDATE: "/users/update",
  USERS: "/users",
  BRANCH_MANAGER_UPDATE: "/users/update/branch-mnager",
  ADMIN_UPDATE: "/users/update/admin",
  SERVICE_PROVIDER_UPDATE: "/users/update/service-provider",
  CUSTOMER_CARE_UPDATE: "/users/update/customer-care",
  EMPLOYEE_UPDATE: "/users/update/employee",
  APPOINTMENTS: "/appointment",
  SERVICE: "/service",
  SERVICE_TYPE: "/service-type",
  PROMOTION: "/promotion",
  CREATE_PROMOTION: "/promotion/create",
  SERVICE_BRANCH_MANAGER: "/employee/branch-manager",
  CUSTOMER_CARE_EMPLOYEE: "/employee/customer-care",
  GET_ALL_EMPLOYEES: "/employee",
  GET_ALL_CUSTOMERS: "/customer",
  SUBSCRIPTION: "/subscriptions",
  SUBSCRIBE_SUBSCRIPTION: "/subscriptions/subscribe",
  GET_CITIES: "/country-state-city/cities",
};
