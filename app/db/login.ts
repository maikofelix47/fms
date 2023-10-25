import { getUserRoles } from "@/app/db/user-roles";
import { getUserByEmail } from "@/app/db/user";
import { getMemberIdByUserId } from "./membership";
import bcrypt from "bcrypt";

export async function login(email: string, password: string) {
  const user = await getUserByEmail(email);
  if (!user) {
    throw new Error("User not Found");
  }
  const passwordMatch = await isPasswordAmatch(password, user.password);
  if (!passwordMatch) {
    throw new Error("Ussername or password doesn't match");
  }

  const userRoles = await getUserRoles(user.id);
  const memberId = await getMemberIdByUserId(user.id);

  return {
    user,
    userRoles,
    memberId: memberId || null,
  };
}

async function isPasswordAmatch(userPassword: string, dbPassword: string) {
  const match = await bcrypt.compare(userPassword, dbPassword);
  return match;
}
