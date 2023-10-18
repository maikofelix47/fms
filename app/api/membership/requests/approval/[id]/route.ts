import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import { Member } from "@/app/types/member";

export async function POST(req: Request, { params }: any) {
  const { id } = params;
  const body = await req.json();
  const { approve } = body;
  await approveMembershipRequest(approve, parseInt(id));
  if (approve) {
  }
  return NextResponse.json({
    message: "Membership request has been successfully approved/rejected",
  });
}

async function approveMembershipRequest(approve: boolean, requestId: number) {
  return prisma.membershipApplication.update({
    where: {
      id: requestId,
    },
    data: {
      status: approve ? 1 : 2,
    },
  });
}

async function createNewMembership(newMemberPayload: Member) {
  return prisma.member.create({
    data: {
      isActive: true,
      joinDate: new Date(),
      userId: newMemberPayload.userId,
      voided: false,
    },
  });
}
