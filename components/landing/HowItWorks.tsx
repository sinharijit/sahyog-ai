const steps = [
  {
    number: "01",
    title: "Add Your Knowledge",
    description:
      "Upload documents and bring your scattered information into one secure knowledge space.",
  },
  {
    number: "02",
    title: "AI Understands It",
    description:
      "Your content is processed, structured, and transformed into searchable knowledge using AI.",
  },
  {
    number: "03",
    title: "Ask, Search & Discover",
    description:
      "Interact with your knowledge naturally, find relevant information, and discover connections between ideas.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-t border-zinc-900 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium text-indigo-400">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From information to intelligence.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Sahyog AI turns your scattered documents into a connected knowledge
            system in three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-20 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line - desktop only */}
              {index < steps.length - 1 && (
                <div className="absolute left-20 right-0 top-8 hidden h-px bg-zinc-800 md:block" />
              )}

              {/* Step Number */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-500/30 bg-indigo-500/10 text-lg font-semibold text-indigo-400">
                {step.number}
              </div>

              {/* Content */}
              <h3 className="mt-8 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}