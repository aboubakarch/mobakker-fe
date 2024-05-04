import { ISideBarItem } from "@/@types/sidebar";
import {
  BranchIcon,
  ClipboardIcon,
  HomeIcon,
  NotificationIcon,
  PageIcon,
  PaymentIcon,
  PeopleIcon,
  PersonStarIcon,
  SettingsIcon,
  SpeakerIcon,
  StarIcon,
  TicketIcon,
  UserIcon,
} from "@/svgs";

export const messages = {
  DONT_HAVE_ACCOUNT: "common:dontHaveAccount",
  SIGN_IN: "common:signIn",
  SIGN_UP: "common:signUp",
  FORGOT_PASSWORD: "common:forgotPassword",
  WELCOME: "common:welcome",
  GOOD_MORNING: "common:goodMorning",
  ACTIVE_PROMOTIONS: "common:activePromotions",
  SALES_AMOUNT: "common:salesAmount",
  DAILY_PROGRESS: "common:dailyProgress",
  MONTHLY_PROGRESS: "common:monthlyProgress",
  TODAYS_PERFORMANCE: "common:todaysPerformance",
  EXPORT: "common:export",
  APPLY_FILTER: "common:applyFilter",
  REPORTS: "common:reports",
  EMPLOYEES: "common:employees",
  ADD_EMPLOYEES: "common:addEmployees",
  ADD_EMPLOYEE: "common:addEmployee",
  SERVICES: "common:services",
  COMPLAINTS: "common:complaints",
  RATINGS: "common:ratings",
  RATING_APPOINTMENT: "common:ratingAppointment",
  RATING_EMPLOYEE: "common:ratingEmployee",
  ADD_SERVICES: "common:addServices",
  APPOINTMENTS: "common:appointments",
  ADD_APPOINTMENTS: "common:addAppointments",
  LOYAL_PROGRAM: "common:loyalProgram",
  Promotions: "common:promotions",
  BRANCH: "common:branch",
  PROVIDERS: "common:providers",
  MANAGE_USERS: "common:manageUsers",
  SUBSCRIPTION: "common:subscription",
  SELECT: "common:select",
  COMPLETE: "common:complete",
  TOTAL_REQ: "common:totalRequests",
  CANCELLED: "common:cancelled",
  ENTERED_MAN: "common:enteredManually",
  EDIT: "common:edit",
  DELETE: "common:delete",
  TRANSFER: "common:transfer",
  ACTIONS: "common:actions",
  LOGIN: "common:login",
  SELECT_LANGUAGE: "common:selectLanguage",
  ADD_BRANCH: "common:addBranch",
  SAVE: "common:save",
  CANCEL: "common:cancel",
  ADD_PROVIDER: "common:addProvider",
  ADD_NEW_PROVIDER: "common:addNewProvider",
  ADD_SERVICE: "common:addService",
  ADD_PROMOTION: "common:addPromotion", // Added Add Promotion
  ADD_NEW_PROMOTION: "common:addNewPromotion", // Added Add New Promotion,
  ADD_NEW_APPOINTMENT: "common:addNewAppointment",

  PRICING_TABLE: "common:pricingTable",
  OUR_PRICING_PLAN: "common:ourPricingPlan",
  YOUR_CURRENT_PACKAGE: "common:yourCurrentPackage",
  RENEW_PACKAGE: "common:renewPackage",
  CHOOSE_BASIC: "common:chooseBasic",
  BASIC_PACKAGE: "common:basicPackage",
  USER: "common:user",
  ALL_UI_COMPONENTS: "common:allUIComponents",
  LIFETIME_ACCESS: "common:lifetimeAccess",
  FREE_UPDATES: "common:freeUpdates",
  USE_ON_PROJECT: "common:useOnProject",
  SUPPORT: "common:support",
  CHOOSE_FULL: "common:chooseFull",
  PAUSE: "common:pause",
  CHOOSE_PRO: "common:choosePro",
  FULL_PACKAGE: "common:fullPackage",
  PRO_PACKAGE: "common:proPackage",
  CREATE_SUBSCRIPTION: "common:createSubscription",
  PERSONAL_WEBSITE_PROJECT: "common:personalWebsiteProject",
  THREE_MONTHS_SUPPORT: "common:threeMonthsSupport",
  SETTINGS: "common:settings",
  CANCEL_APP_APPOINTMENTS: "auth:cancelAppAppointments",
  BLOCK_USER: "common:blockUser",
  LANGUAGES: "common:languages",
  TECHNICAL_SUPPORT: "common:technicalSupport",
  BRANCH_CERTIFICATES: "common:branchCertificates",
  NOTIFICATION: "common:notification",
  INTEGRATION: "common:integration",
  ADVERTISEMENT: "common:advertisement",
  CREATE_USER: "common:createUser",
  NOTIFICATIONS: "common:notifications",
  CREATE_APPOINTMENT: "common:createAppointment",
  BRANCH_EMPLOYEES: "common:branchEmployees",
  UPLOAD_APPOINTMENT: "common:uploadAppointment",
  UPDATE: "common:update",
  UPLOAD_IMAGE: "common:uploadImage",
  IMAGE_FORMATS: "common:imageFormats",
  BRANCH_PROFILE: "common:branchProfile",
  LOGO: "common:logo",
  DELETE_CONFIRMATION: "common:deleteConfirmation",
  ARE_YOU_SURE: "common:areYouSure",
  ALREADY_HAVE_ACCOUNT: "common:alreadyHaveAccount",
  BRANCH_MANAGERS: "common:branchManagers",
  MANAGERS: "common:managers",
  CUSTOMER_CARE: "common:customerCare",
  ADD_MANAGER: "common:addManager",
  ADD_REPRESENTATIVE: "common:addRepresentative",
  LOGOUT: "common:logout",
};

