import { useEffect, useState } from "react";

const links = [
  { label: "Início", id: "hero" },
  { label: "Projetos", id: "projetos" },
  { label: "Contato", id: "contato" },
];

function NavBar() {
  const [ativo, setAtivo] = useState("hero");

  // destaca o link da seção que está na tela
  useEffect(() => {
    const secoes = links
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setAtivo(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    secoes.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#home"
          className="shrink-0 text-base font-bold text-white sm:text-lg"
        >
          <span className="sm:hidden">mf</span>
          <span className="hidden sm:inline">maikonvfranco</span>
          <span className="text-blue-400">.dev</span>
        </a>

        <ul className="flex items-center gap-0.5 sm:gap-1">
          {links.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`block rounded-lg px-2.5 py-2 text-sm transition-all duration-300 sm:px-4 ${
                  ativo === id
                    ? "bg-white/10 text-white"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
