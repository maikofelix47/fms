import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const membershipReq = await getAllMembershipRequests();
  return NextResponse.json({
    data: membershipReq,
  });
}

function getAllMembershipRequests() {
  return prisma.membershipApplication.findMany({
    select: {
      firstName: true,
      lastName: true,
      nationality: true,
      createdAt: true,
      status: true,
    },
  });
}
