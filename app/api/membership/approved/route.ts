import { NextResponse } from "next/server";
import { getApprovedMembers } from "@/app/db/membership";

export async function GET(req: Request) {
  try {
    const members = await getApprovedMembers();

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
