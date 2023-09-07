import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./app/lib/token";

export const config = {
  matcher: [
    "/member-dashboard/:path*",
    "/api/loan/:path*",
    "/api/membership/:path*",
    "/api/loan-products/:path*",
  ],
};

export async function middleware(request: NextRequest) {
  let token: string | undefined;
  if (request.cookies.has("fms-token")) {
    token = request.cookies.get("fms-token")?.value;
    const verified = await verifyToken(token as string);
    if (!verified) {
      request.nextUrl.pathname = "/auth/login";
      return NextResponse.redirect(request.nextUrl);
    }
  } else {
    request.nextUrl.pathname = "/auth/login";
    return NextResponse.redirect(request.nextUrl);
  }
}
