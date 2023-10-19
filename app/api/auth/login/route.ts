import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { generateJwtToken, verifyToken } from "../../../lib/token";
import { getUserRoles } from "@/app/db/user-roles";
import { getUserByEmail } from "@/app/db/user";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = await getUserByEmail(email);
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
    const jwtPayload = {
      user: {
        id: user.id,
      },
    };
    const jwt = await generateJwtToken(jwtPayload);
    const cookieOptins = {
      name: "fms-token",
      value: jwt,
      path: "/",
      maxAge: 2 * 60 * 60,
    };
    const resp = new NextResponse(
      JSON.stringify({
        success: true,
        message: "Suucessfull Login",
        data: userRoles,
        token: jwt,
      }),
      {
        status: 200,
      }
    );
    resp.cookies.set(cookieOptins);
    return resp;
  }
}

async function isPasswordAmatch(userPassword: string, dbPassword: string) {
  const match = await bcrypt.compare(userPassword, dbPassword);
  return match;
}
