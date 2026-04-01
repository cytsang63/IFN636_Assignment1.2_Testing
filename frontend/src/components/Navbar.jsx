import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (
    location.pathname === '/' ||
    location.pathname === '/portfolio/explore' ||
    location.pathname === '/workspace' ||
    location.pathname === '/my-skill' ||
    location.pathname === '/profile' ||
    location.pathname === '/admin' ||
    location.pathname === '/login' ||
    location.pathname === '/signin' ||
    location.pathname === '/signup' ||
    location.pathname === '/register'
  )
    return null;

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Your apps name</Link>
      <div className="space-x-3">
        <Link to="/" className="hover:text-slate-200">Home</Link>
        {!user && <Link to="/login" className="hover:text-slate-200">Login</Link>}
        {!user && <Link to="/signup" className="hover:text-slate-200">Sign Up</Link>}
        {user && <Link to="/developer-profile" className="hover:text-slate-200">Dev Profile</Link>}
        {user && <Link to="/portfolio" className="hover:text-slate-200">Portfolio</Link>}
        {user && <Link to="/tasks" className="hover:text-slate-200">Tasks</Link>}
        {user && (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
