import { ShieldCheck, Clock, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import VerificationQueue from "./VerificationQueue";

const StatCard = ({
  icon,
  value,
  label,
  change,
  changeColor = "text-green-400",
  iconBg,
}: {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  change: string;
  changeColor?: string;
  iconBg: string;
}) => (
  <div className="rounded-xl border border-white/10 bg-gradient-to-b from-[#0E1322] to-[#090E1A] p-5">
    <div className="flex items-center justify-between">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${iconBg}`}
      >
        {icon}
      </div>
      <span className={`text-sm font-semibold ${changeColor}`}>{change}</span>
    </div>

    <div className="mt-4">
      <h3 className="text-2xl font-semibold">{value}</h3>
      <p className="mt-1 text-sm text-white/50">{label}</p>
    </div>
  </div>
);

export default function VerificationDashboard() {
  return (
    <main className="flex-1 px-8 py-6 xl:px-10">
      {/* HEADER */}
      <div className="mb-8 flex items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative">
            {/* Subtle glow */}
            <div className="absolute -left-3 top-2 h-8 w-1 rounded-full bg-orange-500/60 blur-sm" />

            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Verification Dashboard
            </h1>

            <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/55">
              Track applicants, performance, and hiring insights—all from one place.
            </p>
          </div>
        </motion.div>

        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0E1322] px-4 py-2">
          <span className="text-sm text-white/60">Hiring Mode:</span>
          <button className="rounded-md bg-orange-500 px-4 py-1.5 text-sm font-medium cursor-pointer">
            Direct Company
          </button>
          <button className="rounded-md px-4 py-1.5 text-sm text-white/60 hover:bg-white/5 cursor-pointer">
            Manpower / Staffing
          </button>

          <div className="ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold">
            A
          </div>
        </div>
      </div>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <StatCard
            icon={<ShieldCheck className="h-5 w-5 text-sky-400" />}
            value="248"
            label="Total Verifications"
            change="+12%"
            iconBg="bg-sky-500/20"
          />
        </motion.div>

        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <StatCard
            icon={<Clock className="h-5 w-5 text-orange-400" />}
            value="52"
            label="Pending Verification"
            change="+5%"
            iconBg="bg-orange-500/20"
          />
        </motion.div>

        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <StatCard
            icon={<CheckCircle2 className="h-5 w-5 text-green-400" />}
            value="178"
            label="Completed"
            change="+8%"
            iconBg="bg-green-500/20"
          />
        </motion.div>

        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <StatCard
            icon={<XCircle className="h-5 w-5 text-red-400" />}
            value="18"
            label="Failed / Discrepancy"
            change="-3%"
            changeColor="text-red-400"
            iconBg="bg-red-500/20"
          />
        </motion.div>
      </div>

      {/* BOTTOM CARDS */}
      <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Average TAT */}
        <motion.div whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }} className="rounded-xl border border-white/10 bg-gradient-to-b from-[#0E1322] to-[#090E1A] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
              <Clock className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold">Average TAT</h3>
              <p className="text-sm text-white/50">Turn Around Time</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-3xl font-semibold">
              4.2{" "}
              <span className="text-sm font-normal text-white/50">days</span>
            </h2>

            <div className="mt-4 h-2 w-full rounded-full bg-white/10">
              <div className="h-full w-[60%] rounded-full bg-purple-500" />
            </div>

            <p className="mt-2 text-xs text-white/40">Target: 7 days</p>
          </div>
        </motion.div>

        {/* SLA */}
        <motion.div className="rounded-xl border border-white/10 bg-gradient-to-b from-[#0E1322] to-[#090E1A] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold">SLA Compliance</h3>
              <p className="text-sm text-white/50">On-time completion rate</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-3xl font-semibold">87%</h2>

            <div className="mt-4 h-2 w-full rounded-full bg-white/10">
              <div className="h-full w-[87%] rounded-full bg-green-500" />
            </div>

            <p className="mt-2 text-xs text-white/40">Target: 95%</p>
          </div>
        </motion.div>
      </div>
      <VerificationQueue/>
    </main>
  );
}
