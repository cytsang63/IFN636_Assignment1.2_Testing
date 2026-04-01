import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../axiosConfig';
import StitchHeader from '../components/StitchHeader';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { user, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return alert('Please enter both email and password.');
    }

    setLoading(true);
    try {
      const response = await axiosInstance.post('/api/auth/login', formData);
      login(response.data);
      navigate('/', { replace: true });
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased flex flex-col">
      <StitchHeader authHighlight="signin" />

      <main className="flex-1 px-4 md:px-8 py-10 md:py-14 max-w-lg mx-auto w-full">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Login</h1>
          <p className="mt-2 text-lg text-zinc-600">Welcome</p>
          <p className="mt-2 text-sm text-zinc-500">Please enter your username and password</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="login-username" className="sr-only">
              User name
            </label>
            <input
              id="login-username"
              type="email"
              autoComplete="username"
              placeholder="User name"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg bg-zinc-100 border-0 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-300"
            />
          </div>

          <div>
            <label htmlFor="login-password" className="sr-only">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full rounded-lg bg-zinc-100 border-0 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-300"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-black px-8 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors disabled:opacity-50"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-zinc-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-xs text-zinc-500">or</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors w-fit"
          >
            Sign up
          </Link>
          <p className="text-sm text-zinc-500">if you do not have any account</p>
        </div>
      </main>
    </div>
  );
};

export default Login;
