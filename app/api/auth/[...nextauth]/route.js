import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import { connectToDB } from "@/database"; 
import User from "@/models/user";

export const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          })
    ],
    callbacks:{
        async session({ session }) {
            const sessionUser=await User.findOne({email:session.user.email});
            session.user.id = sessionUser._id.toString();
            
            return session
          },
        async signIn({user}){
            try {
                await connectToDB();

                const userExists=await User.findOne({email:user.email});

                if (!userExists) {
                    await User.create(
                        {
                            name:user.name,
                            email:user.email,
                            image:user.image
                        }
                    )
                }
                return true;
            } catch (error) {
                console.log(error);
                return false;
            }
        }
    }
})

export { handler as GET, handler as POST }