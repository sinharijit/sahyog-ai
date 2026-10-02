import KeyConcepts from "@/components/app/knowledge/KeyConcepts";
import KnowledgeHeader from "@/components/app/knowledge/KnowledgeHeader";
import KnowledgeMap from "@/components/app/knowledge/KnowledgeMap";
import KnowledgeStats from "@/components/app/knowledge/KnowledgeStats";

export default function KnowledgePage() {
  return (
    <div className="min-h-full p-6 lg:p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <KnowledgeHeader />

        <KnowledgeStats />

        <KnowledgeMap />

        <KeyConcepts />
      </div>
    </div>
  );
}