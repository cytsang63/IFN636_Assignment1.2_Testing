import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';
import MonolithNav from '../components/MonolithNav';

const Profile = () => {
  const { user } = useAuth(); // Access user token from context
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch profile data from the backend
    const fetchProfile = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get('/api/auth/profile', {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setFormData({
          name: response.data.name,
          email: response.data.email,
          university: response.data.university || '',
          address: response.data.address || '',
        });
      } catch (error) {
        alert('Failed to fetch profile. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchProfile();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosInstance.put('/api/auth/profile', formData, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      alert('Profile updated successfully!');
    } catch (error) {
      alert('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface antialiased selection:bg-black selection:text-white">
      <MonolithNav />

      <main className="pt-32 px-6 md:px-12 max-w-[800px] mx-auto">
        <form onSubmit={handleSubmit} className="bg-surface-container-lowest p-6 md:p-10 shadow-ambient rounded-xl">
          <h1 className="text-4xl font-black tracking-tight mb-6 text-left">Your Profile</h1>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full mb-4 p-3 border border-outline-variant/15 rounded-lg bg-surface-container-low focus:outline-none focus:bg-surface-container-lowest"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full mb-4 p-3 border border-outline-variant/15 rounded-lg bg-surface-container-low focus:outline-none focus:bg-surface-container-lowest"
        />
        <input
          type="text"
          placeholder="University"
          value={formData.university}
          onChange={(e) => setFormData({ ...formData, university: e.target.value })}
          className="w-full mb-4 p-3 border border-outline-variant/15 rounded-lg bg-surface-container-low focus:outline-none focus:bg-surface-container-lowest"
        />
        <input
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          className="w-full mb-4 p-3 border border-outline-variant/15 rounded-lg bg-surface-container-low focus:outline-none focus:bg-surface-container-lowest"
        />
        <button
          type="submit"
          className="w-full mt-2 bg-primary text-on-primary p-4 rounded-xl font-headline font-bold tracking-tight hover:opacity-90 transition-all active:scale-[0.98]"
        >
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
        </form>
    </main>
    </div>
  );
};

export default Profile;
