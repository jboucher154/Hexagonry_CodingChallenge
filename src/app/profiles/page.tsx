import ProfileList from "./ProfileList";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Header from "../components/Header";

function Profile()
{
	return (
	<main>
		<div>
			<Header/>
			<Banner/>
			<hr className="border-[#F7AB0A] mb-10 mt-8" />
			<ProfileList/>
			<hr className="border-[#F7AB0A] mb-10 mt-8" />
			<Footer/>
		</div>
	</main>
	)
}

export default Profile;
