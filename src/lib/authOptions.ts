import { Backend_URL } from "@/lib/Constants";
import { JWT } from "next-auth/jwt";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshToken(token: JWT): Promise<JWT> {
  const res = await fetch(`${Backend_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token.backendTokens?.refreshToken}`,
    },
  });

  if (!res.ok) {
    console.error("Failed to refresh token:", await res.text());
    return token;
  }

  const response = await res.json();
  return {
    ...token,
    backendTokens: response,
  };
}

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        const res = await fetch(`${Backend_URL}/auth/login`, {
          method: "POST",
          body: JSON.stringify({
            username: credentials.username,
            password: credentials.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

        if (res.status === 401) {
          console.log("Unauthorized:", await res.text());
          return null;
        }

        const user = await res.json();
        return {
          ...user,
          backendTokens: user.backendTokens,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          ...user,
          backendTokens: user.backendTokens,
        };
      }

      if (
        token.backendTokens &&
        new Date().getTime() < token.backendTokens.expiresIn
      ) {
        return token;
      }

      return await refreshToken(token);
    },

    async session({ token, session }) {
      session.user = token.user;
      session.backendTokens = token.backendTokens;
      return session;
    },
  },
  // pages: {
  //   signIn: "/api/auth/signin"
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
