const links = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

function NavBar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-900/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="text-lg font-bold text-white">
          maikonvfranco<span className="text-blue-400">.dev</span>
        </a>

        <ul className="flex items-center gap-6 md:gap-10">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="relative text-slate-300 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full"
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