export const tableHeader = {
  NAME: "table:name",
  SERVICE_NAME: "table:serviceName",
  JOB_DESC: "table:jobDesc",
  DETAILS: "table:details",
  SERVICE_TYPE: "table:serviceType",
  BOOKED_TODAY: "table:bookedToday",
  WORKING_HOURS: "table:workingHours",
  RATING: "table:rating",
  EMPLOYEE_NUM: "table:employeeNum",
  TIME_SLOT: "table:timeSlot",
  PRICE: "table:price",
  BOOKING_ID: "table:bookingId",
  CUSTOMER_NAME: "table:customerName",
  CUSTOMER_NUMBER: "table:customerNumber",
  SERVICES_BOOKED: "table:servicesBooked",
  BRANCH_NAME: "table:branchName",
  PROVIDER_NAME: "table:providerName",
  USER_NAME: "table:userName",
  TIME: "table:time",
  RANK: "table:rank",
  LOYAL_CUSTOMER: "table:loyalCustomer",
  TOTAL_BOOKING: "table:totalBooking",
  MOST_BOOKED: "table:mostBooked",
  LAST_BOOKING: "table:lastBooking",
  PROMOTION_NAME: "table:promotionName",
  START_DATE: "table:startDate",
  END_DATE: "table:endDate",
  STATUS: "table:status",
  CAPACITY: "table:capacity",
  AVAILABLE: "table:available",
  TYPE: "table:type",
  PAID: "table:paid",
  RENEWAL: "table:renewal",
  DAY_LEFT: "table:dayLeft",
  SUBSCRIPTION: "table:subscription",
  LOCATION: "table:location",
  DESC: "table:description",
  PASSWORD: "table:password",
  COMPLAINT: "table:complaint",
  TYPE_USER: "table:userType",
  ATTACHMENT: "table:attachment",
  CITY: "table:city",
  BOOKING_ID_SUB: "table:bookingIdSubscription",
  COMPLAINT_MESSAGE: "table:complaintMessage",
  STATE: "table:state",
  EMAIL: "table:email",
  PHONE: "table:phone",
  COUNTRY: "table:country",
};

export const formConstants = {
  EMAIL_PLACEHOLDER: "auth:emailPlaceholder",
  EMAIL_LABEL: "auth:emailLabel",
  EMAIL: "auth:email",
  PASS_PLACEHOLDER: "auth:passPlaceholder",
  PASS_LABEL: "auth:passLabel",
  PASS: "auth:pass",
  NAME_PLACEHOLER: "auth:namePlaceholder",
  BRANCH_NAME_LABEL: "auth:branchNameLabel",
  DETAILS: "auth:detailsPlaceholder",
  LOCATION: "auth:locationPlaceholder",
  EMPLOYEE_NAME: "auth:employeeName",
  JOB_DESC: "auth:jobDesc",
  DESC: "auth:desc",
  WORKING_HOURS: "auth:workingHours",
  HOURS: "auth:hours",
  EMPLOYEE_NUM: "auth:employeeNum",
  PROVIDER_NAME: "auth:providerName",
  ABOUT_PROVIDER: "auth:aboutProvider",
  SERVICE_NAME: "auth:serviceName",
  PRICE: "auth:price",
  TYPE_OF_SERVICE: "auth:typeOfService",
  SELECT_EMPLOYEES: "auth:selectEmployees",
  SERVICE_AVAILABILITY: "auth:serviceAvailability",
  FROM: "auth:from",
  TO: "auth:to",
  EMPLOYEES: "auth:employees",
  PROMOTION_NAME: "auth:promotionName",
  SELECT_CATEGORY: "auth:selectCategory",
  CATEGORY: "auth:category",
  CAPACITY: "auth:capacity",
  SELECT_DATE: "auth:selectDate",
  DATE: "auth:date",
  SELECT_TIME: "auth:selectTime",
  STATUS: "auth:status",
  SELECT_SERVICE: "auth:selectService",
  PAYMENT_TYPE: "auth:paymentType",
  SELECT_APPOINTMENT_TIME: "auth:selectAppointmentTime",
  SELECT_ALL: "auth:selectAll",
  REPEAT_FOR_DAY: "auth:repeatForDay",
  REPEAT_FOR_WEEK: "auth:repeatForWeek",
  REPEAT_FOR_MONTH: "auth:repeatForMonth",
  STATE: "auth:state",
  CITY: "auth:city",
  PHONE: "auth:phone",
  FIRST_NAME: "auth:firstName",
  LAST_NAME: "auth:lastName",
  TIME_SLOT: "auth:timeSlot",
};

