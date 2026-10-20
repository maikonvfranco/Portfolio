import Card from "./Card";
import pdvImg from "../assets/PDV.webp";
import imobImg from "../assets/imobiliaria.webp";
import landingImg from "../assets/landing.webp";

const projetos = [
  {
    title: "PDV Desktop",
    description: "Sistema de ponto de venda usado em um negócio real.",
    image: pdvImg,
    stack: ["Electron", "React", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/maikonvfranco/POS___PDV",
    details:
      "I’m excited to share one of my most robust projects yet: a complete, production-ready Point of Sale (POS) system built from scratch and successfully implemented in a real-world business. \nThe goal was to deliver a desktop experience capable of handling daily operations with high performance and zero friction.\nFeatures: Main Sales Panel: Fully integrated with barcode scanning for fast, seamless checkouts.\nFinancial Dashboards: Real-time data visualization to track revenue, daily sales, and metrics.\nAdmin Hub: A centralized panel for deep operational control.\nProduct & Inventory Registry: Comprehensive system to manage stock levels and item details.\nCustomer Management: CRM capabilities built directly into the workflow.\nSeeing the code handle actual daily transactions, track real inventory, and streamline a real businesss workflow has been incredibly rewarding. It taught me a lot about software architecture, state management, and the importance of performance under pressure.",
  },
  {
    title: "Imobiliária",
    description: "Site corporativo da imobiliária Araújo Imóveis e Família.",
    image: imobImg,
    stack: ["Next.js", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/maikonvfranco/AraujoRealty",
    liveUrl: "https://www.araujoimoveisefamilia.com.br",
    details:
      "A full-stack web application designed for Araújo Imóveis e Família. The platform features a responsive public showcase for potential clients and an intuitive Admin Dashboard (CMS) for internal property management.",
  },
  {
    title: "Landing Page",
    description:
      "Um conceito de landing page para fan token fictício do Ayrton Senna ($SENNA12)",
    image: landingImg,
    stack: ["React", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/maikonvfranco/AyrtonSennaConcept",
    liveUrl: "https://coin-page-one.vercel.app",
    details:
      "A modern landing page concept for the fictional Ayrton Senna fan token ($SENNA12). The design focuses on creating an engaging user experience with a clean, responsive layout.",
  },
  {
    title: "Encurtador de links",
    description: "Um encurtador de links simples e funcional.",
    image: "https://via.placeholder.com/400x300.png?text=Encurtador+de+links",
    stack: ["React", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/maikonvfranco",
    details: "A simple and functional link shortener application.",
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
