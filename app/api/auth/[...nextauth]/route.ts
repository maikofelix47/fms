import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/app/db/login";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(
        credentials: { email: string; password: string },
        req: Request
      ) {
        try {
          const user = await login(credentials.email, credentials.password);
          if (!user) {
            return null;
          }
          return {
            userid: user.user.id,
            memberId: user.memberId,
            userRoles: user.userRoles,
          };
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
});

export { handler as POST, handler as GET };
