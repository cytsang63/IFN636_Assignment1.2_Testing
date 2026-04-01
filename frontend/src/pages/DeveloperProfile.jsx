import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';

const DeveloperProfile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Frontend Developer',
    experience: '2 years',
    skills: 'React, Node.js',
    github: '',
    bio: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      if (!user) return;
      setLoading(true);
      try {
        const response = await axiosInstance.get('/api/auth/profile', {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setFormData((prev) => ({
          ...prev,
          name: response.data.name || prev.name,
          email: response.data.email || prev.email,
          github: response.data.github || '',
          bio: response.data.bio || '',
          role: response.data.role || prev.role,
          experience: response.data.experience || prev.experience,
          skills: response.data.skills || prev.skills,
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);
    try {
      await axiosInstance.put('/api/auth/profile', formData, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      alert('Developer profile updated successfully');
    } catch (error) {
      console.error(error);
      alert('Could not update developer profile');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-10 text-center">Loading developer profile...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded p-6">
        <h2 className="text-3xl font-bold mb-4">Developer Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded border p-2"
            placeholder="Name"
          />
          <input
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded border p-2"
            placeholder="Email"
          />
          <input
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full rounded border p-2"
            placeholder="Role"
          />
          <input
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className="w-full rounded border p-2"
            placeholder="Experience"
          />
          <input
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
            className="w-full rounded border p-2"
            placeholder="Skills (comma-separated)"
          />
          <input
            value={formData.github}
            onChange={(e) => setFormData({ ...formData, github: e.target.value })}
            className="w-full rounded border p-2"
            placeholder="GitHub URL"
          />
          <textarea
            value={formData.bio}
            onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
            className="w-full rounded border p-2"
            placeholder="Short bio"
          />
          <button className="w-full bg-blue-600 text-white p-2 rounded" type="submit">
            {loading ? 'Saving...' : 'Save Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeveloperProfile;
