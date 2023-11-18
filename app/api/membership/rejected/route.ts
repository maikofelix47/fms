import { NextRequest, NextResponse } from "next/server";
import { getAllMembershipRequests } from "@/app/db/membership-requests";
import { MembershipRequestStatusCodes } from "../../../types/member-application";

export async function GET(req: NextRequest) {
  const membershipReq = await getAllMembershipRequests(
    MembershipRequestStatusCodes.rejected
  );
  return NextResponse.json({
    data: membershipReq,
  });
}
