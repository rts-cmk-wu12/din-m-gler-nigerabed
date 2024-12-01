import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
          placeholder: "Email",
        },
        password: {
          label: "password:",
          type:"password",
          placeholder: "password"
        },
      },
      async authorize(credentials){
        const user = { id: "100", email: "nigerafroze@mail.dk" , password: "111"}
        if(credentials?.email === user.email && credentials?.password === user.password){
            return user 
        }else{
            return null
        }
      }
    }),
  ],
};
