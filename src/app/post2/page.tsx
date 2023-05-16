"use client" //NEEEED TO BE FIXED DONT FORGET IT!!!!

import {useForm} from "react-hook-form";
import Image from "next/image";
import JennyProfilePic from "/public/resources/users/images/jebouche.jpg";
import Post2Pic from "/public/resources/images/boba-jaglicic-Mkk_9x42Sbg-unsplash.jpg";
import Footer from "../components/Footer";
import { PostData } from "../../../typings";
import Posts from "../../../posts.json";

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
	const post: PostData = Posts[1];

	return(
		<main>
			<Image className="w-full h-40 object-cover"
				 src = {Post2Pic}
				 alt=""/>
			<article className="max-w-3xl mx-auto">
				<h1 className="text-3xl mt-10 mb-3 text-black">{post.title}</h1>
				<h2 className="text-xl font-light text-gray-500 mb-2">{post.description}</h2>

				<div className="flex items-center space-x-2">
					<Image className="h-10 w-10 rounded-full"
						 src = {JennyProfilePic}
						 alt = ""/>
					<p className="font font-extralight text-sm text-black">
						Blog post by <span className="text-orange-500">Jenny</span> - Published at{" "}
						{new Date(timeStamp).toLocaleString()}
					</p>
				</div>
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
					className="shadow border rounded py-2 px-3 form-input mt-1 block
					w-full ring-orange-200 outline-none focus:ring"
						placeholder="Student"
						type="text"/>
				</label>

				<label className="block mb-5">
					<span className="text-gray-700">Email</span>
					<input
					className="shadow border rounded py-2 px-3 form-input mt-1 block
					w-full ring-orange-200 outline-none focus:ring"
						placeholder="student@email.com"
						type="text"/>
				</label>

				<label className="block mb-5">
					<span className="text-gray-700">Comment</span>
					<textarea
					className="shadow border rounded py-2 px-3 form-textarea mr-1 block
					w-full ring-orange-300 outline-none focus:ring"
						placeholder="Insert your comment here!"
						rows={8}/>
				</label>
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
