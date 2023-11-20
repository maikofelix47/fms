import { NextResponse } from "next/server";
import { getLoanApplications } from "@/app/db/loan";

export async function GET(req: Request) {
  try {
    const loanApplications = await getLoanApplications();
    return new NextResponse(
      JSON.stringify({
        data: loanApplications,
      }),
      {
        status: 200,
      }
    );
  } catch (e) {
    return new NextResponse(
      JSON.stringify({
        message: "Could not get Loan Applications",
      }),
      {
        status: 500,
      }
    );
  }
}
