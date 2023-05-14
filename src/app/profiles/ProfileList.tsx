import React from "react";
import Link from "next/link"
import { Profile } from "../../../typings"

const fetchProfiles = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const profiles: Profile[] = await res.json();
	return profiles;
}

async function ProfileList() {
	const profiles = await fetchProfiles()
	return <>
		{profiles.map((profile) => (
			<p key={profile.id}>
				<Link href={`/profiles/${profile.id}`}>Profile: {profile.name}</Link>
			</p>
		))}
	</>;
}

export default ProfileList