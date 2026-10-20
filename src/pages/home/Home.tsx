import NavBar from '../../components/NavBar.tsx'
import Footer from '../../components/Footer.tsx'
import Hero from '../../components/Hero.tsx'


function Home() {


  return (
    <>
      <div className="flex justify-center min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">

        <NavBar />

        <div className="flex flex-col justify-between w-5/7">

          <Hero />

          <Footer />

        </div>
      </div>

    </>
  )
}

export default Home
