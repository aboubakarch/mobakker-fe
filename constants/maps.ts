import {
  SettingsNavigation,
  sidebarAdminNavigation,
  sidebarManagerNavigation,
  sidebarProvidernavigation,
} from "./constants";
import { NavigationTypeEnum } from "./enums";

export const NavigationHelperMap = {
  [NavigationTypeEnum.Manager]: sidebarManagerNavigation,
  [NavigationTypeEnum.Provider]: sidebarProvidernavigation,
  [NavigationTypeEnum.SuperAdmin]: sidebarAdminNavigation,
};
export const SettingsNavigationHelperMap = {
  [NavigationTypeEnum.Manager]: SettingsNavigation(""),
  [NavigationTypeEnum.Provider]: SettingsNavigation("/provider"),
  [NavigationTypeEnum.SuperAdmin]: SettingsNavigation("/admin"),
};
