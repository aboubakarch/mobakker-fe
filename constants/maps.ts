import { sidebarAdminNavigation, sidebarNavigation } from "./constants";
import { NavigationTypeEnum } from "./enums";

export const NavigationHelperMap = {
  [NavigationTypeEnum.Manager]: sidebarNavigation("/"),
  [NavigationTypeEnum.Provider]: sidebarNavigation("/provider"),
  [NavigationTypeEnum.SuperAdmin]: sidebarAdminNavigation,
};
