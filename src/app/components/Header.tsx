import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HXGLogo from '../../../resources/images/hexagon_logo_black.png'

function Header() {
	return (
		<header className='flex items-center justify-between space-x-2 font-bold px-10 py-5'>
			<div className='flex items-center space-x-2 flex-col group cursor-pointer'>
				<Link href="http://localhost:3000" className='cursor-pointer group-hover:scale-105
					transition-transform duration-200 ease-out'>
					<Image
					src={ HXGLogo } //insert here the link for the image
					width={50}
					height={50}
					className="rounded-full"
					alt="logo"
					/>
				</Link>
			</div>
			<div className='flex flex-col group cursor-pointer'>
				<Link
					href="https://hive.fi/en"
					className='px-5 py-3 text-sm md:text-base bg-orange-500 text-white
					flext items-center rounded-full text-center group-hover:scale-105
					transition-transform duration-200 ease-out'
					>
					Is your future writen in code?
				</Link>
			</div>
		</header>

	)
}

export default Header
