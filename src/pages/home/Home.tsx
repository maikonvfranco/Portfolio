import NavBar from "../../components/NavBar.tsx";
import Footer from "../../components/Footer.tsx";
import Hero from "../../components/Hero.tsx";
import Stack from "../../components/Stack.tsx";
import Projects from "../../components/Projects.tsx";
import Contact from "../../components/Contact.tsx";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <NavBar />

        <Hero />

        <Stack />

        <Projects />

        <Contact />

        <Footer />
      </div>
    </>
  );
}

export default Home;
