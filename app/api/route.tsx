import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return new NextResponse(
    JSON.stringify({
      message: "This is a sample message",
    }),
    {
      status: 200,
    }
  );
}
