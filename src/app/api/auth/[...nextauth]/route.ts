import NextAuth from 'next-auth'
import FortyTwoProvider from 'next-auth/providers/42-school'

// can include this in the authOptions if we want to override the default signin page, value of  '/signin' = route to our page
// 	pages: {
// 		singIn: '/signin'
// 	}
//might eant a callback to get the user info?
// callbacks: {
// 	async signIn(user)
// }


const authOptions = {
	secret: process.env.NEXT_PUBLIC_SECRET as string,
	providers: [
		FortyTwoProvider({
			clientId: process.env.FORTY_TWO_CLIENT_ID as string,
			clientSecret: process.env.FORTY_TWO_CLIENT_SECRET as string	
		})
	]//,
	//from jordane
	// callbacks: {
	// 	async signIn({ profile, user }) {
	// 	  if (!profile || !user) return false
	
	// 	  const campusId = profile.campus_users.find(cu => cu.is_primary)?.campus_id
	
	// 	  if (campusId.toString() !== process.env.CAMPUS_ID) return false
	
	// 	  return user
	// 	},
	// 	async session({ session, token }) {
	// 	  delete session.user
	// 	  session.login = token.login
	// 	  session.user_id = token.user_id
	// 	  session.link = await generateURI(token.user_id)
	// 	  return session
	// 	},
	// 	async jwt({ token, profile }) {
	// 	  if (profile) {
	// 		token.user_id = profile.id
	// 		token.login = profile.login
	// 	  }
	// 	  return token
	// 	}
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}