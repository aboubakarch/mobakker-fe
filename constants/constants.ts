import {
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
  DONT_HAVE_ACCOUNT: "Dont have an account?",
  SIGN_IN: "Sign in",
  SIGN_Up: "Sign Up",
  FORGOT_PASSWORD: "Forgot Password?",
  WELCOME: "Hey \nWelcome to\nMawaqeet",
  GOOD_MORNING: "Good Morning, ",
  PROMOTIONS: "Active Promotions",
  SALES_AMOUNT: "Sales Amount Per Week",
  DAILY_PROGRESS: "Daily Progress",
  MONTHLY_PROGRESS: "Monthly Progress",
  TODAYS_PERFORMANCE: "Todays Performance",
  EXPORT: "Export",
  APPLY_FILTER: "Apply Filter",
  REPORTS: "Reports",
  SELECT: "Select",
  COMPLETE: "Complete",
  TOTAL_REQ: "Total Requests",
  CANCELLED: "Cancelled",
  ENTERED_MAN: "Entered Manually",
};

export const formConstants = {
  EMAIL_PLACEHOLDER: "Email",
  EMAIL_LABEL: "Email Address",
  EMAIL: "email",
  PASS_PLACEHOLDER: "Password",
  PASS_LABEL: "Your Password",
  PASS: "password",
};

export const sidebarNavigation = (prefix: string): ISideBarItem[] => [
  {
    id: 1,
    name: "Dashboard",
    icon: HomeIcon,
    link: `${prefix}`,
  },
  {
    id: 2,
    name: "Reports",
    icon: ClipboardIcon,
    link: `${prefix}/reports`,
  },
  {
    id: 3,
    name: "Appointments",
    icon: TicketIcon,
    link: `${prefix}/appointments`,
  },
  {
    id: 4,
    name: "Employees",
    icon: PeopleIcon,
    link: `${prefix}/employees`,
  },
  {
    id: 5,
    name: "Loyal Programs",
    icon: PersonStarIcon,
    link: `${prefix}/loyal-program`,
  },
  {
    id: 6,
    name: "Services",
    icon: PageIcon,
    link: `${prefix}/services`,
  },
  {
    id: 7,
    name: "Promotions",
    icon: SpeakerIcon,
    link: `${prefix}/services`,
  },
  {
    id: 8,
    name: "Rating",
    icon: StarIcon,
    link: `${prefix}/rating`,
  },
  {
    id: 9,
    name: "Notifications",
    icon: NotificationIcon,
    link: `${prefix}/notifications`,
  },
];
export const sidebarAdminNavigation: ISideBarItem[] = [
  ...sidebarNavigation("/admin"),
  {
    id: 10,
    name: "Providers",
    icon: NotificationIcon,
    link: "/admin/providers",
  },
  {
    id: 11,
    name: "Manage Users",
    icon: UserIcon,
    link: "/admin/users",
  },
];
export const SettingsNavigation: ISideBarItem[] = [
  {
    id: 1,
    name: "Subscription",
    icon: PaymentIcon,
    link: "/subscription",
  },
  {
    id: 2,
    name: "Settings",
    icon: SettingsIcon,
    link: "/settings",
  },
];
