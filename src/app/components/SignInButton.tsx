'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

const SignInButton = () => {
	const {data: session } = useSession()

	return (
		<>
		{session ? (
				<button onClick={() =>signOut()} className="test-black"> Sign Out </button>
			) : (
				<button onClick={() => signIn()}> Sign In</button>
				)}
		</>
	)
}

export default SignInButton