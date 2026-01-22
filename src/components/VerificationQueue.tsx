import { Search, Filter, Download, Eye } from "lucide-react";

const tabs = [
  { label: "All", count: 248, active: true },
  { label: "Pending", count: 52 },
  { label: "Completed", count: 178 },
  { label: "Failed", count: 18 },
];

type RiskLevel = "LOW" | "MEDIUM" | "HIGH";

const riskColorMap: Record<RiskLevel, string> = {
  LOW: "bg-green-500",
  MEDIUM: "bg-orange-500",
  HIGH: "bg-red-500",
};

const rows = [
  {
    name: "Rajesh Kumar",
    email: "rajesh.k@email.com",
    role: "Senior Software Engineer",
    status: "Completed",
    risk: 15,
    riskLabel: "LOW",
    progress: 5,
    tat: "3d",
    updated: "2 hours ago",
  },
  {
    name: "Priya Sharma",
    email: "priya.s@email.com",
    role: "Product Manager",
    status: "Pending",
    risk: 45,
    riskLabel: "MEDIUM",
    progress: 3,
    tat: "5d",
    updated: "5 hours ago",
  },
  {
    name: "Amit Patel",
    email: "amit.p@email.com",
    role: "Full Stack Developer",
    status: "Completed",
    risk: 20,
    riskLabel: "LOW",
    progress: 5,
    tat: "4d",
    updated: "1 day ago",
  },
  {
    name: "Sneha Reddy",
    email: "sneha.r@email.com",
    role: "DevOps Engineer",
    status: "Failed",
    risk: 75,
    riskLabel: "HIGH",
    progress: 4,
    tat: "6d",
    updated: "3 hours ago",
  },
];

export default function VerificationQueue() {
  return (
    <section className="mx-auto mt-8 max-w-[1440px] rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b0f1a] to-[#0a0e17] p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="relative inline-flex items-center gap-3 text-lg font-semibold tracking-wide">
          <span className="h-5 w-1 rounded-full bg-gradient-to-b from-orange-400 to-orange-600" />
          <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Verification Queue
          </span>
        </h2>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70">
            <Search className="h-4 w-4" />
            <input
              placeholder="Search candidates..."
              className="bg-transparent outline-none placeholder:text-white/40"
            />
          </div>

          <button className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-white/70 hover:bg-white/5">
            <Filter className="h-4 w-4" />
            Filters
          </button>

          <button className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-white/70 hover:bg-white/5">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-4 flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`rounded-full px-4 py-1.5 text-sm ${
              tab.active
                ? "bg-orange-500 text-white"
                : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-white/60">
            <tr>
              <th className="px-4 py-3 text-left">Candidate</th>
              <th className="px-4 py-3 text-left">Role</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Risk Score</th>
              <th className="px-4 py-3 text-left">Progress</th>
              <th className="px-4 py-3 text-left">TAT</th>
              <th className="px-4 py-3 text-left">Last Updated</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-white/10 hover:bg-white/5">
                <td className="px-4 py-3">
                  <div className="font-medium">{row.name}</div>
                  <div className="text-xs text-white/40">{row.email}</div>
                </td>

                <td className="px-4 py-3">{row.role}</td>

                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      row.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : row.status === "Pending"
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <span
                    className={`rounded-md px-2 py-1 text-xs ${
                      row.riskLabel === "LOW"
                        ? "bg-green-500/20 text-green-400"
                        : row.riskLabel === "MEDIUM"
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {row.risk}
                  </span>{" "}
                  <span className="ml-2 text-xs text-white/50">
                    {row.riskLabel}
                  </span>
                </td>

                <td className="px-4 py-3">
                  <div className="h-2 w-24 rounded-full bg-white/10">
                    <div
                      className={`h-2 rounded-full transition-all duration-300
        ${riskColorMap[row.riskLabel as RiskLevel]}
        ${
          row.riskLabel === "LOW"
            ? "[0_0_8px_rgba(34,197,94,0.6)]"
            : row.riskLabel === "MEDIUM"
              ? "[0_0_8px_rgba(249,115,22,0.6)]"
              : "[0_0_8px_rgba(239,68,68,0.6)]"
        }
      `}
                      style={{ width: `${row.progress * 20}%` }}
                    />
                  </div>
                </td>

                <td className="px-4 py-3 font-medium">{row.tat}</td>
                <td className="px-4 py-3 text-white/60">{row.updated}</td>

                <td className="px-4 py-3">
                  <button className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-xs text-blue-400 hover:bg-white/5">
                    <Eye className="h-4 w-4" />
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
