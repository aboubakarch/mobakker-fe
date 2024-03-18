import {
  SettingsNavigation,
  sidebarAdminNavigation,
  sidebarNavigation,
} from "./constants";
import { NavigationTypeEnum } from "./enums";

export const NavigationHelperMap = {
  [NavigationTypeEnum.Manager]: sidebarNavigation(""),
  [NavigationTypeEnum.Provider]: sidebarNavigation("/provider"),
  [NavigationTypeEnum.SuperAdmin]: sidebarAdminNavigation,
};
export const SettingsNavigationHelperMap = {
  [NavigationTypeEnum.Manager]: SettingsNavigation(""),
  [NavigationTypeEnum.Provider]: SettingsNavigation("/provider"),
  [NavigationTypeEnum.SuperAdmin]: SettingsNavigation("/admin"),
};
