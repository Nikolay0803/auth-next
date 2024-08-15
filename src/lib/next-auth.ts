import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    email: string;
    name: string;
    backendTokens?: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }

  interface Session {
    user: User;
    backendTokens?: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: number;
      email: string;
      name: string;
    };
    backendTokens?: {
      accessToken: string;
      refreshToken: string;
      expiresIn: number;
    };
  }
}