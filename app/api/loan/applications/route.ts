import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(req: Request) {
  try {
    const loanApplications = await getLoanApplications();
    return NextResponse.json({
      message: "Loan Applications",
      data: loanApplications,
    });
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

async function getLoanApplications() {
  const loanApplications = await prisma.loanApplication.findMany({
    select: {
      memberId: true,
      amount: true,
      loanProduct: {
        select: {
          name: true,
        },
      },
      tenorInMonths: true,
      status: true,
    },
  });
  return loanApplications;
}
