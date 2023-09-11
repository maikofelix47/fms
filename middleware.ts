import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./app/lib/token";

export const config = {
  matcher: ["/member-dashboard/:path*", "/api/loan/:path*"],
};

export async function middleware(request: NextRequest) {
  let token: string | undefined;
  if (request.cookies.has("fms-token")) {
    token = request.cookies.get("fms-token")?.value;
    const verified = await verifyToken(token as string);
    const response = NextResponse.next();
    if (!verified) {
      request.nextUrl.pathname = "/auth/login";
      return NextResponse.redirect(request.nextUrl);
    }
    response.headers.set("X-USER-ID", JSON.stringify(verified?.payload?.user));
    return response;
  } else {
    request.nextUrl.pathname = "/auth/login";
    return NextResponse.redirect(request.nextUrl);
  }
}
