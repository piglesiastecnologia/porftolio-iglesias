/* eslint-disable @typescript-eslint/no-explicit-any */
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./src/i18n/config";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ignora assets do Next
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // se já tiver locale na URL (/pt, /en, etc), segue
  const pathLocale = pathname.split("/")[1];
  if (i18n.locales.includes(pathLocale as any)) {
    return NextResponse.next();
  }

  // se chegar em "/", redireciona pra /pt
  const url = request.nextUrl.clone();
  url.pathname = `/${i18n.defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
