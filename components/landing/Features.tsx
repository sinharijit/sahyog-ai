const features = [
  {
    number: "01",
    title: "Intelligent Document Processing",
    description:
      "Upload your documents and let Sahyog AI transform unstructured information into an organized knowledge base.",
  },
  {
    number: "02",
    title: "Semantic Search",
    description:
      "Search your knowledge by meaning, not just keywords, and discover the information that actually matters.",
  },
  {
    number: "03",
    title: "AI Knowledge Chat",
    description:
      "Ask questions naturally and receive AI-powered answers grounded in your personal knowledge base.",
  },
  {
    number: "04",
    title: "Connected Knowledge",
    description:
      "Discover relationships between ideas, documents, and concepts across your entire knowledge ecosystem.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="border-t border-zinc-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-indigo-400">
            CORE CAPABILITIES
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your information deserves more than storage.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Sahyog AI transforms scattered information into an intelligent
            knowledge system that helps you find, understand, and connect what
            you know.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="group rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 transition-colors hover:border-zinc-700 hover:bg-zinc-900"
            >
              <span className="text-sm font-medium text-indigo-400">
                {feature.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}