import { i18nRouter } from "next-i18n-router";
import { NextRequest, NextResponse } from "next/server";
import i18nConfig from "./i18nConfig";

export function middleware(request: NextRequest) {
  console.log(request.cookies.getAll());
  const token = true;
  const role: string = "csrep";
  const url = request.nextUrl.clone();
  const basePath = url.pathname.split("/");
  console.log(basePath);
  if (!token && url.pathname !== "/login") {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  const sampleRoles = ["admin", "provider"];
  const baseIndex = basePath[1] === "ar" ? 2 : 1;
  if (role === "admin" && basePath[baseIndex] !== "admin") {
    url.pathname = `/admin`;
    return NextResponse.redirect(url);
  }
  if (role === "provider" && basePath[baseIndex] !== "provider") {
    url.pathname = `/provider`;
    return NextResponse.redirect(url);
  }
  if (
    role === "manager" &&
    ((basePath.length !== 2 && basePath[1] !== "ar") ||
      sampleRoles.includes(basePath[baseIndex]) ||
      (basePath.length > 2 && basePath[1] !== "ar"))
  ) {
    url.pathname = `/`;
    return NextResponse.redirect(url);
  }
  //@ts-ignore
  if (role === "csrep" && !["", "appointments"].includes(basePath[baseIndex])) {
    url.pathname = `/`;
    return NextResponse.redirect(url);
  }
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
