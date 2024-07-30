import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import mongoClient from "@/libs/mongo";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(mongoClient),
  providers: [Google],
});
