import prisma from "@/app/lib/prisma";
import { LoanApplicationRequestPayload } from "../types/loan-application";

export async function createLoanRequest(body: LoanApplicationRequestPayload) {
  return prisma.loanApplication.create({
    data: {
      memberId: parseInt(body.memberId),
      loanProductId: body.loanProductId,
      amount: body.amount,
      tenorInMonths: body.tenorInMonths,
      status: 0,
    },
  });
}
