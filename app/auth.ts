import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
       name:'Credentials',
       credentials:{
        email:{
            label:"email",
            type:"email"
        },
        password:{
            label:"password",
            type:"password"
        }
       }
    })
  ],
})