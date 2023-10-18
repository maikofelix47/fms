import { NextResponse } from "next/server";

import {
  approveMembershipRequest,
  getMembershipRequesById,
} from "@/app/db/membership-requests";
import { createNewMembership } from "@/app/db/membership";

export async function POST(req: Request, { params }: any) {
  const { id } = params;
  const body = await req.json();
  const requestId = parseInt(id);
  const { approve } = body;
  const membershipReq = await getMembershipRequesById(requestId);
  await approveMembershipRequest(approve, requestId);
  if (approve) {
  }
  return NextResponse.json({
    message: "Membership request has been successfully approved/rejected",
  });
}
