import NavBar from '../components/NavBar.tsx'
import Footer from '../components/Footer.tsx'
import Hero from '../components/Hero.tsx'


function Home() {


  return (
    <>
      <div className="flex flex-col min-h-screen justify-between">
        
        <NavBar />

        <Hero />

        <Footer />

      </div>

    </>
  )
}

export default Home
