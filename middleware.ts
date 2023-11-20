import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/member-dashboard/:path*"],
};

export async function middleware(request: NextRequest) {
  let token: string | undefined;
  if (request.cookies.has("next-auth.session-token")) {
    token = request.cookies.get("next-auth.session-token")?.value;
    if (token) {
      const response = NextResponse.next();
      return response;
    } else {
      request.nextUrl.pathname = "/auth/login";
      return NextResponse.redirect(request.nextUrl);
    }
  } else {
    request.nextUrl.pathname = "/auth/login";
    return NextResponse.redirect(request.nextUrl);
  }
}
