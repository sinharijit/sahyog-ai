import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export default function StatsCard({
  title,
  value,
  description,
  icon: Icon,
}: StatsCardProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 transition-colors hover:border-zinc-700">
      <div className="mb-5 flex items-center justify-between">
        <div className="rounded-lg bg-indigo-500/10 p-2.5 text-indigo-400">
          <Icon size={20} />
        </div>
      </div>

      <p className="text-3xl font-bold text-white">
        {value}
      </p>

      <p className="mt-1 font-medium text-zinc-300">
        {title}
      </p>

      <p className="mt-2 text-sm text-zinc-500">
        {description}
      </p>
    </div>
  );
}