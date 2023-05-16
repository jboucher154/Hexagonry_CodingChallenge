import HXGLogo from '/public/resources/images/hexagon_logo_black.png';
import Image from 'next/image';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import SignInButton from './SignInButton';

function Footer() {
	return (
	<footer className="bg-white rounded-lg shadow dark:bg-orange m-4">
		<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
			<div className ="sm:flex sm:items-center sm:justify-between">
				<a href = "http://localhost:3000/profiles" className ="flex items-center mb-4 sm:mb-0">
					<SignInButton/>
					<Image className =" flex justify-between p-1 rounded-full"
						width = {50}
						height = {50}
						src = {HXGLogo}
						alt=""
					/>
					<span className="self-center text-2xl font-bold whitespace-nowrap dark:text-black">Hexagon ry</span>
				</a>
				<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-black">
					<li>
						<a className="mr-4 hover:underline md:mr-6">
							<SocialIcon url='https://www.linkedin.com/company/hexagon-ry/'/>
						</a>
					</li>
					<li>
						<a href="#" className="mr-4 hover:underline md:mr-6">
							<SocialIcon url='https://www.instagram.com/hive_hexagon/'/>
						</a>
					</li>
					<li>
						<a href="#" className="hover:underline">
							<SocialIcon url='https://www.hexagonry.com/'/>
						</a>
					</li>
				</ul>
			</div>
			<hr className="my-6 border-black sm:mx-auto dark:border-black lg:my-8" />
			<span className="block text-sm font-semibold text-black sm:text-center dark:text-black">© 2023 <a href="https://www.linkedin.com/company/hexagon-ry/" className="hover:underline">Hexagonry™</a>. All Rights Reserved.</span>
		</div>
	</footer>
	)
}

export default Footer;
