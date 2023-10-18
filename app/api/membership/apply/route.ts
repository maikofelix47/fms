import { NextResponse } from "next/server";
import { createMembershipRequest } from "@/app/db/membership-requests";
export async function POST(req: Request) {
  const body = await req.json();
  try {
    const newApplication = await createMembershipRequest(body);
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
