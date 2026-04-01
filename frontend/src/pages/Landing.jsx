import { Link } from 'react-router-dom';
import MonolithNav from '../components/MonolithNav';

const Landing = () => {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      <MonolithNav />

      <main className="pt-32 min-h-screen">
        <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-none">
              CURATING <br />
              THE FUTURE.
            </h1>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
              Explore a monolith of digital excellence. From pandemic data visualizations to complex cargo logistics, we
              synthesize raw information into architectural clarity.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                to="/portfolio/explore"
                className="bg-primary text-on-primary px-10 py-5 rounded-lg font-headline font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all flex items-center justify-center gap-3"
              >
                Explore Work <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link
                to="/developer-profile"
                className="bg-surface-container-highest text-primary px-10 py-5 rounded-lg font-headline font-bold text-sm tracking-widest uppercase hover:bg-surface-container-high transition-all text-center"
              >
                View CV
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-label text-xs tracking-[0.3em] uppercase text-outline block mb-4">CATEGORIES</span>
            <h2 className="font-headline text-4xl font-black tracking-tight uppercase">Browse by Topic</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low min-h-[500px] shadow-ambient border border-transparent hover:border-outline-variant transition-all cursor-pointer">
              <img
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-700"
                alt="COVID-19 topic"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpQM8c41bICxkuDAqs6GKYZmpYJBKgMLnLZG7jNifDmj89L4nsiE0AgH6bbi5SWL9-UXxljFOVGVjnsb3NMuWIMGkhigky6PcieOWks5-d2U12xAB_eSO6_klxBBJ9ahF3ahZ45OajmqykVLcMOMxoFW5gdN3wzwQaXEGboGS3fIaxS3tUXl9u9E7XBis_ht1x2b6f5S_Qz0UPaO3aVhbxuBaTzPnezmf3RoMVXNIfQRBv3hYLfqDPDr2T1v4vBN65tQphXO17UA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-10">
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-white font-label text-[10px] tracking-widest uppercase mb-4">
                  Impact Analysis
                </span>
                <h3 className="font-headline text-5xl font-extrabold text-white tracking-tighter uppercase mb-4">COVID-19</h3>
                <p className="text-white/70 font-body max-w-md">
                  Comprehensive data visualization of global pandemic trends and recovery architectures.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low min-h-[500px] shadow-ambient border border-transparent hover:border-outline-variant transition-all cursor-pointer">
              <img
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-700"
                alt="Australian Cargo topic"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRCwhIafZVFH7x2TDfmAGxcAMvNx_Zd9WTrrDRLpbqbTNm_2Zmd0OgtDzhAhronHgQmYgXjTKj4035Vs45RrpMjsd36mdSj7LTCSsUkXX7GTGXnQy-nOgD0FLj3pb5G_o2Bygk6OD3kkVYtmkPPrlBdsTv4CNWmpCUQTqYP7PPsnHTlbZOE2kN8SJfm0GC9Zg-pDFZ4-I_8viClXofc9OzIiHx03StQFhMvPozgWeZ1cr91awTsTHaZrrBIXS8r5svpqJF8OWOGA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-10">
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-white font-label text-[10px] tracking-widest uppercase mb-4">
                  Logistics
                </span>
                <h3 className="font-headline text-3xl font-extrabold text-white tracking-tighter uppercase mb-4">
                  Australian Cargo
                </h3>
                <p className="text-white/70 font-body text-sm">
                  Supply chain mapping and optimization for southern hemisphere trade routes.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 p-8 rounded-xl bg-surface-container-lowest shadow-ambient border border-outline-variant/15 group hover:bg-primary transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-white/20">
                <span className="material-symbols-outlined group-hover:text-white">public</span>
              </div>
              <h4 className="font-headline font-bold text-xl uppercase tracking-tight group-hover:text-white mb-2">
                Climate Dynamics
              </h4>
              <p className="text-on-surface-variant group-hover:text-white/70 text-sm">
                Environmental impact tracking and sustainability modeling.
              </p>
            </div>

            <div className="md:col-span-4 p-8 rounded-xl bg-surface-container-lowest shadow-ambient border border-outline-variant/15 group hover:bg-primary transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-white/20">
                <span className="material-symbols-outlined group-hover:text-white">account_balance</span>
              </div>
              <h4 className="font-headline font-bold text-xl uppercase tracking-tight group-hover:text-white mb-2">
                Urban Planning
              </h4>
              <p className="text-on-surface-variant group-hover:text-white/70 text-sm">
                Metropolitan growth patterns and architectural evolution.
              </p>
            </div>

            <div className="md:col-span-4 p-8 rounded-xl bg-surface-container-lowest shadow-ambient border border-outline-variant/15 group hover:bg-primary transition-colors cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-white/20">
                <span className="material-symbols-outlined group-hover:text-white">monitoring</span>
              </div>
              <h4 className="font-headline font-bold text-xl uppercase tracking-tight group-hover:text-white mb-2">Market Flows</h4>
              <p className="text-on-surface-variant group-hover:text-white/70 text-sm">
                Real-time financial topography and economic signals.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-20 bg-surface-container-low mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
              <div>
                <span className="font-label text-xs tracking-[0.3em] uppercase text-outline block mb-4">CAPABILITIES</span>
                <h2 className="font-headline text-4xl font-black tracking-tight uppercase">Browse by Skill</h2>
              </div>
              <Link
                className="font-headline font-bold text-xs tracking-widest uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity"
                to="#"
              >
                View all tech stack
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { label: 'Python', icon: 'code' },
                { label: 'JavaScript', icon: 'terminal' },
                { label: 'React', icon: 'animation' },
                { label: 'TypeScript', icon: 'verified' },
                { label: 'Figma', icon: 'draw' },
                { label: 'GraphQL', icon: 'hub' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-surface p-10 rounded-xl flex flex-col items-center justify-center group hover:bg-white transition-all shadow-ambient cursor-pointer"
                >
                  <div className="mb-6 relative">
                    <span className="material-symbols-outlined text-4xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                  </div>
                  <span className="font-headline font-bold text-sm tracking-widest uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 md:px-12 py-32 max-w-7xl mx-auto">
          <div className="bg-primary p-12 md:p-24 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
              <img
                className="w-full h-full object-cover opacity-20"
                alt="Abstract architecture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALURUYNklkjLmEo2V_V4bwgrBisAEi7fKuF6M6rxQMC0DOiupn7JB_5A2DFZKeqyVVKvF6r4sMqiK7jQK547f89eHrpj_qlgxsk-fgkfARE-gRIrOwShWeNkigXcJQw_uPA7Ishk7EMwiIt9VZaWmsIcCINnch30GpHGi9l4NrL5_dt8Ssv7UetMJXcAE40U4VdxNc7Fi7MY13ONBZZgbjp_eH_HUqi1aV5e2Ktndigckg16s2mCYQK74eJLAZo99WssT90b4QEA"
              />
            </div>
            <div className="relative z-10 max-w-xl">
              <h2 className="font-headline text-white text-5xl font-black tracking-tighter uppercase mb-6 leading-none">
                Join the archive.
              </h2>
              <p className="text-white/60 font-body mb-10 leading-relaxed">
                Stay updated with our latest case studies, architectural deep-dives, and technical explorations. No noise, just
                curation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  className="flex-1 bg-white/10 border-none rounded-lg px-6 py-4 text-white placeholder:text-white/30 focus:ring-2 focus:ring-white/20 font-label text-xs tracking-widest uppercase"
                  placeholder="EMAIL ADDRESS"
                  type="email"
                />
                <button
                  type="button"
                  className="bg-white text-primary px-8 py-4 rounded-lg font-headline font-black text-xs tracking-[0.2em] uppercase hover:bg-on-primary transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full mt-20 bg-[#f3f3f3] transition-colors">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-16 w-full max-w-7xl mx-auto">
          <div className="mb-8 md:mb-0">
            <div className="text-lg font-bold text-black uppercase font-headline tracking-tighter mb-4">MONOLITH ARCHITECTURE</div>
            <p className="font-body text-[10px] tracking-widest uppercase text-zinc-500">
              © 2024 THE CURATED MONOLITH. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="flex space-x-8">
            {['Journal', 'Contact', 'Terms', 'Privacy'].map((label) => (
              <Link
                key={label}
                className="font-body text-[10px] tracking-widest uppercase text-zinc-500 hover:text-black transition-colors"
                to="#"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="mt-8 md:mt-0 flex gap-4">
            <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-zinc-500 hover:border-primary hover:text-primary transition-all cursor-pointer">
              <span className="material-symbols-outlined text-lg">share</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-zinc-500 hover:border-primary hover:text-primary transition-all cursor-pointer">
              <span className="material-symbols-outlined text-lg">rss_feed</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

