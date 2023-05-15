import './globals.css'
import Provider from './components/Provider'
import Header from './components/Header'
import Banner from './components/Banner'
import BlogList from './components/BlogList'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
        <Header/>
        <Banner/>
        <BlogList/>
          {children}
        </Provider>
      </body>
    </html>
  )
}
