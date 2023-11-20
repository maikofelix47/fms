import prisma from "@/app/lib/prisma";
import { LoanApplicationRequestPayload } from "../types/loan-application";

export function createLoanRequest(body: LoanApplicationRequestPayload) {
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

export function getLoanApplications() {
  return prisma.loanApplication.findMany({
    select: {
      id: true,
      memberId: true,
      amount: true,
      loanProduct: {
        select: {
          name: true,
        },
      },
      tenorInMonths: true,
      status: true,
      createdAt: true,
    },
  });
}
