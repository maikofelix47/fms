import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/app/db/login";
import { getUserByEmail } from "../db/user";
import { getMemberIdByUserId } from "../db/membership";
export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(
        credentials: { email: string; password: string },
        req: Request
      ) {
        try {
          const user = await login(credentials.email, credentials.password);
          if (user) {
            const name = credentials.email.split("@")[0] || "";
            return {
              email: credentials.email,
              name: name,
            };
          } else {
            return null;
          }
        } catch (e) {
          console.error(e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session }: { session: any }) {
      const user = await getUserByEmail(session.email);
      if (!user) {
        return;
      }
      const member = await getMemberIdByUserId(user.id);
      return {
        ...session,
        user: {
          id: user.id,
          ...session.user,
        },
        member: {
          id: member.id || null,
        },
      };
    },
  },
};
