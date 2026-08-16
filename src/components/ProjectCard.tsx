/* import { useState } from "react";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

function TagList({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <ul className="space-y-2 text-slate-300">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function YouTubePreview({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  const fallbackThumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
  const watchUrl = `https://youtu.be/${youtubeId}`;

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-black shadow-xl shadow-black/30">
      <div className="aspect-video">
        {isPlaying ? (
          <iframe
            className="h-full w-full"
            src={embedUrl}
            title={`${title} demo video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="group relative h-full w-full overflow-hidden bg-slate-900 text-left"
            aria-label={`Play demo video for ${title}`}
          >
            <img
              src={thumbnailUrl}
              onError={(event) => {
                event.currentTarget.src = fallbackThumbnailUrl;
              }}
              alt={`${title} YouTube thumbnail`}
              className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10" />

            <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
              Demo Video
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 shadow-2xl shadow-black/60 transition duration-300 group-hover:scale-110 group-hover:bg-red-500">
                <div className="ml-1 h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-white" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Watch Project Demo
              </p>

              <p className="mt-1 text-2xl font-bold text-white">{title}</p>
            </div>
          </button>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 border-t border-slate-800 bg-slate-950 px-4 py-3">
        <p className="text-sm text-slate-400">
          Click thumbnail to play embedded video.
        </p>

        <a
          href={watchUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-sm font-semibold text-red-300 transition hover:text-red-200"
        >
          Open on YouTube
        </a>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const tech = [
    ...project.languages,
    ...project.frameworks,
    ...project.libraries,
  ];

  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-2xl shadow-black/30">
      <div className="flex flex-col gap-4 border-b border-slate-800 pb-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {project.dateCompleted}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            {project.title}
          </h2>

          {project.lineCount && (
            <p className="mt-2 text-sm text-slate-500">
              Lines of code: {project.lineCount}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.youtubeId && (
            <a
              href={`https://youtu.be/${project.youtubeId}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-red-500/40 px-5 py-2 text-center text-sm font-semibold text-red-300 transition hover:bg-red-500 hover:text-white"
            >
              Open Video
            </a>
          )}

          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-400/40 px-5 py-2 text-center text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              View Code
            </a>
          )}
        </div>
      </div>

      <p className="mt-6 text-lg leading-8 text-slate-300">
        {project.description}
      </p>

      {project.youtubeId && (
        <YouTubePreview youtubeId={project.youtubeId} title={project.title} />
      )}

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
            Tech Used
          </h3>

          <TagList items={tech} />
        </section>

        {project.hardware && project.hardware.length > 0 && (
          <section>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
              Hardware
            </h3>

            <TagList items={project.hardware} />
          </section>
        )}

        <section>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
            Challenges Overcome
          </h3>

          <BulletList items={project.challenges} />
        </section>

        <section>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
            Skills Demonstrated
          </h3>

          <BulletList items={project.skills} />
        </section>
      </div>
    </article>
  );
}
 */
import { useState } from "react";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

function TagList({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs leading-none text-slate-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  return (
    <ul className="grid gap-1.5 text-sm text-slate-300 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 leading-5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function YouTubePreview({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title: string;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  const fallbackThumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
  const watchUrl = `https://youtu.be/${youtubeId}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-black shadow-lg shadow-black/30">
      <div className="aspect-video">
        {isPlaying ? (
          <iframe
            className="h-full w-full"
            src={embedUrl}
            title={`${title} demo video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="group relative h-full w-full overflow-hidden bg-slate-900 text-left"
            aria-label={`Play demo video for ${title}`}
          >
            <img
              src={thumbnailUrl}
              onError={(event) => {
                event.currentTarget.src = fallbackThumbnailUrl;
              }}
              alt={`${title} YouTube thumbnail`}
              className="h-full w-full object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />

            <div className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
              Demo
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-xl shadow-black/60 transition duration-300 group-hover:scale-110 group-hover:bg-red-500">
                <div className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
              </div>
            </div>
          </button>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-slate-800 bg-slate-950 px-3 py-2">
        <p className="text-xs text-slate-500">Click to play demo.</p>

        <a
          href={watchUrl}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 text-xs font-semibold text-red-300 transition hover:text-red-200"
        >
          Open YouTube
        </a>
      </div>
    </div>
  );
}

function InfoSections({ project }: { project: Project }) {
  const tech = [
    ...project.languages,
    ...project.frameworks,
    ...project.libraries,
  ];

  return (
    <>
      <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
        <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          Tech Used
        </h3>

        <TagList items={tech} />
      </section>

      {project.hardware && project.hardware.length > 0 && (
        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Hardware
          </h3>

          <TagList items={project.hardware} />
        </section>
      )}
    </>
  );
}

function MainDetails({ project }: { project: Project }) {
  return (
    <>
      <div className="flex flex-col gap-3 border-b border-slate-800 pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
            {project.dateCompleted}
          </p>

          <h2 className="mt-2 text-2xl font-bold leading-tight text-white md:text-3xl">
            {project.title}
          </h2>

          {project.lineCount && (
            <p className="mt-1 text-xs text-slate-500">
              Lines of code: {project.lineCount}
            </p>
          )}
        </div>

        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="w-fit shrink-0 rounded-full border border-cyan-400/40 px-3 py-1.5 text-xs font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            View Code
          </a>
        )}
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-300">
        {project.description}
      </p>

      <div className="mt-5 grid gap-4">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Challenges Overcome
          </h3>

          <BulletList items={project.challenges} />
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/40 p-3">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
            Skills Demonstrated
          </h3>

          <TagList items={project.skills} />
        </section>
      </div>
    </>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  if (!project.youtubeId) {
    return (
      <article className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-xl shadow-black/30 md:p-5">
        <div className="grid gap-4">
          <MainDetails project={project} />

          <div className="grid gap-4 lg:grid-cols-2">
            <InfoSections project={project} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-xl shadow-black/30 md:p-5">
      <div className="grid gap-5 xl:grid-cols-[390px_1fr] xl:items-start">
        <aside className="grid gap-4">
          <YouTubePreview youtubeId={project.youtubeId} title={project.title} />

          <InfoSections project={project} />
        </aside>

        <div className="min-w-0">
          <MainDetails project={project} />
        </div>
      </div>
    </article>
  );
}
