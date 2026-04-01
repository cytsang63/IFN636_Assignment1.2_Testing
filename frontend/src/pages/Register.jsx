import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosConfig';
import { useAuth } from '../context/AuthContext';
import StitchHeader from '../components/StitchHeader';

const inputClass =
  'w-full rounded-lg bg-zinc-100 border-0 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-300';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, login } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, firstName, lastName } = formData;
    const nameFromPersonal = `${firstName} ${lastName}`.trim();
    const name = nameFromPersonal || username.trim();
    if (!name || !email || !password) {
      return alert('Please fill in all required fields in Account detail and Personal information.');
    }

    setLoading(true);
    try {
      const response = await axiosInstance.post('/api/auth/register', { name, email, password });
      login(response.data);
      navigate('/', { replace: true });
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased flex flex-col">
      <StitchHeader authHighlight="signup" />

      <main className="flex-1 px-4 md:px-8 py-10 md:py-14 max-w-lg mx-auto w-full">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Sign up</h1>
          <p className="mt-2 text-lg font-semibold text-zinc-600">Welcome</p>
          <p className="mt-2 text-sm text-zinc-500">Please enter your information to create an account</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h2 className="text-base font-bold text-black mb-4">Account detail</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="reg-username" className="sr-only">
                  User name
                </label>
                <input
                  id="reg-username"
                  type="text"
                  autoComplete="username"
                  placeholder="User name"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="reg-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="reg-email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="reg-password" className="sr-only">
                  Password
                </label>
                <input
                  id="reg-password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-base font-bold text-black mb-4">Personal information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="reg-first" className="sr-only">
                  First Name
                </label>
                <input
                  id="reg-first"
                  type="text"
                  autoComplete="given-name"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="reg-last" className="sr-only">
                  Last Name
                </label>
                <input
                  id="reg-last"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="reg-dob" className="sr-only">
                  Date of Birth
                </label>
                <input
                  id="reg-dob"
                  type="text"
                  autoComplete="bday"
                  placeholder="Date of Birth"
                  value={formData.dateOfBirth}
                  onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  className={inputClass}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors disabled:opacity-50"
          >
            {loading ? 'Creating account…' : 'Sign up'}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
