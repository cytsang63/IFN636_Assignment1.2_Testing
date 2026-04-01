import { Link } from 'react-router-dom';
import MonolithNav from '../components/MonolithNav';

const SKILLS = [
  { name: 'Python', icon: 'code', level: 'Advanced', focus: 'Data analysis, automation, APIs' },
  { name: 'JavaScript', icon: 'terminal', level: 'Advanced', focus: 'UI architecture, async patterns' },
  { name: 'React', icon: 'animation', level: 'Advanced', focus: 'Component systems, routing, state' },
  { name: 'Node.js', icon: 'hub', level: 'Intermediate', focus: 'REST services, auth, tooling' },
  { name: 'TypeScript', icon: 'verified', level: 'Intermediate', focus: 'Types, refactors, DX' },
  { name: 'Figma', icon: 'draw', level: 'Intermediate', focus: 'Prototyping, UI systems' },
];

const MySkill = () => {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface antialiased selection:bg-black selection:text-white">
      <MonolithNav />

      <main className="pt-32 pb-24 px-8 md:px-12 max-w-[1920px] mx-auto">
        <header className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-3xl">
            <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-neutral-400 mb-4">Capabilities / Profile</p>
            <h1 className="text-6xl sm:text-7xl font-black tracking-tighter leading-none text-black font-headline">My skill</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/developer-profile"
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold flex items-center gap-3 hover:opacity-90 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined text-sm">edit</span>
              Edit in Profile
            </Link>
            <button type="button" className="p-4 bg-surface-container-low text-primary rounded-xl hover:bg-surface-container-high transition-colors active:scale-95">
              <span className="material-symbols-outlined">tune</span>
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SKILLS.map((s) => (
            <article key={s.name} className="bg-surface-container-lowest rounded-2xl p-10 shadow-ambient">
              <div className="flex items-start justify-between gap-6 mb-8">
                <div>
                  <p className="font-label text-[10px] font-bold tracking-[0.25em] uppercase text-neutral-400 mb-2">Core skill</p>
                  <h2 className="font-headline text-3xl font-black tracking-tight text-black">{s.name}</h2>
                </div>
                <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center">
                  <span className="material-symbols-outlined text-black">{s.icon}</span>
                </div>
              </div>

              <p className="text-on-surface-variant leading-relaxed mb-8">{s.focus}</p>

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">
                  {s.level}
                </span>
                <Link className="font-headline font-bold text-xs tracking-widest uppercase border-b-2 border-black pb-1 hover:opacity-60 transition-opacity" to="/portfolio/explore">
                  See work
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-24 bg-surface-container-low rounded-2xl p-10 md:p-14">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            <div className="max-w-2xl">
              <h3 className="font-headline text-4xl font-black tracking-tighter mb-4">Curated stack</h3>
              <p className="text-on-surface-variant leading-relaxed">
                This is a read-only showcase of your capabilities. Update your skills from the developer profile page, and your portfolio work will remain the proof.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['MERN', 'REST', 'JWT', 'MongoDB', 'Tailwind', 'CI/CD'].map((chip) => (
                <span
                  key={chip}
                  className="px-5 py-3 rounded-full bg-surface-container-high text-on-surface-variant text-[10px] font-bold uppercase tracking-[0.2em]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-50 w-full py-16 px-8 md:px-12 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full max-w-[1920px] mx-auto">
          <div className="flex flex-col gap-6">
            <div className="font-headline font-black text-lg text-black">MONOLITH</div>
            <p className="font-body text-xs font-medium tracking-widest uppercase text-neutral-400">© 2024 MONOLITH. THE CURATED MONOLITH.</p>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col gap-4">
              <h5 className="font-body text-xs font-bold tracking-widest uppercase text-black mb-2">Platform</h5>
              <Link className="font-body text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-black transition-colors" to="#">
                Journal
              </Link>
              <Link className="font-body text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-black transition-colors" to="#">
                Archive
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="font-body text-xs font-bold tracking-widest uppercase text-black mb-2">Legal</h5>
              <Link className="font-body text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-black transition-colors" to="#">
                Privacy
              </Link>
              <Link className="font-body text-xs font-medium tracking-widest uppercase text-neutral-400 hover:text-black transition-colors" to="#">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MySkill;

