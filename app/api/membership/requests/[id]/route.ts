import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
export async function GET(req: Request, { params }: { params: any }) {
  const { id } = params;
  const membershipReq = await getMembershipRequesById(parseInt(id));
  if (!membershipReq) {
    return new NextResponse(
      JSON.stringify({
        message: "No such request",
      }),
      {
        status: 404,
      }
    );
  }

  return NextResponse.json({
    message: "Request has been succesfully received",
    data: membershipReq,
  });
}

function getMembershipRequesById(id: number) {
  return prisma.membershipApplication.findFirstOrThrow({
    where: {
      id: id,
    },
  });
}
