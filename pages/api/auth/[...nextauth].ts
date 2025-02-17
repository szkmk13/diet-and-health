import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Read the credentials from env variables
        const envUsername = process.env.AUTH_USERNAME;
        const envPassword = process.env.AUTH_PASSWORD;

        if (
          credentials?.username === envUsername &&
          credentials?.password === envPassword
        ) {
          return { id: "1", name: envUsername };
        }

        throw new Error("Invalid username or password");
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
});
