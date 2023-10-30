import NextAuth from "next-auth";
import { authOptions } from "@/app/lib/next-auth-options";

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
