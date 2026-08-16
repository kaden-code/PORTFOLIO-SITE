import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Bot,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Mail,
  Phone,
  Radio,
  Send,
  Sparkles,
  Wrench,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function ContactPage() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-6 pb-10 sm:px-5 md:pt-8 md:pb-12">
      <div className="pointer-events-none absolute left-0 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-48 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          <ArrowLeft size={14} />
          Back to Projects
        </Link>

        <div className="mt-4 grid items-stretch gap-4 lg:grid-cols-2">
          <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-black/20">
            <div className="border-b border-slate-800 bg-gradient-to-br from-cyan-400/10 via-slate-950/30 to-purple-400/10 p-5 sm:p-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">
                <Sparkles size={14} />
                Contact
              </div>

              <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let’s build systems that actually work.
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Open to embedded systems, robotics, IoT, computer vision,
                full-stack development, software engineering, and technical
                collaborations.
              </p>
            </div>

            <div className="grid flex-1 content-start gap-2 p-4 sm:grid-cols-2 sm:p-5">
              <a
                href="mailto:kadenoncomputation@gmail.com"
                className="group inline-flex min-h-11 items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <Mail size={17} className="shrink-0 text-cyan-300" />
                Email Me
              </a>

              <a
                href="tel:2403855252"
                className="group inline-flex min-h-11 items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <Phone size={17} className="shrink-0 text-cyan-300" />
                Call / Text
              </a>

              <a
                href="https://github.com/kaden-code"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <FaGithub size={17} className="shrink-0" />
                GitHub
                <ExternalLink
                  size={13}
                  className="ml-auto shrink-0 text-slate-500 group-hover:text-cyan-300"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/kaden-musard-b609722a0"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300"
              >
                <FaLinkedin size={17} className="shrink-0 text-blue-300" />
                LinkedIn
                <ExternalLink
                  size={13}
                  className="ml-auto shrink-0 text-slate-500 group-hover:text-cyan-300"
                />
              </a>

              <a
                href="/kaden_resume.pdf"
                download
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl border border-cyan-400/40 bg-cyan-400 px-3 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-300 sm:col-span-2"
              >
                <Download size={17} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                  Best Fit
                </p>

                <h2 className="mt-1 text-2xl font-black tracking-tight text-white">
                  Roles and projects I fit best
                </h2>
              </div>
            </div>

            <div className="mt-4 grid flex-1 gap-3 sm:grid-cols-2">
              <div className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-950">
                <div className="relative mb-3">
                  <div className="absolute inset-0 h-10 w-10 rounded-xl bg-cyan-400/30 blur-xl transition group-hover:bg-cyan-400/50" />

                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-slate-950 text-cyan-300 shadow-lg shadow-cyan-950/40">
                    <Cpu size={22} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white">
                  Embedded Systems
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Microcontrollers, ESP32, Arduino, sensors, motors, PWM,
                  real-time loops, and hardware/software debugging.
                </p>
              </div>

              <div className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-slate-950">
                <div className="relative mb-3">
                  <div className="absolute inset-0 h-10 w-10 rounded-xl bg-purple-400/30 blur-xl transition group-hover:bg-purple-400/50" />

                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-purple-400/30 bg-gradient-to-br from-purple-400/20 to-slate-950 text-purple-300 shadow-lg shadow-purple-950/40">
                    <Bot size={22} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white">Robotics</h3>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Autonomous navigation, obstacle avoidance, sensor fusion,
                  control systems, and robotic platforms.
                </p>
              </div>

              <div className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-slate-950">
                <div className="relative mb-3">
                  <div className="absolute inset-0 h-10 w-10 rounded-xl bg-emerald-400/30 blur-xl transition group-hover:bg-emerald-400/50" />

                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/20 to-slate-950 text-emerald-300 shadow-lg shadow-emerald-950/40">
                    <Radio size={22} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white">
                  IoT + Web Interfaces
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  WebSocket dashboards, browser controls, Wi-Fi interfaces, and
                  real-time telemetry.
                </p>
              </div>

              <div className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-slate-950">
                <div className="relative mb-3">
                  <div className="absolute inset-0 h-10 w-10 rounded-xl bg-blue-400/30 blur-xl transition group-hover:bg-blue-400/50" />

                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-gradient-to-br from-blue-400/20 to-slate-950 text-blue-300 shadow-lg shadow-blue-950/40">
                    <Code2 size={22} strokeWidth={1.8} />
                  </div>
                </div>

                <h3 className="text-sm font-bold text-white">
                  Full-Stack Development
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-400">
                  React, TypeScript, Tailwind, dashboards, responsive UIs, and
                  frontend/backend integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4">
            <BriefcaseBusiness className="text-cyan-300" size={23} />

            <h2 className="mt-2 text-lg font-bold text-white">
              Full-time roles
            </h2>

            <p className="mt-1.5 text-xs leading-5 text-slate-400 sm:text-sm">
              Embedded systems, software engineering, robotics, IoT systems, and
              full-stack development.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4">
            <Wrench className="text-purple-300" size={23} />

            <h2 className="mt-2 text-lg font-bold text-white">
              Prototype builds
            </h2>

            <p className="mt-1.5 text-xs leading-5 text-slate-400 sm:text-sm">
              Hardware/software prototypes, sensor systems, web-controlled
              devices, dashboards, and technical demos.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4">
            <Send className="text-emerald-300" size={23} />

            <h2 className="mt-2 text-lg font-bold text-white">
              Collaborations
            </h2>

            <p className="mt-1.5 text-xs leading-5 text-slate-400 sm:text-sm">
              Robotics, computer vision, embedded hardware, full-stack
              interfaces, and IoT systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
