import AIStudyInsights from "@/components/app/subject-workspace/AIStudyInsights";
import RecentActivity from "@/components/app/subject-workspace/RecentActivity";
import StudyRecommendation from "@/components/app/subject-workspace/StudyRecommendation";
import SubjectNavigation from "@/components/app/subject-workspace/SubjectNavigation";
import SubjectStats from "@/components/app/subject-workspace/SubjectStats";
import SubjectWorkspaceHeader from "@/components/app/subject-workspace/SubjectWorkspaceHeader";

type SubjectPageProps = {
  params: Promise<{
    subjectId: string;
  }>;
};

export default async function SubjectPage({
  params,
}: SubjectPageProps) {
  const { subjectId } = await params;

  const subjectName = subjectId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-full p-6 lg:p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <SubjectWorkspaceHeader subjectName={subjectName} />

        <SubjectNavigation />

        <SubjectStats />

        <div className="grid gap-6 xl:grid-cols-2">
          <RecentActivity />
          <AIStudyInsights />
        </div>

        <StudyRecommendation />
      </div>
    </div>
  );
}