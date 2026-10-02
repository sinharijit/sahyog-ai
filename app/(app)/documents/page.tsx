import DocumentsHeader from "@/components/app/documents/DocumentsHeader";
import UploadArea from "@/components/app/documents/UploadArea";
import DocumentSearch from "@/components/app/documents/DocumentSearch";
import DocumentTabs from "@/components/app/documents/DocumentTabs";
import DocumentList from "@/components/app/documents/DocumentList";


export default function DocumentsPage() {
  return (
    <div className="p-10">
      <DocumentsHeader />

      <UploadArea />

      <DocumentSearch />

      <DocumentTabs />

      <DocumentList />
    </div>
  );
}