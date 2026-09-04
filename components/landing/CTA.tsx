export default function CTA() {
  return (
    <section className="border-t border-zinc-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 px-6 py-20 text-center sm:px-12">
          
          {/* Decorative background glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent" />

          <div className="mx-auto max-w-2xl">
            <p className="text-sm font-medium text-indigo-400">
              BUILD YOUR KNOWLEDGE SPACE
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Turn information into intelligence.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Bring your documents, ideas, and information together in one
              intelligent knowledge system designed to help you discover more
              from what you already know.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="rounded-lg bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-400">
                Get Started
              </button>

              <a
                href="#features"
                className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:bg-zinc-800"
              >
                Explore Features
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}