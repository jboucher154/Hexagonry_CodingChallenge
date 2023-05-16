import NextAuth from 'next-auth';
import FortyTwoProvider from 'next-auth/providers/42-school';

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
	}
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};

