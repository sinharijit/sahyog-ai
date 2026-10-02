import SubjectGrid from "@/components/app/subjects/SubjectGrid";
import SubjectsHeader from "@/components/app/subjects/SubjectsHeader";

export default function SubjectsPage() {
  return (
    <div className="min-h-full p-6 lg:p-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <SubjectsHeader />

        <SubjectGrid />
      </div>
    </div>
  );
}