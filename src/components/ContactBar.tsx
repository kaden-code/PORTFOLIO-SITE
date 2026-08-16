import {
  Bot,
  Code2,
  Cpu,
  Download,
  FileText,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactBar() {
  return (
    <section className="border-b border-slate-800 bg-slate-900/70">
      <div className="mx-auto max-w-6xl px-5 py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-black tracking-tight text-white">
                Kaden Musard
              </h1>

              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Available
              </span>
            </div>

            <p className="mt-2 text-sm font-medium text-slate-300">
              Embedded Systems Engineer • Full-Stack Developer • Robotics
              Specialist
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs font-semibold text-slate-300">
                <Cpu size={14} className="text-cyan-300" />
                Embedded Systems
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs font-semibold text-slate-300">
                <Code2 size={14} className="text-cyan-300" />
                Full-Stack
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs font-semibold text-slate-300">
                <Bot size={14} className="text-cyan-300" />
                Robotics
              </span>
            </div>
          </div>

          <div className="grid gap-2 text-sm sm:grid-cols-2">
            <a
              href="mailto:kadenoncomputation@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              <Mail size={16} />
              kadenoncomputation@gmail.com
            </a>

            <a
              href="tel:2403855252"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              <Phone size={16} />
              240-385-5252
            </a>

            <a
              href="https://github.com/kaden-code"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              <FaGithub size={16} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kaden-musard-b609722a0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>
            <a
              href="/kaden_resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400 px-4 py-2 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              <Download size={16} />
              Download Resume
            </a>

            <a
              href="/kaden_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              <FileText size={16} />
              View Resume
            </a>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <MapPin size={14} className="text-slate-500" />
          <span>
            Open to full-time embedded systems, software, robotics, and IoT
            roles.
          </span>
        </div>
      </div>
    </section>
  );
}
