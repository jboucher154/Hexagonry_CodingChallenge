import Link from "next/link";
import Image from "next/image";
import JoaoProfilePic from "../../../resources/users/images/jonascim.jpg"
import JennyProfilePic from "../../../resources/users/images/jebouche.jpg"
import LucasProfilePic from "../../../resources/users/images/leklund.jpg"
import Post1Pic from "../../../resources/images/pranav-kumar-jain-PR_0IPlMXgk-unsplash.jpg"
import Post2Pic from "../../../resources/images/boba-jaglicic-Mkk_9x42Sbg-unsplash.jpg"
import Post3Pic from "../../../resources/images/drmakete-lab-hsg538WrP0Y-unsplash.jpg"

function BlogList()
{
	return (
		<div>
			<div>
				<hr className="border-[#F7AB0A] mb-10" />
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3
			md:gap-6 p-2 md:p-6">

				<Link href="http://localhost:3000/post">
				<div className="border rounded-lg group cursor-pointer overflow-hidden">
					<Image className="h-60 w-full object-cover group-hover:scale-105
					transition-transform duration-200 ease-int-out"
					src = {Post1Pic}
					width = {100}
					height= {60}
					alt = "" />
					<div className="flex justify-between p-5 bg-white">
						<div>
							<p className="text-lg font-bold text-black">This is our first test post</p>
							<p className="text-xs text-black">Test post done by Joao</p>
						</div>
						<Image className = "rounded-full"
						src = {JoaoProfilePic}
						width={50}
						height={50}
						alt=""/>
					</div>
				</div>
				</Link>

				<Link href="">
				<div className="border rounded-lg group cursor-pointer overflow-hidden">
					<Image className="h-60 w-full object-cover group-hover:scale-105
					transition-transform duration-200 ease-int-out"
					src = {Post2Pic}
					width = {100}
					height= {60}
					alt="" />
					<div className="flex justify-between p-5 bg-white">
						<div>
							<p className="text-lg font-bold text-black">This is our second test post</p>
							<p className="text-xs text-black">Test post 2 done by Jenny</p>
						</div>
						<Image className = "rounded-full"
						src = {JennyProfilePic}
						width={50}
						height={50}
						alt=""/>
					</div>
				</div>
				</Link>

				<Link href="">
				<div className="border rounded-lg group cursor-pointer overflow-hidden">
					<Image className="h-60 w-full object-cover group-hover:scale-105
					transition-transform duration-200 ease-int-out"
					src = {Post3Pic}
					width = {100}
					height = {60}
					alt="" />
					<div className="flex justify-between p-5 bg-white">
						<div>
							<p className="text-lg font-bold text-black">This is our third test post</p>
							<p className="text-xs text-black">Test post 3 done by Lucas</p>
						</div>
						<Image className = "rounded-full"
						src = {LucasProfilePic}
						width={50}
						height={50}
						alt=""/>
					</div>
				</div>
				</Link>
			</div>
		</div>
	);
}

export default BlogList;
