import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NavLink = ({ to, children, activeClassName, className }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link to={to} className={`${className || ''} ${isActive ? activeClassName : ''}`.trim()}>
      {children}
    </Link>
  );
};

const MonolithNav = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true });
  };

  const linkBase =
    'font-headline font-bold tracking-tight text-sm uppercase transition-colors';
  const linkIdle = 'text-neutral-500 hover:text-black';
  const linkActive = 'text-black border-b-2 border-black pb-1';

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-ambient">
      <div className="flex justify-between items-center px-8 md:px-12 py-6 w-full max-w-[1920px] mx-auto">
        <div className="text-2xl font-black tracking-tighter text-black font-headline">
          <Link to="/">MONOLITH</Link>
        </div>

        <div className="flex md:hidden items-center">
          {!user ? (
            <Link
              to="/login"
              className="font-headline font-bold tracking-tight px-4 py-2 rounded-lg border border-outline-variant/20 hover:bg-surface-container-low text-sm"
            >
              Login
            </Link>
          ) : (
            <button
              type="button"
              onClick={handleLogout}
              className="font-headline font-bold tracking-tight text-sm uppercase text-black border border-outline-variant/20 px-4 py-2 rounded-lg hover:bg-surface-container-low"
            >
              Logout
            </button>
          )}
        </div>

        <div className="hidden md:flex flex-1 justify-center items-center gap-12">
          <NavLink
            to="/"
            activeClassName={linkActive}
            className={`${linkBase} ${linkIdle}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio/explore"
            activeClassName={linkActive}
            className={`${linkBase} ${linkIdle}`}
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/my-skill"
            activeClassName={linkActive}
            className={`${linkBase} ${linkIdle}`}
          >
            My Skill
          </NavLink>
          <NavLink
            to="/profile"
            activeClassName={linkActive}
            className={`${linkBase} ${linkIdle}`}
          >
            Profile
          </NavLink>

          <div className="relative">
            <input
              className="bg-surface-container-low border-none rounded-lg py-3 px-6 pr-10 w-64 focus:ring-0 focus:bg-surface-container-lowest transition-all font-label text-xs tracking-widest uppercase"
              placeholder="Search..."
              type="text"
            />
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {!user ? (
            <Link
              to="/login"
              className="font-headline font-bold tracking-tight px-6 py-2 rounded-lg border border-outline-variant/20 hover:bg-surface-container-low transition-colors active:scale-95"
            >
              Login
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="material-symbols-outlined text-black hover:opacity-70 transition-opacity duration-300 scale-95 active:scale-90 transition-transform"
              >
                notifications
              </button>
              <button
                type="button"
                className="material-symbols-outlined text-black hover:opacity-70 transition-opacity duration-300 scale-95 active:scale-90 transition-transform"
              >
                settings
              </button>
              <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
                <img
                  alt="Creator profile"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-Rq6RSJQpe_K1AU93Dj6JtRGTw0r1rp6q6nH80xCWiMoQBa0uxLAT8DmcwOMLRNu7kAVtEpKamrCdNrp_MSxhRIBru4CqohAO8xPrKGVXqnyptp7Iuxi436WE7j0SnZWtmk_yy3s8j-r6BMBCngx2YkKFSQ6HSeH6JjPuKEGR2868gQjDLXDgfIp7k_pK9Zz7bIOAgW9banJjFsNO4zpcvMsi0V_L--7pJ_K-pCnWSlPJDRQ57QbB6omHHYPGKyXByz9BJqMELA"
                />
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="font-headline font-bold tracking-tight text-sm uppercase text-black border border-outline-variant/20 px-4 py-2 rounded-lg hover:bg-surface-container-low transition-colors active:scale-95"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MonolithNav;

