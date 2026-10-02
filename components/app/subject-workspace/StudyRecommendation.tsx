import { ArrowRight, Sparkles } from "lucide-react";

export default function StudyRecommendation() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-zinc-950 to-zinc-950 p-6">
      <div className="relative z-10">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
          <Sparkles size={20} />
        </div>

        <h2 className="mt-5 text-lg font-semibold text-white">
          Continue Your Learning
        </h2>

        <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400">
          Based on your recent activity, Sahyog AI recommends revising
          Synchronization before moving to Deadlocks.
        </p>

        <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300">
          Start learning
          <ArrowRight size={16} />
        </button>
      </div>

      <Sparkles
        size={160}
        className="absolute -bottom-10 -right-10 text-indigo-500/5"
      />
    </div>
  );
}