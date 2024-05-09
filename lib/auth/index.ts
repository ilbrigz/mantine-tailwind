import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import prisma from "@/lib/prisma";

export const BASE_PATH = "/api/auth";

// how to setup next-auth with username and password signin
const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<User | null> {
        const users = [
          {
            id: "test-user-1",
            userName: "test1",
            name: "Test 1",
            password: "pass",
            email: "test1@donotreply.com",
          },
          {
            id: "test-user-2",
            userName: "test2",
            name: "Test 2",
            password: "pass",
            email: "test2@donotreply.com",
          },
        ];
        const user = users.find(
          (user) =>
            user.userName === credentials.username &&
            user.password === credentials.password
        );
        return user
          ? { id: user.id, name: user.name, email: user.email }
          : null;
      },
    }),
  ],
  // session: { maxAge: 60, updateAge: 0 },
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
