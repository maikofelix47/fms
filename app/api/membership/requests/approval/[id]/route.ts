import { NextResponse } from "next/server";
import {
  rejectMembershipRequest,
  getMembershipRequesById,
} from "@/app/db/membership-requests";
import { createMembershipTransaction } from "@/app/db/transactions/create-membership";
export async function POST(req: Request, { params }: any) {
  const { id } = params;
  const body = await req.json();
  const requestId = parseInt(id);
  const { approve } = body;

  if (approve) {
    const membershipReq = await getMembershipRequesById(requestId);

    try {
      await createMembershipTransaction(membershipReq);
    } catch (e) {
      console.error("CreateMembership Transation failed", e);

      return new NextResponse(
        JSON.stringify({
          message: "Approval Failed",
        }),
        {
          status: 500,
        }
      );
    }
  } else {
    await rejectMembershipRequest(requestId);
  }
  return NextResponse.json({
    message: `Membership request has been successfully ${
      approve ? "Approved" : "Rejected"
    }`,
  });
}
