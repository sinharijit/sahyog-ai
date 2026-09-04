export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-[#09090b]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 font-bold text-white">
            S
          </div>

          <span className="text-lg font-semibold tracking-tight">
            Sahyog AI
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            How it Works
          </a>

          <a
            href="#about"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            About
          </a>
        </div>

        {/* CTA */}
        <button className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-400">
          Get Started
        </button>

      </div>
    </nav>
  );
}