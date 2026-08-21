import { useState } from "react";
import {
  Bot,
  BrainCircuit,
  ChevronDown,
  Cpu,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

type ChatMessage = {
  role: "bot" | "user";
  text: string;
};

type Prompt = {
  label: string;
  value: string;
  response: string;
};

const prompts: Prompt[] = [
  {
    label: "Why is Kaden a strong fit?",
    value: "Why is Kaden a strong fit?",
    response:
      "Kaden is a strong fit because the portfolio shows end-to-end engineering ability. The projects are not just isolated tutorials — they combine embedded systems, robotics, real-time control, browser interfaces, computer vision, GitHub documentation, and deployment. That means Kaden can move from hardware wiring and sensor debugging all the way to polished frontend UX and production deployment.",
  },
  {
    label: "Embedded systems experience",
    value: "Tell me about embedded systems experience.",
    response:
      "Kaden’s embedded systems work includes ESP32 and Arduino projects involving PWM control, WebSockets, SoftAP networking, sensor integration, motor control, PID stabilization, LittleFS storage, ArduinoJson parsing, and hardware debugging. Strong examples include the Drone Flight Controller, Scooter LED Modification, ESP32 Web LED controller, Robot Car, and Arduino Robotics Foundation projects.",
  },
  {
    label: "Best project to view first",
    value: "Which project should I view first?",
    response:
      "Start with the Drone Flight Controller + PID Tuning Website. It combines embedded C++, sensor fusion, cascaded PID control, RC signal reading, WebSocket telemetry, persistent tuning, and a browser dashboard. It is the strongest single example of hardware/software integration. After that, view the Scooter LED Modification and the Interactive Engineering Portfolio Website.",
  },
  {
    label: "Robotics projects",
    value: "Tell me about robotics projects.",
    response:
      "The robotics projects show progression from Arduino fundamentals to autonomous behavior and flight-control concepts. The Autonomous Obstacle Avoidance Robot Car demonstrates ultrasonic scanning, IR control, motor calibration, and decision logic. The Drone Flight Controller goes further with IMU sensor fusion, PID stabilization, ESC control, RC inputs, and real-time telemetry.",
  },
  {
    label: "Computer vision work",
    value: "Explain the computer vision work.",
    response:
      "Kaden’s computer vision work includes real-time face recognition, OpenCV experiments, and hand-tracking games. The face recognition project uses live enrollment, 128-dimensional face embeddings, threshold tuning, and distance-based matching. The hand-tracking Pong project uses MediaPipe, OpenCV, collision detection, handedness classification, and real-time video processing.",
  },
  {
    label: "Full-stack experience",
    value: "Summarize full-stack experience.",
    response:
      "Kaden’s full-stack/frontend experience includes React, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router, responsive design, custom dropdowns, category filters, project carousel logic, and Vercel deployment. The portfolio site itself is a strong full-stack/frontend project, and the ESP32 projects also connect browser UIs to embedded backends through WebSockets.",
  },
  {
    label: "IoT experience",
    value: "Tell me about IoT experience.",
    response:
      "Kaden’s IoT experience is strongest in the ESP32 projects. The Scooter LED Modification and ESP32 Web LED controller use standalone Wi-Fi access points, browser-based interfaces, WebSocket communication, JSON command parsing, real-time device control, and embedded web servers. These projects show the ability to connect physical hardware with usable web interfaces.",
  },
  {
    label: "What makes Kaden different?",
    value: "What makes Kaden different?",
    response:
      "What makes Kaden different is the range. The portfolio shows robotics, embedded control, computer vision, frontend UX, deployment, and hardware fabrication. Kaden is not only writing code — Kaden is wiring circuits, debugging sensors, designing user interfaces, deploying websites, documenting projects, and turning ideas into complete working systems.",
  },
];

function getFallbackResponse(input: string) {
  const text = input.toLowerCase();

  if (
    text.includes("embedded") ||
    text.includes("esp32") ||
    text.includes("arduino") ||
    text.includes("sensor")
  ) {
    return prompts[1].response;
  }

  if (
    text.includes("robot") ||
    text.includes("drone") ||
    text.includes("flight") ||
    text.includes("pid")
  ) {
    return prompts[3].response;
  }

  if (
    text.includes("vision") ||
    text.includes("opencv") ||
    text.includes("face") ||
    text.includes("hand")
  ) {
    return prompts[4].response;
  }

  if (
    text.includes("full") ||
    text.includes("react") ||
    text.includes("frontend") ||
    text.includes("website") ||
    text.includes("portfolio")
  ) {
    return prompts[5].response;
  }

  if (
    text.includes("iot") ||
    text.includes("wifi") ||
    text.includes("websocket") ||
    text.includes("led")
  ) {
    return prompts[6].response;
  }

  if (
    text.includes("fit") ||
    text.includes("hire") ||
    text.includes("good") ||
    text.includes("why")
  ) {
    return prompts[0].response;
  }

  return "I can help explain Kaden’s embedded systems, robotics, computer vision, IoT, and full-stack projects. Try asking about the Drone Flight Controller, Scooter LED Modification, computer vision projects, or why Kaden is a strong technical fit.";
}

export function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(true);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Ask me about Kaden’s projects, technical strengths, or why he is a strong fit for embedded systems, robotics, IoT, computer vision, and full-stack roles.",
    },
  ]);

  function askPrompt(prompt: Prompt) {
    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", text: prompt.value },
      { role: "bot", text: prompt.response },
    ]);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput) return;

    const response = getFallbackResponse(trimmedInput);

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", text: trimmedInput },
      { role: "bot", text: response },
    ]);

    setInput("");
  }

  if (!isOpen) {
    return (
      <section className="pb-6 md:pb-10">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group flex w-full items-center justify-between rounded-3xl border border-cyan-400/30 bg-slate-900/70 p-4 text-left shadow-2xl shadow-black/20 backdrop-blur transition hover:border-cyan-400 hover:bg-slate-900"
        >
          <span className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              <MessageCircle size={22} />
            </span>

            <span>
              <span className="block text-sm font-bold uppercase tracking-[0.22em] text-cyan-400">
                Ask About Kaden
              </span>
              <span className="mt-1 block text-sm text-slate-400">
                Open the project assistant
              </span>
            </span>
          </span>

          <ChevronDown
            size={22}
            className="text-cyan-300 transition group-hover:translate-y-0.5"
          />
        </button>
      </section>
    );
  }

  return (
    <section className="pb-6 md:pb-10">
      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="flex items-start justify-between gap-3 border-b border-slate-800 bg-gradient-to-br from-cyan-400/10 via-slate-950/30 to-purple-400/10 p-4 sm:p-5">
          <div className="flex gap-3">
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/30 blur-xl" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-slate-950 text-cyan-300">
                <Bot size={25} />
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                Portfolio Assistant
              </p>

              <h2 className="mt-1 text-2xl font-black tracking-tight text-white">
                Ask about Kaden’s projects
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                A guided assistant that explains the strongest projects,
                technical skills, and role fit.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-xl border border-slate-700 bg-slate-950/70 p-2 text-slate-400 transition hover:border-cyan-400 hover:text-cyan-300"
            aria-label="Collapse chatbot"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid gap-4 p-4 lg:grid-cols-[0.9fr_1.1fr] sm:p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Quick Prompts
            </p>

            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {prompts.map((prompt) => (
                <button
                  key={prompt.label}
                  type="button"
                  onClick={() => askPrompt(prompt)}
                  className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-3 text-left transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-slate-950"
                >
                  <span className="flex items-center gap-2 text-sm font-bold text-white">
                    <Sparkles
                      size={15}
                      className="text-cyan-300 transition group-hover:text-cyan-200"
                    />
                    {prompt.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex min-h-[420px] flex-col rounded-3xl border border-slate-800 bg-slate-950/70">
            <div className="flex-1 space-y-3 overflow-y-auto p-3 sm:p-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[90%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "bg-cyan-400 text-slate-950"
                        : "border border-slate-800 bg-slate-900 text-slate-300"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-slate-800 p-3 sm:p-4"
            >
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about projects, skills, or fit..."
                  className="min-w-0 flex-1 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400"
                />

                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-cyan-400 px-4 py-3 text-slate-950 transition hover:bg-cyan-300"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>

              <p className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <Cpu size={13} />
                Responses based on Kaden’s project portfolio.
                <BrainCircuit size={13} />
               
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}