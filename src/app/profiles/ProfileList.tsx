import React from "react";
import Link from "next/link"
import Profile from '../../../info.json'

function ProfileList() {
	return (
			<div className="Profile">
			{
				Profile.map( profile => {
					return(
						<div className="box" key={ profile.id}>
						{profile.name}
						<Link href={`/profiles/${profile.id}`}>Profile: {profile.name}</Link>
						</div>
					)
			})
			}
			</div>
		);
}


// async function ProfileList() {
// 	return <>
// 		{profiles.map((profile) => (
// 			<p key={profile.id}>
// 				<Link href={`/profiles/${profile.id}`}>Profile: {profile.name}</Link>
// 			</p>
// 		))}
// 	</>;
// }

export default ProfileList