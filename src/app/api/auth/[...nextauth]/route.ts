import { User } from '@/app/models/user';
import { connectToDB } from '@/utils/database';
import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }: any) {
      const sessionUser = await User.findOne({
        email: session.user?.email,
      });

      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();

        if (profile !== undefined) {
          //Check if user already exist
          const userExist = await User.findOne({
            email: profile.email,
          });

          //If not, create user
          if (!userExist) {
            await User.create({
              email: profile.email,
              username: profile.name?.replace(' ', '').toLowerCase(),
              image: profile.image,
            });
          }
        }

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
