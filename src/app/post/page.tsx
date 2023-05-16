"use client" //NEEEED TO BE FIXED DONT FORGET IT!!!!
// import PortableText from "react-portable-text";
import {useForm} from "react-hook-form"
import Image from "next/image"
import JoaoProfilePic from "/public/resources/users/images/jonascim.jpg"
import PostBanner from "/public/resources/images/pranav-kumar-jain-PR_0IPlMXgk-unsplash.jpg"
import Footer from "../components/Footer";

interface FormInputData {
	name: string;
	email: string;
	comment: string;
}

function Post()
{
	const maxDate = Date.now();
	const timeStamp = Math.floor(Math.random() * maxDate);
	const { register, handleSubmit } = useForm<FormInputData>();

	return(
		<main>
			<Image className="w-full h-40 object-cover"
				 src= {PostBanner}
				 width = {12000}
				 height = {40}
				 alt=""/>
			<article className="max-w-3xl mx-auto">
				<h1 className="text-3xl mt-10 mb-3 text-black">Thats my title</h1>
				<h2 className="text-xl font-light text-gray-500 mb-2">Here it goes our post description</h2>

				<div className="flex items-center space-x-2">
					<Image className="h-10 w-10 rounded-full"
						 src= {JoaoProfilePic}
						 height={10}
						 width = {10}
						 alt=""/>
					<p className="font font-extralight text-sm text-black">
						Blog post by <span className="text-orange-500">Joao</span> - Published at{" "}
						{new Date(timeStamp).toLocaleString()}
					</p>
				</div>

				{/* <div className="at-10">
					<PortableText
					dataset=""
					projectId=""
					content={}
					serializers={{
						h1: (props: any) => {
							<h1 className="text-2xl font-bold my-5" {...props}/>
						},
						h2: (props: any) => {
							<h1 className="text-xl font-bold my-5" {...props}/>
						},
						li: ({children}: any) => {
							<li className="text-2xl font-bold my-5" {...children}/>
						},
						link: ({href, children}: any) =>{
							<a href={href} className="text-blue-500
							hover:underline">
								{children}
							</a>
						},
					}}
					>
					</PortableText>
				</div> */}
			</article>

			<hr className="border-[#F7AB0A] mb-10 mt-8" />

			<form className="flex flex-col p-5 max-w-2xl mx-auto mb-10">
				<h3 className="text-sm text-orange-500">Enjoyed this post?</h3>
				<h4 className="text-3xl font-bold text-black">Leave a comment below!</h4>
				<hr className="py-3 mt-2"/>

				<input />

				<label className="block mb-5">
					<span className="text-gray-700">Name</span>
					<input
					// {...register{"name"}, {required: true}}
					className="shadow border rounded py-2 px-3 form-input mt-1 block
					w-full ring-orange-200 outline-none focus:ring"
						placeholder="Student"
						type="text"/>
				</label>

				<label className="block mb-5">
					<span className="text-gray-700">Email</span>
					<input
					// {...register{"email"}, {required: true}}
					className="shadow border rounded py-2 px-3 form-input mt-1 block
					w-full ring-orange-200 outline-none focus:ring"
						placeholder="student@email.com"
						type="text"/>
				</label>

				<label className="block mb-5">
					<span className="text-gray-700">Comment</span>
					<textarea
					// {...register{"comment"}, {required: true}}
					className="shadow border rounded py-2 px-3 form-textarea mr-1 block
					w-full ring-orange-300 outline-none focus:ring"
						placeholder="Insert your comment here!"
						rows={8}/>
				</label>

				{/* <div className="flex flex-col p-5">
					{errors.name && (
						<span className="text-red-500">
							- The Name field is required</span>
					)}
					{errors.email && (
						<span className="text-red-500">
							- The Email field is required</span>
					)}
					{errors.comment && (
						<span className="text-red-500">
							- The Comment field is required</span>
					)}
				</div> */}

				<input
				type="submit"
				className="shadow bg-orange-400 text-white hover:bg-orange-300
				rounded focus:shadow-outline focus:outline-none font-bold py-2 px-4
				cursor-pointer"/>
			</form>
			<Footer/>
		</main>
	)
}

export default Post;
