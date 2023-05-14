'use client'

import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation'

export default function SignIn() {
	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			redirect('/unauthorized')
		}
	})
	console.log(session)//
	return (
		<section>
			<div>
				<h1 color='white'>you did it!</h1>
			</div>
		</section>
	)
}
