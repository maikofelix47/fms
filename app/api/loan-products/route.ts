import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET(req: Request) {
  const products = await prisma.loanProduct.findMany({
    select: {
      name: true,
      minAmount: true,
      maxAmount: true,
      minTenor: true,
      maxTenor: true,
      interestRate: true,
    },
  });
  return new NextResponse(
    JSON.stringify({
      data: products,
    }),
    {
      status: 200,
    }
  );
}
