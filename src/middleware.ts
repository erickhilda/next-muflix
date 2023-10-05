import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const userSession = req.cookies.get("session_id")?.value;

  if (userSession && req.nextUrl.pathname.includes("auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // if (!userSession && !req.nextUrl.pathname.includes("auth")) {
  //   console.log("redirecting to login");
  //   return NextResponse.redirect(new URL("/auth/login", req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/:path*"],
};
