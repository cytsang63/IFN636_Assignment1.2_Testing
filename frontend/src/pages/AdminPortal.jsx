import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import StitchHeader from '../components/StitchHeader';

const SidebarItem = ({ icon, label, active }) => {
  const base =
    'flex items-center gap-3 px-4 py-3 font-bold transition-all rounded-none';
  const activeCls = 'bg-white border-r-4 border-black text-black';
  const idleCls = 'text-zinc-500 hover:text-black hover:bg-[#f3f3f3] hover:translate-x-1 duration-200';

  return (
    <a
      href="#"
      className={`${base} ${active ? activeCls : idleCls}`}
      onClick={(e) => e.preventDefault()}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <span className="font-[Inter] font-medium text-sm tracking-wide uppercase">{label}</span>
    </a>
  );
};

const AdminPortal = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <div className="bg-surface min-h-screen text-on-surface font-body">
      <StitchHeader activeNav="admin" authHighlight="none" />

      {/* SideNavBar — fixed below global nav (approx. StitchHeader height) */}
      <aside className="fixed left-0 top-[118px] z-40 flex h-[calc(100vh-118px)] w-64 flex-col overflow-y-auto border-r border-[#e2e2e2] bg-background py-8">
        <div className="px-8 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>
                monorail
              </span>
            </div>
            <div>
              <h1 className="font-Manrope font-black text-2xl text-black leading-none">Admin</h1>
              <p className="font-Inter font-medium text-[10px] tracking-widest uppercase text-zinc-500">Management</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          <SidebarItem icon="dashboard" label="Dashboard" active />
          <SidebarItem icon="monitoring" label="Analytics" />
          <SidebarItem icon="inventory_2" label="Inventory" />
          <SidebarItem icon="group" label="Users" />
          <SidebarItem icon="description" label="Reports" />
        </nav>

        <div className="px-4 pt-8 border-t border-[#e2e2e2] space-y-2">
          <button
            type="button"
            className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold text-sm tracking-wide uppercase mb-6 flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-sm">add</span>
            New Report
          </button>

          <div className="space-y-1">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-zinc-500 hover:text-black transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="font-[Inter] font-medium text-sm tracking-wide uppercase">Settings</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-zinc-500 hover:text-black transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleLogout();
              }}
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="font-[Inter] font-medium text-sm tracking-wide uppercase">Logout</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 min-h-screen">
        {/* TopAppBar */}
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between bg-white/80 px-12 shadow-ambient backdrop-blur-xl">
          <div className="flex items-center gap-8">
            <h2 className="font-Manrope font-black tracking-tighter text-xl text-black">Admin Portal</h2>

            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
                search
              </span>
              <input
                className="w-64 rounded-lg border-none bg-surface-container-low py-1.5 pl-10 pr-4 text-sm transition-all focus:bg-white focus:ring-2 focus:ring-black"
                placeholder="Search data..."
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg border border-[#e2e2e2] px-4 py-2 font-[Inter] text-sm font-semibold text-black transition-colors hover:bg-zinc-50"
            >
              Logout
            </button>
            <button type="button" className="text-zinc-500 transition-colors hover:text-black active:scale-95">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button type="button" className="text-zinc-500 transition-colors hover:text-black active:scale-95">
              <span className="material-symbols-outlined">settings</span>
            </button>

            <div className="flex items-center gap-3 border-l border-[#e2e2e2] pl-6">
              <div className="text-right">
                <p className="text-xs font-bold leading-none">Admin User</p>
                <p className="text-[10px] text-zinc-500">Super Admin</p>
              </div>
              <img
                className="h-8 w-8 rounded-full object-cover"
                alt="Admin user avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBKXrTlbyvudOTnV0xuWZGRkiFhb2LihFdHDiTj07BBeETpkuoCtVylTIQ-DTLZHP7FTbitQ3hUy9xHTsITrzj4diSNIeRbVCKyQvg8zojyePpdywMppR2IT3etx_UjMX3w1b5VpV3G4xQlNnvpmRB_CxpRCK1xdFH9y30wUdzzvCsdL3CRhBaLUX-1oGSk6vvr-2wEiAJvu8CZUQGM0In0vPjT5EXOjh-7iM4qEnwf7d0pL_j_gBRfkH9gCgcFcwpbJqTmwyaug"
              />
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-7xl space-y-12 p-12">
          {/* Hero / Stats */}
          <section className="grid grid-cols-12 gap-8">
            <div className="col-span-12">
              <h3 className="font-[Manrope] font-extrabold text-4xl tracking-tight mb-2 text-black">
                Performance Overview
              </h3>
              <p className="text-zinc-500 font-medium">Real-time data visualization and contributor insights.</p>
            </div>

            {/* Metric Card 1 */}
            <div className="col-span-12 md:col-span-6 bg-white p-8 rounded-xl shadow-ambient relative overflow-hidden group">
              <div className="relative z-10">
                <p className="font-Inter font-medium text-sm tracking-widest uppercase text-zinc-500 mb-4">
                  Total Projects
                </p>
                <div className="flex items-end gap-4">
                  <span className="font-Manrope font-black text-6xl tracking-tighter">14,486</span>
                  <div className="mb-2 flex items-center text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs font-bold">
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    +10%
                  </div>
                </div>
                <p className="mt-4 text-xs text-zinc-400">vs. last month (Oct 2025)</p>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[160px]">stack</span>
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="col-span-12 md:col-span-6 bg-white p-8 rounded-xl shadow-ambient relative overflow-hidden group">
              <div className="relative z-10">
                <p className="font-Inter font-medium text-sm tracking-widest uppercase text-zinc-500 mb-4">
                  Total Users
                </p>
                <div className="flex items-end gap-4">
                  <span className="font-Manrope font-black text-6xl tracking-tighter">1,205</span>
                  <div className="mb-2 flex items-center text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-xs font-bold">
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    +5%
                  </div>
                </div>
                <p className="mt-4 text-xs text-zinc-400">Growth trajectory stable</p>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[160px]">group</span>
              </div>
            </div>

            {/* Line Chart */}
            <div className="col-span-12 lg:col-span-8 bg-white p-10 rounded-xl shadow-ambient">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h4 className="font-Manrope font-bold text-lg tracking-tight text-black">
                    Project Growth
                  </h4>
                  <p className="text-xs text-zinc-400">Oct 2025 - Mar 2026</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="bg-surface-container-low px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-surface-container-high transition-colors"
                  >
                    Export PDF
                  </button>
                  <button
                    type="button"
                    className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                  >
                    Settings
                  </button>
                </div>
              </div>

              <div className="relative h-64 w-full">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200">
                  {/* Grid Lines */}
                  {[0, 50, 100, 150].map((y) => (
                    <line key={y} stroke="#f3f3f3" strokeWidth="1" x1="0" x2="800" y1={y} y2={y} />
                  ))}

                  {/* Area Gradient */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="black" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="black" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Area */}
                  <path
                    d="M0,180 L160,150 L320,165 L480,100 L640,110 L800,40 L800,200 L0,200 Z"
                    fill="url(#chartGradient)"
                  />

                  {/* Main Line */}
                  <path
                    d="M0,180 L160,150 L320,165 L480,100 L640,110 L800,40"
                    fill="none"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  />

                  {/* Data Points */}
                  {[
                    { cx: 160, cy: 150 },
                    { cx: 480, cy: 100 },
                    { cx: 800, cy: 40 },
                  ].map((p) => (
                    <circle
                      key={`${p.cx}-${p.cy}`}
                      cx={p.cx}
                      cy={p.cy}
                      fill="white"
                      r="4"
                      stroke="black"
                      strokeWidth="2"
                    />
                  ))}
                </svg>

                <div className="flex justify-between mt-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest px-1">
                  {['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'].map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Top Contributors */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-ambient h-full">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-Manrope font-bold text-lg tracking-tight text-black">Top Contributors</h4>
                  <span className="material-symbols-outlined text-zinc-400">more_vert</span>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      name: 'Fernando Alonso',
                      email: 'fernando.a@admin.com',
                      commits: '482',
                      avatar:
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuCWTOq1L7-riYTHnwbyGNKxJXbiP-QjzGcZOMYTpLnpJvmD91vTy0CISCNErwX987mqEIjczLonpHe8TRqLLxVhOhod2UlqyxiONYwBlAn_9mIsF0uwyJ0bEl-EGXjNfiGh2Za1wgZH8KVs1LChBxCa99hZ_dOWCTSF9g8gzK2JGMrFuKqBaN-GKeOqwG55awayEOWWcmljlA9lmoI-LrnXaj_zaSJ921ASMREQ36HMhBpKXWjuRS8nSd7VEIub2Yk7ACSNJnns8w',
                    },
                    {
                      name: 'Mesut Ozil',
                      email: 'mesut.ozil@admin.com',
                      commits: '395',
                      avatar:
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuCr0m_zA3ao-D__RLFRH4WXgmLpnl9aB-qBj_xGC4yt_g8BBhqtH2wP8Td_0JdUgPgxc-OqQrDitN8D92rinC_Qo3TRwpxaOczQMaZ9Ac_gxX4xm_ZL2_mu6_3DAL8gz_tnwxznedY1-XhRNuT4c_EnYlm_iLSo3YV0oINUD9iSNehCHDLV34kQfb-S7blzFXsVPq1s2pNKP88IMzbZpH1BpOXe1NIQfYdLa1Vm9aagVXM1-B6VLpRzRUIT7TgFq6raTWAoqWAKag',
                    },
                    {
                      name: 'Lewis Hamilton',
                      email: 'lewis.h@admin.com',
                      commits: '312',
                      avatar:
                        'https://lh3.googleusercontent.com/aida-public/AB6AXuBfRY1Q-JLPV5FJB2qQsIt9fVTi_50MZOxyVlYAbb28hy0Bm-tsnlj8gQ49UXAHRpfqQjrSQ0p-9AJXAJVd_5bwq6PlurBZ-xpXPYHlUPsv62yuxl9BFH_tS5rtzoZ8HGD-GQYFMRfh51dJn1HB4jDHAzmqWe1v6tghZKiVYA_Dwao7GzHj4PrglId4wFA4Lx88_gvUlqS01elE8Bk5cfarQe-T2jp0gfPSsQqffunvmE7Uuvty4TGUl8NCO3YqZbAbypo8vW9pwA',
                    },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center gap-4 group cursor-pointer">
                      <img
                        className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                        src={c.avatar}
                        alt={`${c.name} avatar`}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-bold text-black">{c.name}</p>
                        <p className="text-xs text-zinc-400">{c.email}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-black uppercase tracking-tighter">{c.commits}</p>
                        <p className="text-[9px] text-zinc-400 uppercase">Commits</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="w-full mt-8 py-3 border border-[#e2e2e2] rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                >
                  View All Rankings
                </button>
              </div>
            </div>
          </section>

          {/* Bottom Editorial Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
            <div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between group cursor-pointer hover:bg-white transition-colors">
              <span className="material-symbols-outlined text-black mb-12 text-4xl">terminal</span>
              <div>
                <h5 className="font-Manrope font-bold text-xl mb-2">System Health</h5>
                <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                  Infrastructure monitoring across all 14 active node clusters.
                </p>
                <span className="text-[10px] font-black uppercase border-b-2 border-black pb-1">Operational</span>
              </div>
            </div>

            <div className="bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-between group cursor-pointer active:scale-95 transition-all">
              <span className="material-symbols-outlined text-on-primary mb-12 text-4xl">security</span>
              <div>
                <h5 className="font-Manrope font-bold text-xl mb-2 text-white">Security Patch</h5>
                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  Review pending vulnerability reports for the core engine v4.2.
                </p>
                <span className="text-[10px] font-black uppercase text-white bg-white/10 px-3 py-1 rounded-full">
                  3 Critical
                </span>
              </div>
            </div>

            <div className="bg-surface-container-highest p-8 rounded-xl flex flex-col justify-between group cursor-pointer hover:bg-white transition-colors">
              <span className="material-symbols-outlined text-black mb-12 text-4xl">auto_awesome</span>
              <div>
                <h5 className="font-Manrope font-bold text-xl mb-2">Predictive Analysis</h5>
                <p className="text-zinc-500 text-sm mb-6 leading-relaxed">
                  Forecasted project growth for Q2 2026 is trending at +15%.
                </p>
                <span className="text-[10px] font-black uppercase border-b-2 border-zinc-400 pb-1">
                  View Model
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Floating Action Button */}
      <button
        type="button"
        className="fixed bottom-8 right-8 w-14 h-14 bg-black text-white rounded-full shadow-ambient flex items-center justify-center active:scale-90 transition-all z-50"
        onClick={() => {
          // UI-only button to match the design.
        }}
      >
        <span className="material-symbols-outlined text-2xl">add</span>
      </button>
    </div>
  );
};

export default AdminPortal;

