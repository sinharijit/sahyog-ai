export default function About() {
  return (
    <section
      id="about"
      className="border-t border-zinc-900 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-sm font-medium text-indigo-400">
            WHY SAHYOG AI
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your knowledge is scattered.
            <span className="block text-zinc-400">
              Your intelligence shouldn&apos;t be.
            </span>
          </h2>

          <p className="mt-8 leading-8 text-zinc-400">
            We collect more information than ever before, but most of it
            remains disconnected across documents, folders, notes, and
            platforms.
          </p>

          <p className="mt-4 leading-8 text-zinc-400">
            Sahyog AI is designed to change that. It transforms your scattered
            information into a connected knowledge ecosystem that you can
            search, explore, and interact with naturally.
          </p>
        </div>

        {/* Right Visual */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-8 sm:p-10">
          <div className="space-y-6">
            
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
              <p className="text-sm text-zinc-500">Before Sahyog AI</p>

              <div className="mt-4 space-y-3">
                <div className="h-2 rounded-full bg-zinc-800" />
                <div className="h-2 w-4/5 rounded-full bg-zinc-800" />
                <div className="h-2 w-3/5 rounded-full bg-zinc-800" />
              </div>

              <p className="mt-5 text-sm text-zinc-400">
                Information scattered everywhere.
              </p>
            </div>

            {/* Arrow */}
            <div className="flex justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400">
                ↓
              </div>
            </div>

            <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-5">
              <p className="text-sm text-indigo-400">With Sahyog AI</p>

              <div className="mt-4 space-y-3">
                <div className="h-2 rounded-full bg-indigo-500/40" />
                <div className="h-2 w-4/5 rounded-full bg-indigo-500/40" />
                <div className="h-2 w-3/5 rounded-full bg-indigo-500/40" />
              </div>

              <p className="mt-5 text-sm text-zinc-300">
                Connected, searchable intelligence.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}