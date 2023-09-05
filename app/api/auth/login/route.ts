import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = await getUser(email);
  if (!user) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "User with the email does not exist",
      }),
      {
        status: 404,
      }
    );
  }

  const passwordMatch = await isPasswordAmatch(password, user.password);
  if (!passwordMatch) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "User or passwords does not match",
      }),
      {
        status: 403,
      }
    );
  } else {
    const userRoles = await getUserRoles(user.id);
    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Suucessfull Login",
        data: userRoles,
      }),
      {
        status: 200,
      }
    );
  }
}

async function getUser(email: string) {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  return user;
}

async function isPasswordAmatch(userPassword: string, dbPassword: string) {
  const match = await bcrypt.compare(userPassword, dbPassword);
  return match;
}

async function getUserRoles(userId: number) {
  const userRoles = await prisma.userRole.findMany({
    where: {
      userId: userId,
    },
    select: {
      role: {
        select: {
          name: true,
          RolePrivilege: {
            select: {
              privilege: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });
  return userRoles;
}
