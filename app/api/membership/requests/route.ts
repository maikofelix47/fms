import { NextResponse } from "next/server";
import { getAllMembershipRequests } from "@/app/db/membership-requests";

export async function GET(req: Request) {
  const membershipReq = await getAllMembershipRequests();
  return NextResponse.json({
    data: membershipReq,
  });
}
