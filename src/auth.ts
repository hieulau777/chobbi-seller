import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  providers: [Google],
  callbacks: {
    signIn({ user, account }) {
      return !!(user?.email && account?.providerAccountId);
    },
    jwt({ token, user, account }) {
      if (user && account) {
        token.email = user.email ?? undefined;
        token.name = user.name ?? undefined;
        token.picture = user.image ?? undefined;
        token.providerAccountId = account.providerAccountId;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.email = token.email ?? session.user.email;
        session.user.name = token.name ?? session.user.name;
        session.user.image = token.picture ?? session.user.image;
      }
      (session as { providerAccountId?: string }).providerAccountId =
        token.providerAccountId as string | undefined;
      return session;
    },
  },
});
