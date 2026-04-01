import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navLinkClass = (active) =>
  `text-sm font-medium transition-colors ${active ? 'text-white' : 'text-white/50 hover:text-white/80'}`;

/**
 * Shared stitch-style header: black nav + search row.
 * @param {'signin' | 'signup' | 'none'} [authHighlight] — which auth link is bold on login/signup pages; 'none' for landing.
 * @param {'home' | 'portfolio' | 'skill' | 'profile' | 'admin'} [activeNav]
 * @param {boolean} [showFilterSort]
 * @param {string} [searchValue] — when set with onSearchChange, search is controlled (e.g. filter a page).
 * @param {(value: string) => void} [onSearchChange]
 */
const StitchHeader = ({
  authHighlight = 'none',
  showFilterSort = false,
  activeNav = 'home',
  searchValue,
  onSearchChange,
}) => {
  const searchControlled = searchValue !== undefined && typeof onSearchChange === 'function';
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  return (
    <header className="sticky top-0 z-50 bg-black">
      <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 md:gap-x-10 py-4 px-4">
        <Link to="/" className={navLinkClass(activeNav === 'home')}>
          Home
        </Link>
        <Link to="/portfolio/explore" className={navLinkClass(activeNav === 'portfolio')}>
          Portfolio
        </Link>
        <Link to="/my-skill" className={navLinkClass(activeNav === 'skill')}>
          Skill
        </Link>
        <Link to="/profile" className={navLinkClass(activeNav === 'profile')}>
          Your Profile
        </Link>
        <Link to="/admin" className={navLinkClass(activeNav === 'admin')}>
          Admin
        </Link>
      </nav>

      <div className="bg-white border-b border-zinc-200 px-4 md:px-8 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="relative flex-1 max-w-xl">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-xl pointer-events-none">
            search
          </span>
            <input
              type="search"
              placeholder="Search"
              className="w-full rounded-lg bg-zinc-100 border-0 pl-11 pr-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-300"
              aria-label="Search"
              {...(searchControlled
                ? { value: searchValue, onChange: (e) => onSearchChange(e.target.value) }
                : {})}
            />
        </div>
        <div className="flex items-center gap-4 text-sm shrink-0">
          {user ? (
            <button
              type="button"
              onClick={handleLogout}
              className="font-semibold text-black hover:text-zinc-600 transition-colors"
            >
              Logout
            </button>
          ) : authHighlight === 'signin' ? (
            <>
              <span className="font-semibold text-black">Sign in</span>
              <Link to="/signup" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                Sign up
              </Link>
            </>
          ) : authHighlight === 'signup' ? (
            <>
              <Link to="/login" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                Sign in
              </Link>
              <span className="font-semibold text-black">Sign up</span>
            </>
          ) : (
            <>
              <Link to="/login" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                Sign in
              </Link>
              <Link to="/signup" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>

      {showFilterSort && (
        <div className="bg-white border-b border-zinc-200 px-4 md:px-8 py-3 flex gap-2">
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            Filter
            <span className="material-symbols-outlined text-lg">expand_more</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
          >
            Sort
            <span className="material-symbols-outlined text-lg">expand_more</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default StitchHeader;
