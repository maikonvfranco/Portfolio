import NavBar from "../../components/NavBar.tsx";
import Footer from "../../components/Footer.tsx";
import Hero from "../../components/Hero.tsx";
import About from "../../components/About.tsx";
import Projects from "../../components/Projects.tsx";
import Contact from "../../components/Contact.tsx";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <NavBar />

        <Hero />

        <About />

        <Projects />

        <Contact />

        <Footer />
      </div>
    </>
  );
}

export default Home;
