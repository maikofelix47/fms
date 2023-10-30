import { SessionProvider } from "next-auth/react";

interface NextAuthProviderProps {
  children: React.ReactNode;
}

function NextAuthProvider({ children }: NextAuthProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthProvider;
