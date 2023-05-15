import Link from "next/link";

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
					<img className="h-60 w-full object-cover group-hover:scale-105
					transition-transform duration-200 ease-int-out"
					src=""
					alt="" />
					<div className="flex justify-between p-5 bg-white">
						<div>
							<p className="text-lg font-bold text-black">This is our first test post</p>
							<p className="text-xs text-black">Test post done by Joao</p>
						</div>
						<img className = "h-12 w-12 rounded-full" src="" alt=""/>
					</div>
				</div>
				</Link>

				<Link href="">
				<div className="border rounded-lg group cursor-pointer overflow-hidden">
					<img className="h-60 w-full object-cover group-hover:scale-105
					transition-transform duration-200 ease-int-out"
					src=""
					alt="" />
					<div className="flex justify-between p-5 bg-white">
						<div>
							<p className="text-lg font-bold text-black">This is our second test post</p>
							<p className="text-xs text-black">Test post 2 done by Joao</p>
						</div>
						<img className = "h-12 w-12 rounded-full" src="" alt=""/>
					</div>
				</div>
				</Link>

				<Link href="">
				<div className="border rounded-lg group cursor-pointer overflow-hidden">
					<img className="h-60 w-full object-cover group-hover:scale-105
					transition-transform duration-200 ease-int-out"
					src=""
					alt="" />
					<div className="flex justify-between p-5 bg-white">
						<div>
							<p className="text-lg font-bold text-black">This is our third test post</p>
							<p className="text-xs text-black">Test post 3 done by Joao</p>
						</div>
						<img className = "h-12 w-12 rounded-full" src="" alt=""/>
					</div>
				</div>
				</Link>
			</div>
		</div>
	);
}

export default BlogList;
