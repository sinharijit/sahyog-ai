export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
          <span className="h-2 w-2 rounded-full bg-indigo-500" />
          Personal Knowledge Intelligence
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
          Your Personal Knowledge
          <span className="block text-indigo-400">
            Intelligence System
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
          Transform scattered documents, notes, and information into a
          connected, searchable knowledge ecosystem powered by AI.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-400">
            Get Started
          </button>

          <a
            href="#features"
            className="rounded-lg border border-zinc-800 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
          >
            Explore Features
          </a>
        </div>

      </div>
    </section>
  );
}