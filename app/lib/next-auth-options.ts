import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/app/db/login";
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
            return {
              userid: user.user.id,
              memberId: user.memberId,
              userRoles: user.userRoles,
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
};
