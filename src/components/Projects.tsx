import Card from "./Card";
import pdvImg from "../assets/PDV.jpg";
import imobImg from "../assets/imobiliaria.png";
import landingImg from "../assets/landing.png";

const projetos = [
  {
    title: "PDV Desktop",
    description: "Sistema de ponto de venda usado em um negócio real.",
    image: pdvImg,
    stack: ["Electron", "React", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/maikonvfranco/POS___PDV",
  },
  {
    title: "Imobiliária",
    description: "Site corporativo da imobiliária Araújo Imóveis e Família.",
    image: imobImg,
    stack: ["Next.js", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/maikonvfranco/AraujoRealty",
    liveUrl: "www.araujoimoveisefamilia.com.br",
  },
  {
    title: "Landing Page",
    description:
      "Um conceito de landing page para fan token fictício do Ayrton Senna ($SENNA12)",
    image: landingImg,
    stack: ["React", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/maikonvfranco/AyrtonSennaConcept",
  },
  {
    title: "Encurtador de links",
    description: "Um encurtador de links simples e funcional.",
    image: "https://via.placeholder.com/400x300.png?text=Encurtador+de+links",
    stack: ["React", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/maikonvfranco",
  },
];

function Projects() {
  return (
    <section id="projetos" className="relative scroll-mt-16 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="relative isolate mb-10 text-center">
          <div className="absolute top-1/2 left-1/2 -z-10 h-15 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/40 blur-3xl" />

          <h2 className="text-3xl font-bold text-blue-400">Destaques</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projetos.map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
