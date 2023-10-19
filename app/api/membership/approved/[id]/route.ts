import { NextResponse } from "next/server";
import { getApprovedMember } from "@/app/db/membership";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const member = await getApprovedMember(parseInt(id));
    if (member) {
      return NextResponse.json({
        data: member,
      });
    } else {
      return new NextResponse(
        JSON.stringify({
          message: "Specified member not found",
        }),
        {
          status: 404,
        }
      );
    }
  } catch (e) {
    return new NextResponse(
      JSON.stringify({
        message: "An error occured while getting member",
      }),
      {
        status: 500,
      }
    );
  }
}
