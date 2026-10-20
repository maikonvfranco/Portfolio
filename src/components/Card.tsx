// src/components/Card.tsx
type CardProps = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  repoUrl: string;
  liveUrl?: string; // o "?" torna opcional
};

function Card({
  title,
  description,
  image,
  stack,
  repoUrl,
  liveUrl,
}: CardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-slate-400">{description}</p>

        <ul className="mt-3 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex gap-4 text-sm">
          <a href={repoUrl} className="text-slate-300 hover:text-white">
            Código
          </a>
          {liveUrl && (
            <a href={liveUrl} className="text-blue-400 hover:text-blue-300">
              Ver ao vivo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Card;
