import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegCopy,
  FaCheck,
  FaWhatsapp,
} from "react-icons/fa";

const EMAIL = "maikonvfranco@gmail.com";

const redes = [
  {
    name: "WhatsApp",
    href: "https://wa.me/35998799211",
    icon: FaWhatsapp,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/maikonvfranco",
    icon: FaLinkedin,
  },
  { name: "GitHub", href: "https://github.com/maikonvfranco", icon: FaGithub },
  {
    name: "Instagram",
    href: "https://www.instagram.com/maikonvfranco.dev",
    icon: FaInstagram,
  },
];

function Contact() {
  const [copiado, setCopiado] = useState(false);

  async function copiarEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // se falhar, o botão de enviar e-mail continua funcionando
    }
  }

  return (
    <section id="contato" className="pb-20">
      <div className="rounded-full bg-blue-500/15 blur-3xl" />

      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-slate-900/50 p-8 text-center backdrop-blur-sm md:p-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
          </span>
          Disponível para vagas
        </span>

        <h2 className="mt-5 text-3xl font-bold text-white">Vamos conversar?</h2>
        <p className="mx-auto mt-3 max-w-md text-slate-400">
          Estou buscando minha primeira oportunidade como desenvolvedor. Me
          chame por e-mail ou por qualquer uma das redes abaixo.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <FaEnvelope /> Enviar e-mail
          </a>

          <button
            type="button"
            onClick={copiarEmail}
            className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-slate-200 transition-colors duration-300 hover:bg-white/10"
          >
            {copiado ? <FaCheck className="text-blue-400" /> : <FaRegCopy />}
            {copiado ? "Copiado!" : EMAIL}
          </button>
        </div>

        <ul className="mt-8 flex justify-center gap-4">
          {redes.map(({ name, href, icon: Icon }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:text-blue-400"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
