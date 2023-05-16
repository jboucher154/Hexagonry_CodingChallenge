'use client'
import info from '../../../info.json';
import { Profile } from "../../../typings";
import { useState, useEffect } from 'react';

const getRandomProfile = () => {
	const profileIndex = (Math.floor(Math.random() * info.length));
	console.log(profileIndex);//
	return info[profileIndex];
}

const FeaturedStudent = () => {
	const [featured, setFeatured] = useState<Profile | null>(null);

	useEffect(() => {
		const profile = getRandomProfile();
		setFeatured(profile);
	});
	return (
		<section>
			<div>
				<h3>Featured Student</h3>
				<p>Name: {featured?.name}</p>
				<p>Email: {featured?.email}</p>
			</div>
		</section>
	)
}

export default FeaturedStudent
