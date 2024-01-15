import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import LinkedInProvider from 'next-auth/providers/linkedin'
import InstagramProvider from 'next-auth/providers/instagram'
import Auth0Provider from 'next-auth/providers/auth0';


const authOptions = {
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_ID!,
            clientSecret:process.env.GITHUB_SECRET!
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_ID!,
            clientSecret:process.env.GOOGLE_SECRET!
        }),
        InstagramProvider({
            clientId:process.env.INSTAGRAM_ID!,
            clientSecret:process.env.INSTAGRAM_SECRET!
        }),
        LinkedInProvider({
            clientId:process.env.LINKEDIN_ID!,
            clientSecret:process.env.LINKEDIN_SECRET!
        }),
        Auth0Provider({
            clientId:process.env.AUTH0_ID!,
            clientSecret:process.env.AUTH0_SECRET!,
            issuer:process.env.AUTH0_ISSUER!
        })
    ]
}

const auth = NextAuth(authOptions) 

export {auth as GET , auth as POST}