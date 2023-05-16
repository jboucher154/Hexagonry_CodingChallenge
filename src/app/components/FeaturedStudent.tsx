'use client'
import info from '../../../info.json';
import { Profile } from "../../../typings";
import { useState, useEffect } from 'react';

const getRandomProfile = () => {
	const profileIndex = (Math.floor(Math.random() * info.length));
	return info[profileIndex];
}

const FeaturedStudent = () => {
	const [featured, setFeatured] = useState<Profile | null>(null);

	useEffect(() => {
		const profile: Profile = getRandomProfile();
		setFeatured(profile);
	});
	return (
		<section>
			<div className='flex flex-col items-center place-content-center'>
				<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
					<img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={featured?.img_link} alt=""/>
					<div className="flex flex-col justify-between p-4 leading-normal">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Featured Student, {featured?.name}!</h5>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{featured?.name} was chosen as the featured student this time!</p>
						<div>
							<button type="button" className="text-yellow-300 hover:text-white border border-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
								<a href="/profiles"> All Students </a>
							</button>
						</div>
					</div>
				</a>
			</div>
		</section>
	)
}

export default FeaturedStudent;
