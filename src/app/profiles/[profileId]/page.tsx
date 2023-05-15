import Profile from '../../../../info.json'

type PageProps = {
	params: {
		profileId: string;
	};
};

const fetchProfile = async (profileId: string) => {
    const profile = Profile[parseInt(profileId) - 1];
	// const profile = Profile.find(profile => profile.id === parseInt(profileId));
    return profile;
};

async function ProfilePage({params: { profileId } }: PageProps) {
	const profile = await fetchProfile(profileId);

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