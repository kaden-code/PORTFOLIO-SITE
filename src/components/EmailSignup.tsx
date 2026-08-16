export function EmailSignup() {
  return (
    <section className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 shadow-2xl shadow-cyan-950/30">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Business Interest
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Interested in a build, prototype, or technical collaboration?
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Reach out for embedded systems, robotics, IoT dashboards, computer
            vision demos, hardware/software prototypes, or full-stack
            engineering work.
          </p>
        </div>

        <form className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-slate-300"
          >
            Email address
          </label>

          <input
            id="email"
            type="email"
            placeholder="business@email.com"
            className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
          />

          <button
            type="button"
            className="mt-4 w-full rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            Join Interest List
          </button>

          <p className="mt-3 text-xs leading-5 text-slate-500">
            For now, this is just the visual form. We’ll connect it to a real
            backend/email list later.
          </p>
        </form>
      </div>
    </section>
  );
}