export const SideBarItems = {
  Dashboard: (prefix: string) => ({
    id: 1,
    name: "navigation:dashboard",
    icon: HomeIcon,
    link: `${prefix}`,
  }),
  Branch: (prefix: string) => ({
    id: 13,
    name: "navigation:branch",
    icon: BranchIcon,
    link: `${prefix}/branch`,
  }),
  Reports: (prefix: string) => ({
    id: 2,
    name: "navigation:reports",
    icon: ClipboardIcon,
    link: `${prefix}/reports`,
  }),
  Appointment: (prefix: string) => ({
    id: 3,
    name: "navigation:appointments",
    icon: TicketIcon,
    link: `${prefix}/appointments`,
  }),
  Employee: (prefix: string) => ({
    id: 4,
    name: "navigation:employees",
    icon: PeopleIcon,
    link: `${prefix}/employees`,
  }),
  LoyalProgram: (prefix: string) => ({
    id: 5,
    name: "navigation:loyalPrograms",
    icon: PersonStarIcon,
    link: `${prefix}/loyal-program`,
  }),
  Services: (prefix: string) => ({
    id: 6,
    name: "navigation:services",
    icon: PageIcon,
    link: `${prefix}/services`,
  }),
  Promotions: (prefix: string) => ({
    id: 7,
    name: "navigation:promotions",
    icon: SpeakerIcon,
    link: `${prefix}/promotions`,
  }),
  Rating: (prefix: string) => ({
    id: 8,
    name: "navigation:rating",
    icon: StarIcon,
    link: `${prefix}/ratings`,
  }),
  Notification: (prefix: string) => ({
    id: 9,
    name: "navigation:notifications",
    icon: NotificationIcon,
    link: `${prefix}/notifications`,
  }),
  Complaints: (prefix: string) => ({
    id: 14,
    name: "navigation:complaints",
    icon: ClipboardIcon,
    link: `${prefix}/complaints`,
  }),
  Providers: (prefix: string) => ({
    id: 10,
    name: "navigation:providers",
    icon: NotificationIcon,
    link: `${prefix}/providers`,
  }),
  Users: (prefix: string) => ({
    id: 11,
    name: "navigation:manageUsers",
    icon: UserIcon,
    link: `${prefix}/users`,
  }),
  BranchMangers: (prefix: string) => ({
    id: 15,
    name: "navigation:branchManagers",
    // icon: Badge as any,
    icon: BranchIcon,
    link: `${prefix}/branch-managers`,
  }),
  CustomerCare: (prefix: string) => ({
    id: 16,
    name: "navigation:customerCare",
    // icon: ShieldQuestionIcon as any,
    icon: UserIcon,
    link: `${prefix}/customer-care`,
  }),
};
export const sidebarAdminNavigation: ISideBarItem[] = Object.values(
  SideBarItems
)
  .map((i) => i("/admin"))
  .filter((i: any) => i.id !== 15 || i.id !== 16);
export const sidebarProvidernavigation: ISideBarItem[] = [
  SideBarItems.Dashboard("/provider"),
  SideBarItems.Branch("/provider"),
  SideBarItems.Reports("/provider"),
  SideBarItems.Appointment("/provider"),
  SideBarItems.Employee("/provider"),
  SideBarItems.BranchMangers("/provider"),
  SideBarItems.CustomerCare("/provider"),
  SideBarItems.LoyalProgram("/provider"),
  SideBarItems.Services("/provider"),
  SideBarItems.Promotions("/provider"),
  SideBarItems.Rating("/provider"),
  SideBarItems.Notification("/provider"),
];
export const sidebarManagerNavigation: ISideBarItem[] = [
  SideBarItems.Dashboard("/"),
  SideBarItems.Reports(""),
  SideBarItems.Appointment(""),
  SideBarItems.Employee(""),
  SideBarItems.LoyalProgram(""),
  SideBarItems.Services(""),
  SideBarItems.Promotions(""),
  SideBarItems.Rating(""),
  SideBarItems.Notification(""),
];
export const sidebarCustomerServiceNavigation: ISideBarItem[] = [
  SideBarItems.Dashboard("/"),
  SideBarItems.Appointment(""),
];

export const SettingsNavigation = (prefix: string): ISideBarItem[] => [
  {
    id: 1,
    name: "navigation:subscription",
    icon: PaymentIcon,
    link: `${prefix}/subscription`,
  },
  {
    id: 2,
    name: "navigation:settings",
    icon: SettingsIcon,
    link: `${prefix}/settings`,
  },
];

export const DaysOfWeek: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const HourTimes: string[] = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];
