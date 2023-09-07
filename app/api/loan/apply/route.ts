import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  try {
    const newLoanApplication = await prisma.loanApplication.create({
      data: {
        memberId: parseInt(body.memberId),
        loanProductId: parseInt(body.loanProductId),
        amount: parseInt(body.amount),
        tenorInMonths: parseInt(body.tenorInMonths),
        status: 0,
      },
    });
    if (newLoanApplication) {
      return new NextResponse(
        JSON.stringify({
          message: "Loan Application has been succesfully sent",
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
