import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      return alert('Please fill in all required fields.');
    }

    setLoading(true);
    try {
      await axiosInstance.post('/api/auth/register', formData);
      alert('Registration successful. Please sign in.');
      navigate('/signin');
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed. Please try again.');
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
          <Link to="/signin" className="font-headline font-bold tracking-tight px-5 py-2 rounded-lg border border-outline-variant/20 hover:bg-surface-container-low transition">Login</Link>
        </div>
      </div>

      <main className="flex-grow flex items-center justify-center px-6 pt-28 pb-20">
        <div className="w-full max-w-[1200px] md:grid md:grid-cols-2 gap-0 overflow-hidden bg-surface-container-lowest rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.08)]">
          <div className="relative hidden md:block min-h-[600px] bg-primary">
            <img
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
              src="https://images.unsplash.com/photo-1529428380567-c37de74d9773?auto=format&fit=crop&w=1350&q=80"
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
                <span className="text-xs font-bold tracking-[0.2em] text-outline uppercase">Create Account</span>
                <h1 className="font-headline text-4xl font-extrabold tracking-tighter text-primary mt-2">Sign Up</h1>
              </header>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-on-surface-variant uppercase ml-1">Full Name</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">person</span>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-surface-container-low rounded-xl text-on-surface placeholder:text-outline/50 font-body focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-black/15 transition"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-on-surface-variant uppercase ml-1">Email</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">email</span>
                    <input
                      type="email"
                      placeholder="yourname@monolith.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-surface-container-low rounded-xl text-on-surface placeholder:text-outline/50 font-body focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-black/15 transition"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-wider text-on-surface-variant uppercase ml-1">Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">lock</span>
                    <input
                      type="password"
                      placeholder="Create a secure password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 bg-surface-container-low rounded-xl text-on-surface placeholder:text-outline/50 font-body focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-black/15 transition"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-secondary">
                  <input type="checkbox" className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-2 focus:ring-black/25" />
                  <span>Agree to terms and privacy policy</span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-black to-surface-container-highest text-on-primary py-4 rounded-xl font-headline font-bold text-lg tracking-tight shadow-[0_20px_40px_rgba(26,28,28,0.06)] hover:brightness-110 transition-all disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? 'Creating account...' : 'Create Account'}
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-secondary">
                Already have an account?{' '}
                <Link to="/signin" className="text-primary font-bold hover:underline">
                  Sign In
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

export default Register;
