import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const similarEmailExists = await existsSimilarEmail(email);
  if (!similarEmailExists) {
    const hashedPw = bcrypt.hashSync(password, 10);
    await prisma.user.create({
      data: {
        email,
        password: hashedPw,
      },
    });

    return NextResponse.json({
      message: "Successfully registered",
      status: 200,
    });
  } else {
    return new NextResponse(
      JSON.stringify({ success: false, message: "Similar Email exists" }),
      {
        status: 500,
      }
    );
  }
}

async function existsSimilarEmail(email: string) {
  const userWithEmail = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (userWithEmail) {
    return true;
  } else {
    return false;
  }
}
