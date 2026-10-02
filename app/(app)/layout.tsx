import AppHeader from "@/components/app/AppHeader";
import AppSidebar from "@/components/app/AppSidebar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-[#09090b]">
      <AppSidebar />

      <div className="min-w-0 flex-1">
        <AppHeader />

        <main>{children}</main>
      </div>
    </div>
  );
}