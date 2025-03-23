import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Github, google],
});
