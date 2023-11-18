import { NextResponse } from "next/server";
import { getAllMembershipRequests } from "@/app/db/membership-requests";
import { MembershipRequestStatusCodes } from "../../../types/member-application";

export async function GET(req: Request) {
  try {
    const members = await getAllMembershipRequests(
      MembershipRequestStatusCodes.approved
    );

    return NextResponse.json({
      data: members,
    });
  } catch (e) {
    return new NextResponse(
      JSON.stringify({
        mesage: "Error getting members list",
      }),
      {
        status: 500,
      }
    );
  }
}
