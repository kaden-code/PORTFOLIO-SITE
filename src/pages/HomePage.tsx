import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, ChevronDown, Code2, Cpu } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import { PortfolioChatbot } from "../components/PortfolioChatbot";
import { projects } from "../data/projects";

type ProjectCategory =
  | "All"
  | "Embedded"
  | "Robotics"
  | "Computer Vision"
  | "Full-Stack"
  | "IoT";

const categories: ProjectCategory[] = [
  "All",
  "Embedded",
  "Robotics",
  "Computer Vision",
  "Full-Stack",
  "IoT",
];

const projectCategories: Record<string, ProjectCategory[]> = {
  "portfolio-site": ["Full-Stack"],
  "esp32-flight-controller": ["Embedded", "Robotics", "IoT", "Full-Stack"],
  "scooter-led-modification": ["Embedded", "IoT", "Full-Stack"],
  "hand-tracking-pong": ["Computer Vision"],
  "file-system-face-recognition": ["Computer Vision"],
  "opencv-computer-vision": ["Computer Vision"],
  "esp32-web-led": ["Embedded", "IoT", "Full-Stack"],
  "echo-location-robot-car": ["Embedded", "Robotics"],
  "arduino-learning": ["Embedded", "Robotics"],
  "3d-mind-gui": ["Full-Stack"],
  "todo-app-js": ["Full-Stack"],
  "youtube-clone-css": ["Full-Stack"],
  "shoe-store-html": ["Full-Stack"],
  "3d-mind-terminal": [],
  "self-improvement-questionnaire": [],
};

function projectMatchesCategory(
  project: (typeof projects)[number],
  category: ProjectCategory,
) {
  if (category === "All") return true;

  return projectCategories[project.id]?.includes(category) ?? false;
}

