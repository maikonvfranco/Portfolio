import { TypeAnimation } from "react-type-animation";
import foto from "../assets/fotoprofissional.webp";

function Hero() {
  return (
    <section className="relative isolate flex flex-col items-center justify-center gap-10 px-6 pt-20 pb-20 md:flex-row md:gap-16 md:px-16">
      <div className="absolute top-1/3 left-1/4 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <img
        src={foto}
        alt="Foto de Maikon V Franco"
        width={256}
        height={256}
        className="h-40 w-40 shrink-0 rounded-full border-2 border-blue-500 shadow-2xl shadow-blue-500/20 transition-transform duration-300 hover:scale-105 md:h-64 md:w-64"
      />

      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Maikon V Franco
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "React & Next.js",
            2000,
            "TypeScript",
            2000,
          ]}
          wrapper="p"
          speed={50}
          repeat={Infinity}
          className="mt-3 block h-9 text-xl text-blue-400 md:text-2xl"
        />

        <p className="mt-4 max-w-md text-slate-400">
          Programar não se resume a resolver problemas.
          <br />
          Trata-se de construir soluções que sejam escaláveis, duradouras e que
          gerem valor real.
        </p>

        <div className="mt-6 flex justify-center gap-4 md:justify-start">
          <a
            href="#projetos"
            className="rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Ver projetos
          </a>
          <a
            href="https://github.com/maikonvfranco"
            className="rounded-lg border border-white/20 px-5 py-2.5 text-slate-200 transition-colors duration-300 hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
