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
};

export const formConstants = {
  EMAIL_PLACEHOLDER: "Email",
  EMAIL_LABEL: "Email Address",
  EMAIL: "email",
  PASS_PLACEHOLDER: "Password",
  PASS_LABEL: "Your Password",
  PASS: "password",
};

export const sidebarNavigation: ISideBarItem[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: HomeIcon,
    link: "/",
  },
  {
    id: 2,
    name: "Reports",
    icon: ClipboardIcon,
    link: "/",
  },
  {
    id: 3,
    name: "Appointments",
    icon: TicketIcon,
    link: "/",
  },
  {
    id: 4,
    name: "Employees",
    icon: PeopleIcon,
    link: "/",
  },
  {
    id: 5,
    name: "Loyal Programs",
    icon: PersonStarIcon,
    link: "/",
  },
  {
    id: 6,
    name: "Services",
    icon: PageIcon,
    link: "/",
  },
  {
    id: 7,
    name: "Promotions",
    icon: SpeakerIcon,
    link: "/",
  },
  {
    id: 8,
    name: "Rating",
    icon: StarIcon,
    link: "/",
  },
  {
    id: 9,
    name: "Notifications",
    icon: NotificationIcon,
    link: "/",
  },
];
export const SettingsNavigation: ISideBarItem[] = [
  {
    id: 1,
    name: "Subscription",
    icon: PaymentIcon,
    link: "/",
  },
  {
    id: 2,
    name: "Settings",
    icon: SettingsIcon,
    link: "/",
  },
];
