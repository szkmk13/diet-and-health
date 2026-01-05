import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const envUsername = process.env.AUTH_USERNAME;
        const envPassword = process.env.AUTH_PASSWORD;

        if (!envUsername || !envPassword) {
          console.error("Missing AUTH_USERNAME or AUTH_PASSWORD");
          return null;
        }

        if (
          credentials?.username === envUsername &&
          credentials?.password === envPassword
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
});
