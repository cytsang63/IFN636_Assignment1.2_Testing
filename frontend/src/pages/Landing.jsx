import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import StitchHeader from '../components/StitchHeader';

const Landing = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body">
      <StitchHeader authHighlight="none" showFilterSort activeNav="home" />

      <main className="pb-16">
        {/* Browse by Topic */}
        <section className="px-4 md:px-8 pt-8 max-w-6xl mx-auto">
          <Link
            to="/portfolio/explore"
            className="inline-flex items-center gap-1 font-semibold text-base text-black mb-6 hover:opacity-70"
          >
            Browse by Topic
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
            <article className="rounded-xl border border-zinc-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-emerald-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-7xl md:text-8xl">medical_services</span>
              </div>
              <div className="p-4">
                <p className="text-xs text-zinc-500 mb-1">Topic</p>
                <h3 className="font-semibold text-black">COVID-19</h3>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square overflow-hidden bg-zinc-100">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRCwhIafZVFH7x2TDfmAGxcAMvNx_Zd9WTrrDRLpbqbTNm_2Zmd0OgtDzhAhronHgQmYgXjTKj4035Vs45RrpMjsd36mdSj7LTCSsUkXX7GTGXnQy-nOgD0FLj3pb5G_o2Bygk6OD3kkVYtmkPPrlBdsTv4CNWmpCUQTqYP7PPsnHTlbZOE2kN8SJfm0GC9Zg-pDFZ4-I_8viClXofc9OzIiHx03StQFhMvPozgWeZ1cr91awTsTHaZrrBIXS8r5svpqJF8OWOGA"
                  alt="Australian cargo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-zinc-500 mb-1">Topic</p>
                <h3 className="font-semibold text-black">Australian cargo</h3>
              </div>
            </article>
          </div>
        </section>

        {/* Browse by Skill */}
        <section className="px-4 md:px-8 pt-12 max-w-6xl mx-auto">
          <Link
            to="/my-skill"
            className="inline-flex items-center gap-1 font-semibold text-base text-black mb-6 hover:opacity-70"
          >
            Browse by Skill
            <span className="material-symbols-outlined text-xl">chevron_right</span>
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
            <article className="rounded-xl border border-zinc-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-[#3776ab] flex items-center justify-center p-8">
                <img
                  src="https://www.python.org/static/community_logos/python-logo-generic.svg"
                  alt="Python"
                  className="max-w-[70%] max-h-[70%] object-contain"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-zinc-500 mb-1">Topic</p>
                <h3 className="font-semibold text-black">Python</h3>
              </div>
            </article>

            <article className="rounded-xl border border-zinc-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-square bg-[#f7df1e] flex items-center justify-center p-8">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                  alt="JavaScript"
                  className="max-w-[55%] max-h-[55%] object-contain"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-zinc-500 mb-1">Topic</p>
                <h3 className="font-semibold text-black">JavaScript</h3>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 mt-auto">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 uppercase tracking-wider">
          <span>© {new Date().getFullYear()} Developer Portfolio Manager</span>
          <div className="flex gap-6">
            <Link to="/portfolio/explore" className="hover:text-zinc-900">
              Portfolio
            </Link>
            {!user && (
              <Link to="/login" className="hover:text-zinc-900">
                Sign in
              </Link>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
