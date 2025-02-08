import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
        clientId: process.env.GITHUB_ID || "",
        clientSecret: process.env.GITHUB_SECRET|| ""
      }),

    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Missing username or password");
        }

        // Mock authentication (Replace with database lookup)
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
        return user ? user : null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
        if (user) {
          token.id = user.id;
          token.role = "admin"; // Example role
        }
        return token;
      },

    async session({ session, token }: { session: any; token: any }) {
        if (session?.user) {
          session.user.id = token.id;
          session.user.role = token.role;
        }
        return session;
    },
  },
  pages:{
    signIn:"/signin"
  }
};