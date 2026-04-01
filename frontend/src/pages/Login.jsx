import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from?.pathname || '/tasks';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return alert('Please enter both email and password.');
    }

    setLoading(true);
    try {
      const response = await axiosInstance.post('/api/auth/login', formData);
      login(response.data);
      navigate(redirectPath, { replace: true });
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-body text-on-surface antialiased flex flex-col">
      <div className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-[0_20px_40px_rgba(26,28,28,0.06)]">
        <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
          <div className="text-2xl font-black tracking-tighter text-black uppercase font-headline">MONOLITH</div>
          <div className="hidden md:flex items-center gap-8">
            <Link className="font-headline font-bold tracking-tight text-neutral-500 hover:text-black transition" to="#">Portfolio</Link>
            <Link className="font-headline font-bold tracking-tight text-neutral-500 hover:text-black transition" to="#">Services</Link>
            <Link className="font-headline font-bold tracking-tight text-neutral-500 hover:text-black transition" to="#">About</Link>
          </div>
          <Link
            to="/login"
            className="font-headline font-bold tracking-tight px-6 py-2 rounded-lg border border-outline-variant/20 hover:bg-surface-container-low transition-colors active:scale-95"
          >
            Login
          </Link>
        </div>
      </div>

      <main className="flex-grow flex items-center justify-center px-6 pt-32 pb-20">
        <div className="w-full max-w-[1200px] md:grid md:grid-cols-2 gap-0 overflow-hidden bg-surface-container-lowest rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.08)]">
          <div className="relative hidden md:block min-h-[600px] bg-primary">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=1350&q=80"
              alt="Architectural style imagery"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-white mb-4 leading-none">
                CURATED<br />EXCELLENCE.
              </h2>
              <p className="text-on-primary/60 text-sm tracking-widest uppercase font-label">
                The Digital Gallery for Modern Visionaries
              </p>
            </div>
          </div>

          <div className="p-8 md:p-20 flex items-center justify-center">
            <div className="w-full max-w-[450px]">
              <header className="mb-10">
                <span className="text-xs font-bold tracking-[0.2em] text-outline uppercase">Access Portal</span>
                <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-primary mt-2">Login</h1>
              </header>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-on-surface-variant uppercase ml-1">Username</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">person</span>
                    <input
                      type="email"
                      placeholder="yourname@monolith.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl text-on-surface placeholder:text-outline/50 font-body focus:ring-0 focus:bg-surface-container-lowest transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-on-surface-variant uppercase ml-1">Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">lock</span>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl text-on-surface placeholder:text-outline/50 font-body focus:ring-0 focus:bg-surface-container-lowest transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer text-xs font-medium text-secondary">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-outline-variant/40 text-primary focus:ring-0 checked:bg-primary checked:border-primary transition-all"
                    />
                    Keep me signed in
                  </label>
                  <Link to="#" className="text-xs font-bold text-primary hover:opacity-60 transition-opacity">
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[linear-gradient(135deg,#000000_0%,#3b3b3b_100%)] text-on-primary py-5 rounded-xl font-headline font-bold text-lg tracking-tight shadow-[0_20px_40px_rgba(26,28,28,0.06)] hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-2 group"
                  disabled={loading}>
                  {loading ? 'Signing in...' : 'Sign In'}
                  {!loading && (
                    <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  )}
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-secondary">
                Don’t have an account?{' '}
                <Link to="/signup" className="text-primary font-bold hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-surface border-t border-outline-variant/10 py-10">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary">
          <span className="font-black text-on-surface uppercase font-headline">MONOLITH</span>
          <div className="flex gap-8">
            <a href="#" className="transition hover:text-primary">Privacy</a>
            <a href="#" className="transition hover:text-primary">Terms</a>
            <a href="#" className="transition hover:text-primary">Contact</a>
          </div>
          <span>© 2024 MONOLITH. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Login;
