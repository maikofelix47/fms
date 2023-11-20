import { NextResponse } from "next/server";
import { createLoanRequest } from "@/app/db/loan";
import {
  LoanApplicationRequestDto,
  LoanApplicationRequestPayload,
} from "@/app/types/loan-application";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/lib/next-auth-options";

export async function POST(req: Request, res: Response) {
  const body: LoanApplicationRequestDto = await req.json();
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse(
      JSON.stringify({
        message: "Auauthorized",
      }),
      {
        status: 401,
      }
    );
  }

  const { member } = session;
  const loanRequestPayload: LoanApplicationRequestPayload = {
    ...body,
    memberId: member.id,
  };
  try {
    const newLoanApplication = await createLoanRequest(loanRequestPayload);
    if (newLoanApplication) {
      return new NextResponse(
        JSON.stringify({
          message: "Loan Application Request was successfull",
        }),
        {
          status: 201,
        }
      );
    }
  } catch (e) {
    console.error(e);
    return new NextResponse(
      JSON.stringify({
        message: "Loan Application was not succesfully sent",
      }),
      {
        status: 500,
      }
    );
  }
}
