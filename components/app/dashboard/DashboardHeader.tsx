export default function DashboardHeader() {
  const hour = new Date().getHours();

  let greeting = "Good morning";

  if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon";
  } else if (hour >= 17) {
    greeting = "Good evening";
  }

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-3xl font-bold tracking-tight text-white">
        {greeting}, Arijit 👋
      </h1>

      <p className="text-zinc-400">
        Welcome back to your personal knowledge workspace.
      </p>
    </div>
  );
}