import SignInButton from './components/SignInButton';
import Header from './components/Header'
import Banner from './components/Banner'
import BlogList from './components/BlogList'
import Footer from './components/Footer';
import FeaturedStudent from './components/FeaturedStudent';

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
        <Banner/>
        <BlogList/>
        <div>
          <FeaturedStudent/>
        </div>
        <SignInButton/>
        <Footer/>
      </div>
    </main>
  )
}
