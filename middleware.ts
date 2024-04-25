import { i18nRouter } from "next-i18n-router";
import { NextRequest, NextResponse } from "next/server";
import i18nConfig from "./i18nConfig";

export function middleware(request: NextRequest) {
  console.log(request.cookies.getAll());
  const token = true;
  // const role: string = "csrep";
  const url = request.nextUrl.clone();
  const basePath = url.pathname.split("/");
  console.log(basePath);
  if (!token && url.pathname !== "/login") {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  // const sampleRoles = ["admin", "provider"];
  // if (
  //   (role && role === basePath[0]) ||
  //   (role === "manager" && basePath[0] === "") ||
  //   (role === "csrep" && basePath[0] === "")
  // ) {
  // } else {
  //   if (role === "manager" || role === "csrep") {
  //     url.pathname = `/${basePath[1]}`;
  //     return NextResponse.redirect(url);
  //   } else if (sampleRoles.includes(role)) {
  //     url.pathname = `/${role}/${basePath[1]}`;
  //     return NextResponse.redirect(url);
  //   }
  // }
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
