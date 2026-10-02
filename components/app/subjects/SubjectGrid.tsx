import SubjectCard from "./SubjectCard";

const subjects = [
  {
    name: "Operating Systems",
    slug: "operating-systems",
    description:
      "Processes, scheduling, memory management and system architecture.",
    documents: 12,
    conversations: 24,
    lastActive: "2 hours ago",
  },
  {
    name: "Database Systems",
    slug: "database-systems",
    description:
      "SQL, normalization, transactions and database architecture.",
    documents: 8,
    conversations: 16,
    lastActive: "Yesterday",
  },
  {
    name: "Computer Networks",
    slug: "computer-networks",
    description:
      "Networking protocols, routing, TCP/IP and communication systems.",
    documents: 5,
    conversations: 9,
    lastActive: "3 days ago",
  },
];

export default function SubjectGrid() {
  return (
    <div>
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-white">
          Your Subjects
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          Each subject has its own documents, conversations, notes and learning progress.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.name}
            {...subject}
          />
        ))}
      </div>
    </div>
  );
}