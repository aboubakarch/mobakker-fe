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
};

export const tableHeader = {
  NAME: "Name",
  SERVICE_NAME: "Service Name",
  JOB_DESC: "Job Description",
  DETAILS: "Details",
  SERVICE_TYPE: "Type of Service",
  BOOKED_TODAY: "Booked Today",
  WORKING_HOURS: "Working Hours",
  RATING: "Rating",
  EMPLOYEE_NUM: "Number of Employees",
  TIME_SLOT: "Time Slot",
  PRICE: "Price",
  BOOKING_ID: "Booking ID",
  CUSTOMER_NAME: "Customer Name",
  CUSTOMER_NUMBER: "Customer Number",
  SERVICES_BOOKED: "Services Booked",
  BRANCH_NAME: "Branch Name",
  PROVIDER_NAME: "Provider Name",
  USER_NAME: "User Name",
  TIME: "Time",
  RANK: "Rank",
  LOYAL_CUSTOMER: "Loyal Customer",
  TOTAL_BOOKING: "Total Bookings",
  MOST_BOOKED: "Most Booked Service",
  LAST_BOOKING: "Last Booking",
  PROMOTION_NAME: "Promotion Name",
  START_DATE: "Start Date",
  END_DATE: "End Date",
  STATUS: "Status",
  CAPACITY: "Capacity",
  AVAILABLE: "Available",
  TYPE: "Type",
  PAID: "Paid",
  RENEWAL: "Renewal",
  DAY_LEFT: "Day Left",
  SUBCRIPTION: "Subscription#",
  LOCATION: "Location",
  DESC: "Description",
  PASSWORD: "Password",
  COMPLAINT: "Complaint",
  TYPE_USER: "User Type",
  ATTACHMENT: "Attachment",
  CITY: "City",
  BOOKING_ID_SUB: "Booking ID/Subscription",
  COMPLAINT_MESSAGE: "Complaint Message",
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
};

export const sidebarNavigation = (prefix: string): ISideBarItem[] => [
  {
    id: 1,
    name: "navigation:dashboard",
    icon: HomeIcon,
    link: `${prefix}`,
  },
  {
    id: 13,
    name: "navigation:branch",
    icon: BranchIcon,
    link: `${prefix}/branch`,
  },
  {
    id: 2,
    name: "navigation:reports",
    icon: ClipboardIcon,
    link: `${prefix}/reports`,
  },
  {
    id: 3,
    name: "navigation:appointments",
    icon: TicketIcon,
    link: `${prefix}/appointments`,
  },
  {
    id: 4,
    name: "navigation:employees",
    icon: PeopleIcon,
    link: `${prefix}/employees`,
  },
  {
    id: 5,
    name: "navigation:loyalPrograms",
    icon: PersonStarIcon,
    link: `${prefix}/loyal-program`,
  },
  {
    id: 6,
    name: "navigation:services",
    icon: PageIcon,
    link: `${prefix}/services`,
  },
  {
    id: 7,
    name: "navigation:promotions",
    icon: SpeakerIcon,
    link: `${prefix}/promotions`,
  },
  {
    id: 8,
    name: "navigation:rating",
    icon: StarIcon,
    link: `${prefix}/ratings`,
  },
  {
    id: 9,
    name: "navigation:notifications",
    icon: NotificationIcon,
    link: `${prefix}/notifications`,
  },
  {
    id: 14,
    name: "navigation:complaints",
    icon: ClipboardIcon,
    link: `${prefix}/complaints`,
  },
];
export const sidebarAdminNavigation: ISideBarItem[] = [
  ...sidebarNavigation("/admin"),
  {
    id: 10,
    name: "navigation:providers",
    icon: NotificationIcon,
    link: "/admin/providers",
  },
  {
    id: 11,
    name: "navigation:manageUsers",
    icon: UserIcon,
    link: "/admin/users",
  },
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
