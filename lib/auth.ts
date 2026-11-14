import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { timingSafeEqual } from "crypto";
import { verifyTurnstile } from "@/lib/turnstile";

function safeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
        turnstileToken: { type: "text" },
      },
      async authorize(credentials) {
        const envUsername = process.env.AUTH_USERNAME;
        const envPassword = process.env.AUTH_PASSWORD;

        if (!envUsername || !envPassword) {
          console.error("Missing AUTH_USERNAME or AUTH_PASSWORD");
          return null;
        }

        if (!credentials?.turnstileToken || !(await verifyTurnstile(credentials.turnstileToken))) {
          return null;
        }

        if (
          safeEqual(credentials.username ?? "", envUsername) &&
          safeEqual(credentials.password ?? "", envPassword)
        ) {
          return { id: "1", name: envUsername };
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },
};
