'use client'

import { useSession, signIn, signOut } from 'next-auth/react';

const SignInButton = () => {
	const {data: session } = useSession();

	return (
		<div>
		{session ? (
				<button onClick={() =>signOut()} className="test-black z-100 color-black"> Sign Out </button>
			) : (
				<button onClick={() => signIn()} className="test-black z-100 color-black"> Sign In</button>
				)}
		</div>
	);
}

export default SignInButton;