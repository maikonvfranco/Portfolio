import { useRef } from "react";
import { FaGithub } from "react-icons/fa";

type CardProps = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  repoUrl: string;
  liveUrl?: string;
  details?: string;
};

const botao =
  "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm transition-all duration-300 hover:-translate-y-0.5";

function Card({
  title,
  description,
  image,
  stack,
  repoUrl,
  liveUrl,
  details,
}: CardProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      <img src={image} alt={title} className="h-48 w-full object-cover" />

      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-slate-400">{description}</p>

        <ul className="mt-3 flex flex-wrap justify-center gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`${botao} border-blue-400/30 bg-blue-400/10 text-blue-300 hover:border-blue-400/60 hover:bg-blue-400/20 hover:text-white hover:shadow-lg hover:shadow-blue-500/20`}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>
              Ver ao vivo
            </a>
          )}

          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className={`${botao} border-white/15 text-slate-300 hover:border-white/30 hover:bg-white/10 hover:text-white`}
          >
            <FaGithub /> Código
          </a>

          {details && (
            <button
              type="button"
              onClick={() => dialogRef.current?.showModal()}
              className={`${botao} cursor-pointer border-transparent text-slate-400 hover:bg-white/10 hover:text-white`}
            >
              Detalhes
            </button>
          )}
        </div>
      </div>

      {details && (
        <dialog
          ref={dialogRef}
          onClick={(e) => {
            if (e.target === dialogRef.current) dialogRef.current.close();
          }}
          className="m-auto w-[90%] max-w-2xl rounded-xl border border-white/10 bg-slate-900 p-0 text-slate-200 backdrop:bg-black/70 backdrop:backdrop-blur-sm"
        >
          <div className="p-6 text-left">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="mt-4 whitespace-pre-line text-slate-300">{details}</p>
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="mt-6 cursor-pointer rounded-lg border border-white/15 px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-white/10"
            >
              Fechar
            </button>
          </div>
        </dialog>
      )}
    </article>
  );
}

export default Card;
