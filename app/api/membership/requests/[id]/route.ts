import { NextResponse } from "next/server";
import { getMembershipRequesById } from "@/app/db/membership-requests";
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
