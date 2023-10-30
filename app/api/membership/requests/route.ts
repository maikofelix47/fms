import { NextRequest, NextResponse } from "next/server";
import { getAllMembershipRequests } from "@/app/db/membership-requests";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/next-auth-options";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse(
      JSON.stringify({
        message: "Unauthorized Access",
      }),
      {
        status: 401,
      }
    );
  }
  const membershipReq = await getAllMembershipRequests();
  return NextResponse.json({
    data: membershipReq,
  });
}
