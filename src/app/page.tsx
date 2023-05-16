import SignInButton from './components/SignInButton';
import Header from './components/Header'
import Banner from './components/Banner'
import BlogList from './components/BlogList'

export default function Home() {
  return (
    <main>
      <div>
        <Header/>
        <Banner/>
        <BlogList/>
        <SignInButton/>
      </div>
    </main>
  )
}
