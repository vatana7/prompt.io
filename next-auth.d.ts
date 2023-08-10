import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      /** The user's postal address. */
      id?: string;
      /** The user's name. */
      name?: string;
      /** The user's email address. */
      email?: string;
      /** The user's image icon. */
      image?: string;
    };
    expires: string;
  }
}
