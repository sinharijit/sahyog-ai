export default function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-12">
        
        {/* Main Footer Content */}
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 font-bold text-white">
                S
              </div>

              <span className="text-lg font-semibold tracking-tight text-white">
                Sahyog AI
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-zinc-500">
              Your Personal Knowledge Intelligence System.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-medium text-white">
              Explore
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#features"
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                How It Works
              </a>

              <a
                href="#about"
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
              >
                About
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-900 pt-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          
          <p>
            © 2026 Sahyog AI. All rights reserved.
          </p>

          <p>
            Built as an AI Engineering Project.
          </p>

        </div>

      </div>
    </footer>
  );
}