export function HomePage() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      projectMatchesCategory(project, selectedCategory),
    );
  }, [selectedCategory]);

  const currentProject = filteredProjects[currentProjectIndex];

  function selectCategory(category: ProjectCategory) {
    setSelectedCategory(category);
    setCurrentProjectIndex(0);
    setDirection(0);
    setIsProjectMenuOpen(false);
  }

  function goToPreviousProject() {
    setIsProjectMenuOpen(false);
    setDirection(-1);

    setCurrentProjectIndex((currentIndex) => {
      if (currentIndex === 0) {
        return filteredProjects.length - 1;
      }

      return currentIndex - 1;
    });
  }

  function goToNextProject() {
    setIsProjectMenuOpen(false);
    setDirection(1);

    setCurrentProjectIndex((currentIndex) => {
      if (currentIndex === filteredProjects.length - 1) {
        return 0;
      }

      return currentIndex + 1;
    });
  }

  function goToRandomProject() {
    if (filteredProjects.length <= 1) return;

    setIsProjectMenuOpen(false);

    let randomIndex = Math.floor(Math.random() * filteredProjects.length);

    while (randomIndex === currentProjectIndex) {
      randomIndex = Math.floor(Math.random() * filteredProjects.length);
    }

    setDirection(randomIndex > currentProjectIndex ? 1 : -1);
    setCurrentProjectIndex(randomIndex);
  }

  function jumpToProject(index: number) {
    if (index === currentProjectIndex) {
      setIsProjectMenuOpen(false);
      return;
    }

    setDirection(index > currentProjectIndex ? 1 : -1);
    setCurrentProjectIndex(index);
    setIsProjectMenuOpen(false);
  }

  const projectAnimation = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 16 : -16,
      scale: 0.99,
      filter: "blur(3px)",
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -16 : 16,
      scale: 0.99,
      filter: "blur(3px)",
    }),
  };

  if (!currentProject) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12 text-white sm:px-5">
        <p className="text-cyan-300">No projects found for this category.</p>
      </div>
    );
  }

  return (
    <div
      className="relative w-full max-w-full overflow-x-clip"
      onClick={() => setIsProjectMenuOpen(false)}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl sm:h-[360px] sm:w-[520px] md:h-[420px] md:w-[720px]" />

      <div className="pointer-events-none absolute right-0 top-[520px] h-56 w-56 translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-5">
        <motion.section
          className="pt-8 pb-6 md:pt-16 md:pb-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm sm:tracking-[0.35em]">
            Project Portfolio
          </p>

          <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Robotics, embedded systems, computer vision, and full-stack
            engineering.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base md:mt-6 md:text-lg md:leading-8">
            A focused showcase of hardware/software projects. Each build
            includes a demo, source code, technical stack, challenges overcome,
            and skills demonstrated.
          </p>

          <div className="mt-6 grid gap-2 sm:flex sm:flex-wrap sm:gap-3 md:mt-8">
            <a
              href="#project-viewer"
              className="rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
            </a>

            <a
              href="/kaden_resume.pdf"
              download
              className="rounded-full border border-slate-700 bg-slate-950/60 px-5 py-3 text-center text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Download Resume
            </a>

            <a
              href="/contact"
              className="rounded-full border border-slate-700 bg-slate-950/60 px-5 py-3 text-center text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Contact
            </a>
          </div>
        </motion.section>

        <motion.section
          className="pb-6 md:pb-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
        >
          <div className="grid gap-3 md:grid-cols-3 md:gap-4">
            <div className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-900/80 md:p-5">
              <div className="mb-3 flex items-center gap-3 md:mb-4 md:gap-4">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-cyan-400/30 blur-xl transition group-hover:bg-cyan-400/50" />

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 to-slate-950 text-cyan-300 shadow-lg shadow-cyan-950/40 md:h-14 md:w-14">
                    <Cpu size={24} strokeWidth={1.8} />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 sm:text-sm">
                    Embedded
                  </p>

                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Hardware + real-time systems
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-bold leading-tight text-white md:text-xl">
                ESP32, Arduino, sensors, motors, and real-time control.
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400 md:mt-3">
                Wi-Fi controlled hardware, robotics platforms, PWM control,
                WebSockets, PID tuning, and embedded dashboards.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-purple-400/50 hover:bg-slate-900/80 md:p-5">
              <div className="mb-3 flex items-center gap-3 md:mb-4 md:gap-4">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-purple-400/30 blur-xl transition group-hover:bg-purple-400/50" />

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-purple-400/30 bg-gradient-to-br from-purple-400/20 to-slate-950 text-purple-300 shadow-lg shadow-purple-950/40 md:h-14 md:w-14">
                    <BrainCircuit size={24} strokeWidth={1.8} />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400 sm:text-sm">
                    Computer Vision
                  </p>

                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Cameras + perception
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-bold leading-tight text-white md:text-xl">
                OpenCV, MediaPipe, facial recognition, and gesture control.
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400 md:mt-3">
                Real-time video projects with hand tracking, face embeddings,
                object detection, image processing, and interactive games.
              </p>
            </div>

            <div className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:bg-slate-900/80 md:p-5">
              <div className="mb-3 flex items-center gap-3 md:mb-4 md:gap-4">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 rounded-2xl bg-emerald-400/30 blur-xl transition group-hover:bg-emerald-400/50" />

                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/20 to-slate-950 text-emerald-300 shadow-lg shadow-emerald-950/40 md:h-14 md:w-14">
                    <Code2 size={24} strokeWidth={1.8} />
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 sm:text-sm">
                    Full-Stack
                  </p>

                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Interfaces + dashboards
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-bold leading-tight text-white md:text-xl">
                React, TypeScript, Tailwind, JavaScript, and IoT web interfaces.
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400 md:mt-3">
                Browser-based controls, responsive UIs, WebSocket communication,
                project dashboards, and component-driven frontend architecture.
              </p>
            </div>
          </div>
        </motion.section>
        
        <section id="project-viewer" className="pb-10 md:pb-16">
          <motion.div
            className="relative z-30 mb-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-3 shadow-2xl shadow-black/20 backdrop-blur sm:p-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                  Filter Projects
                </p>

                <div className="mt-3 flex max-w-full gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
                  {categories.map((category) => {
                    const isActive = selectedCategory === category;
                    const count = projects.filter((project) =>
                      projectMatchesCategory(project, category),
                    ).length;

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => selectCategory(category)}
                        className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition active:scale-95 ${
                          isActive
                            ? "border-cyan-400 bg-cyan-400 text-slate-950"
                            : "border-slate-700 bg-slate-950/60 text-slate-300 hover:border-cyan-400 hover:text-cyan-300"
                        }`}
                      >
                        {category}
                        <span
                          className={`ml-2 ${
                            isActive ? "text-slate-700" : "text-slate-500"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm sm:tracking-[0.25em]">
                      Project {currentProjectIndex + 1} of{" "}
                      {filteredProjects.length}
                    </p>

                    <div
                      className="relative z-[999] mt-2 max-w-full sm:max-w-3xl"
                      onClick={(event) => event.stopPropagation()}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setIsProjectMenuOpen((isOpen) => !isOpen)
                        }
                        className="flex w-full min-w-0 items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-3 text-left text-white shadow-lg shadow-black/20 outline-none transition hover:border-cyan-400/60 focus:border-cyan-400 sm:px-4"
                        aria-haspopup="listbox"
                        aria-expanded={isProjectMenuOpen}
                      >
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-lg font-black leading-tight sm:text-xl md:text-3xl">
                            {currentProject.title}
                          </span>

                          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-xs sm:tracking-[0.18em]">
                            Tap to jump projects
                          </span>
                        </span>

                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 transition ${
                            isProjectMenuOpen ? "rotate-180" : ""
                          }`}
                        >
                          <ChevronDown size={20} />
                        </span>
                      </button>

                      <AnimatePresence>
                        {isProjectMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{ duration: 0.16, ease: "easeOut" }}
                            className="absolute left-0 right-0 top-full z-[999] mt-2 max-h-[60vh] max-w-full overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-2xl shadow-black/50"
                            role="listbox"
                          >
                            {filteredProjects.map((project, index) => {
                              const isSelected = index === currentProjectIndex;

                              return (
                                <button
                                  key={project.id}
                                  type="button"
                                  onClick={() => jumpToProject(index)}
                                  className={`flex w-full min-w-0 items-start gap-3 rounded-xl px-3 py-3 text-left transition ${
                                    isSelected
                                      ? "bg-cyan-400 text-slate-950"
                                      : "text-slate-300 hover:bg-slate-900 hover:text-cyan-300"
                                  }`}
                                  role="option"
                                  aria-selected={isSelected}
                                >
                                  <span
                                    className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                                      isSelected
                                        ? "bg-slate-950 text-cyan-300"
                                        : "bg-slate-900 text-slate-500"
                                    }`}
                                  >
                                    {index + 1}
                                  </span>

                                  <span className="min-w-0 flex-1">
                                    <span className="block truncate text-sm font-bold leading-tight sm:text-base">
                                      {project.title}
                                    </span>

                                    <span
                                      className={`mt-1 block text-xs ${
                                        isSelected
                                          ? "text-slate-700"
                                          : "text-slate-500"
                                      }`}
                                    >
                                      {project.dateCompleted}
                                    </span>
                                  </span>
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                      Filter by category or open the project menu to jump
                      directly to another build.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                    <button
                      type="button"
                      onClick={goToPreviousProject}
                      disabled={filteredProjects.length <= 1}
                      className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-2 text-xs font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 sm:px-5 sm:text-sm"
                    >
                      ← Prev
                    </button>

                    <button
                      type="button"
                      onClick={goToRandomProject}
                      disabled={filteredProjects.length <= 1}
                      className="rounded-full border border-purple-400/40 bg-slate-950/50 px-3 py-2 text-xs font-bold text-purple-300 transition hover:bg-purple-400 hover:text-slate-950 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 sm:px-5 sm:text-sm"
                    >
                      Shuffle
                    </button>

                    <button
                      type="button"
                      onClick={goToNextProject}
                      disabled={filteredProjects.length <= 1}
                      className="rounded-full bg-cyan-400 px-3 py-2 text-xs font-bold text-slate-950 transition hover:bg-cyan-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 sm:px-5 sm:text-sm"
                    >
                      Next →
                    </button>
                  </div>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800 sm:mt-5">
                  <motion.div
                    className="h-full rounded-full bg-cyan-400"
                    initial={false}
                    animate={{
                      width: `${
                        ((currentProjectIndex + 1) / filteredProjects.length) *
                        100
                      }%`,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="relative z-0 mt-4 max-w-full overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentProject.id}
                custom={direction}
                variants={projectAnimation}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.28,
                  ease: "easeInOut",
                }}
              >
                <ProjectCard project={currentProject} />
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
        <PortfolioChatbot />
      </div>
    </div>
  );
}
