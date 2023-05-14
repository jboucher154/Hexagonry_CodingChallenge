import { Profile } from "../../../../typings"

type PageProps = {
	params: {
		profileId: string;
	};
};

const fetchProfile = async (profileId: string) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${profileId}`);
	const profile: Profile = await res.json();
	return profile;
};

async function ProfilePage({params: { profileId } }: PageProps) {
	const profile = await fetchProfile(profileId);
	// profile.name = "NewPerson";

	return (
		<div>
			<h2>{profile.name}</h2>
			<p>{profile.email}</p>
			<p>{profile.website}</p>
			<p>Company: {profile.company.name}</p>
		</div>
	)
}

export default ProfilePage