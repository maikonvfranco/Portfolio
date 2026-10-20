import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiInsomnia,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import { FiImage, FiFilm } from "react-icons/fi";

import { FiCpu } from "react-icons/fi";

type Tech = { name: string; icon: IconType; color: string };

const grupos: { titulo: string; techs: Tech[] }[] = [
  {
    titulo: "Frontend",
    techs: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    titulo: "Backend",
    techs: [
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    titulo: "Ferramentas",
    techs: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Insomnia", icon: SiInsomnia, color: "#58A6FF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    titulo: "Extras",
    techs: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Premiere Pro", icon: FiFilm, color: "#9999FF" },
      { name: "Photoshop", icon: FiImage, color: "#31A8FF" },
      { name: "Hardware", icon: FiCpu, color: "#6B7280" },
    ],
  },
];

function Stack() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6">
      {grupos.map((grupo) => (
        <div key={grupo.titulo} className="w-full text-center">
          <h3 className="mb-3 text-sm font-semibold tracking-wider text-slate-400 uppercase">
            {grupo.titulo}
          </h3>
          <ul className="flex flex-wrap justify-center gap-3">
            {grupo.techs.map(({ name, icon: Icon, color }) => (
              <li
                key={name}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              >
                <Icon size={18} color={color} />
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Stack;
