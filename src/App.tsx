import { NavLink, Route, Routes } from "react-router-dom";
import { ContactBar } from "./components/ContactBar";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";

export default function App() {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-1.5 transition ${
      isActive
        ? "bg-cyan-400/10 text-cyan-300"
        : "text-slate-300 hover:text-cyan-300"
    }`;

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <NavLink
            to="/"
            className="text-lg font-black tracking-tight text-white transition hover:text-cyan-300"
          >
            Kaden Musard
          </NavLink>

          <div className="flex items-center gap-2 text-sm font-semibold">
            <NavLink to="/" end className={navLinkClass}>
              Projects
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <ContactBar />
    </main>
  );
}
