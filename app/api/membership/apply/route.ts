import { NextResponse } from "next/server";
import { createMembershipRequest } from "@/app/db/membership-requests";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/next-auth-options";
export async function POST(req: Request) {
  const body = await req.json();
  const session = await getServerSession(authOptions);
  const membershipReqPayload = {
    ...body,
    userId: session.user.id,
  };
  try {
    const newApplication = await createMembershipRequest(membershipReqPayload);
    return new NextResponse(
      JSON.stringify({
        message: "Loan Application was succesfull",
        data: newApplication,
      }),
      {
        status: 201,
      }
    );
  } catch (e) {
    return new NextResponse(
      JSON.stringify({
        message: "Membership Application process encountered an error",
      }),
      {
        status: 500,
      }
    );
  }
}
