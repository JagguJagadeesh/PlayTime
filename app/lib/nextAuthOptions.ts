import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Login with email",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;

        if (email) {
          return { id: "2", email };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) {
        return true;
      }
      return false;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export { authOptions };
