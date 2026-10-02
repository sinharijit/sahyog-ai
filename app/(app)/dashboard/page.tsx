import DashboardHeader from "@/components/app/dashboard/DashboardHeader";
import StatsCard from "@/components/app/dashboard/StatsCard";
import RecentDocuments from "@/components/app/dashboard/RecentDocuments";
import QuickActions from "@/components/app/dashboard/QuickActions";
import {
  FileText,
  BrainCircuit,
  Network,
  MessageSquare,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-10">
      <DashboardHeader />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Documents"
          value="12"
          description="Total uploaded files"
          icon={FileText}
        />

        <StatsCard
          title="Knowledge"
          value="248"
          description="Knowledge chunks"
          icon={BrainCircuit}
        />

        <StatsCard
          title="Connections"
          value="42"
          description="Discovered relationships"
          icon={Network}
        />

        <StatsCard
          title="AI Queries"
          value="18"
          description="Questions asked"
          icon={MessageSquare}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentDocuments />
        </div>

        <div>
          <QuickActions />
        </div>
      </div>
    </div>
  );
}