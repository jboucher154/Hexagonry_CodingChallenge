'use client'

import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation'

export default function Unauthorized() {
	const { data: session } = useSession()
	// console.log(session)//
	return (
		<section>
			<div>
				<h1 color='white'> UNAUTHORIZED!!!!!!!</h1>
			</div>
		</section>
		)
}
