import SignInButton from './components/SignInButton';
import Header from './components/Header'
import Banner from './components/Banner'
import BlogList from './components/BlogList'
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
        <Banner/>
        <BlogList/>
        <SignInButton/>
        <Footer/>
      </div>
    </main>
  )
}
