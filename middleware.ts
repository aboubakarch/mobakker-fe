import { i18nRouter } from "next-i18n-router";
import { NextRequest, NextResponse } from "next/server";
import i18nConfig from "./i18nConfig";
import { RoleType } from "./constants/enums";

export function middleware(request: NextRequest) {
  // console.log(request.cookies.getAll());
  const token = request.cookies.get("accessToken");
  const roleCookie: any = request.cookies.get("role");
  const url = request.nextUrl.clone();
  const basePath = url.pathname.split("/");
  const publicRoutes = ["/provider-registration", "/login"];
  if ((!token || !roleCookie) && !publicRoutes.includes(url.pathname)) {
    console.log("first", url.pathname, token, roleCookie);
    request.cookies.delete("accessToken");
    request.cookies.delete("role");
    console.log(request.cookies.getAll());
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  if (token && roleCookie) {
    const sampleRoles = ["admin", "provider"];
    const baseIndex = basePath[1] === "ar" ? 2 : 1;
    const role = roleCookie.value;
    // console.log(role, basePath, baseIndex);
    if (role === RoleType.ADMIN && basePath[baseIndex] !== "admin") {
      url.pathname = `/admin`;
      return NextResponse.redirect(url);
    }
    if (
      role === RoleType.SERVICE_PROVIDER &&
      basePath[baseIndex] !== "provider"
    ) {
      url.pathname = `/provider`;
      return NextResponse.redirect(url);
    }
    if (
      role === RoleType.BRANCH_MANAGER &&
      ((basePath.length !== 2 && basePath[1] !== "ar") ||
        sampleRoles.includes(basePath[baseIndex]) ||
        (basePath.length > 2 && basePath[1] !== "ar"))
    ) {
      url.pathname = `/`;
      return NextResponse.redirect(url);
    }
    //@ts-ignore
    if (
      role === RoleType.CUSTOMER_CARE &&
      !["", "appointments"].includes(basePath[baseIndex])
    ) {
      url.pathname = `/`;
      return NextResponse.redirect(url);
    }
  }
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
