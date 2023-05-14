import NextAuth from 'next-auth'
import FortyTwoProvider from 'next-auth/providers/42-school'

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


// const generateURI = async ({ userId }: any) => {
// 	const { HEXAGON_URL } = process.env
// 	const result = await fetch(
// 	  `${HEXAGON_URL}`,
// 	  {
// 		headers: {
// 		  Accept: 'application/json'
// 		}
// 	  }
// 	)
// 	const data = await result.json()
// 	return data.url
//   }

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
	],
	pages: {
		signIn: 'https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-849602b1df456aaa42544c35b51928d82107ae14ecab309d2cfe48dd3cb5ccf5&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fsignin&response_type=code'
	},
	callbacks: {
		async jwt({ token, profile }: any) {
			if (profile) {
			  // Save access token to JWT token for later use
			  // eslint-disable-next-line no-param-reassign
			  token.user_id = profile.user_id
			  // eslint-disable-next-line no-param-reassign
			  token.login = profile.login
			}
			return token
		  },
		async session({ session, token }: any) {
			delete session.user
		  // Send accessToken to the client so we can use it later on
		  // eslint-disable-next-line no-param-reassign
			// session.accessToken = token.accessToken
			session.login = token.login
			session.user_id = token.user_id
			session.link = process.env.HEXAGON_URL //generateURI(session.user_id)
			return session
		}
	  }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}

