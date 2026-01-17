import { Camera, Mic, RotateCcw, LogOut, Sparkles } from "lucide-react";

const InterviewPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#070B14] to-[#05080F] text-white font-(--font-inter)">
      {/* HEADER */}
      <header className="flex flex-col gap-2 border-b border-white/10 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-lg font-semibold">AI Mock Interview</h1>
          <p className="text-sm text-white/60">
            Real-time AI interviewer tailored to your job role
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs text-orange-400">
            ● Waiting for Response
          </span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs">
            00:15
          </span>
        </div>
      </header>

      {/* MAIN GRID */}
      <main className="grid gap-4 px-4 py-6 md:grid-cols-[1fr_1.4fr_0.9fr] md:px-6">
        {/* LEFT – CAMERA */}
        <section className="relative flex min-h-180 items-center justify-center rounded-xl border border-white/10 bg-linear-to-b from-[#1A2233] to-[#0E1524]">
          <div className="flex flex-col items-center gap-3 text-white/70">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500">
              <Camera className="h-6 w-6 text-white" />
            </div>
            <p className="text-sm">Camera feed will appear here</p>
          </div>

          <span className="absolute bottom-3 left-3 rounded bg-black/60 px-2 py-1 text-xs">
            You • mic
          </span>
        </section>

        {/* CENTER – AI INTERVIEWER */}
        <section className="relative flex min-h-65 items-center justify-center rounded-xl border border-cyan-500/20 bg-linear-to-br from-[#061A2E] to-[#0B0F2A]">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-sky-400 to-blue-600">
            <Sparkles className="h-8 w-8 text-white" />
          </div>

          <span className="absolute bottom-3 left-3 rounded-md border border-cyan-500/30 bg-black/50 px-2 py-1 text-xs text-cyan-400">
            Volkai AI Interviewer
          </span>
        </section>

        {/* RIGHT – QUESTIONS */}
        <aside className="rounded-xl border border-white/10 bg-[#0B1220] p-4">
          <h3 className="mb-4 text-sm font-semibold">Interview Questions</h3>

          {/* Current Question */}
          <div className="rounded-lg border border-orange-500/30 bg-orange-500/10 p-3">
            <span className="text-xs text-orange-400">CURRENT QUESTION</span>
            <p className="mt-2 text-sm">
              Tell me about yourself and your experience in software
              development.
            </p>

            <div className="mt-3 flex gap-2">
              <span className="rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400">
                Difficulty: Easy
              </span>
              <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-xs text-sky-400">
                Skill: Communication
              </span>
            </div>
          </div>

          {/* Upcoming */}
          <div className="mt-4 space-y-3 text-xs text-white/40">
            <p>PREVIOUS QUESTIONS</p>
            <div className="rounded-md border border-white/10 p-2">
              What motivated you to apply for this position?
            </div>
            <div className="rounded-md border border-white/10 p-2">
              Describe a challenging project you worked on.
            </div>
          </div>
        </aside>
      </main>

      {/* FOOTER CONTROLS */}
      <footer className="flex flex-wrap items-center justify-center gap-3 border-t border-white/10 px-6 py-4">
        <button className="flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600">
          <Mic className="h-4 w-4" />
          Start Recording Answer
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm hover:bg-white/5">
          <RotateCcw className="h-4 w-4" />
          Repeat Question
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm hover:bg-white/5">
          <LogOut className="h-4 w-4" />
          Exit Interview
        </button>
      </footer>
    </div>
  );
};

export default InterviewPage;
