import {
  SettingsNavigation,
  sidebarAdminNavigation,
  sidebarCustomerServiceNavigation,
  sidebarManagerNavigation,
  sidebarProvidernavigation,
} from "./constants";
import { NavigationTypeEnum, RoleType } from "./enums";

export const NavigationHelperMap = {
  [NavigationTypeEnum.Manager]: sidebarManagerNavigation,
  [NavigationTypeEnum.CustomerService]: sidebarCustomerServiceNavigation,
  [NavigationTypeEnum.Provider]: sidebarProvidernavigation,
  [NavigationTypeEnum.SuperAdmin]: sidebarAdminNavigation,
};
export const SettingsNavigationHelperMap = {
  [NavigationTypeEnum.Manager]: SettingsNavigation(""),
  [NavigationTypeEnum.CustomerService]: SettingsNavigation(""),
  [NavigationTypeEnum.Provider]: SettingsNavigation("/provider"),
  [NavigationTypeEnum.SuperAdmin]: SettingsNavigation("/admin"),
};

export const RoleHelperMap = {
  [RoleType.ADMIN]: "admin",
  [RoleType.SUPER_ADMIN]: "admin",
  [RoleType.BRANCH_MANAGER]: "",
  [RoleType.SERVICE_PROVIDER]: "provider",
  [RoleType.CUSTOMER_CARE]: "",
};
