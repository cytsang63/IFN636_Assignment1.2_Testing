import { useState, useEffect, useMemo, useCallback } from 'react';
import { useAuth } from '../context/AuthContext';
import axiosInstance from '../axiosConfig';
import StitchHeader from '../components/StitchHeader';

const CONTRIBUTORS = [
  { name: 'Fernando Alonso', email: 'alonso_f1@gmail.com' },
  { name: 'Mesut Ozil', email: 'm10@hotmail.com' },
  { name: 'Lewis Hamilton', email: 'lh44@f1.com' },
];

const CHART_LABELS = ['2025 Oct', '2025 Nov', '2025 Dec', '2026 Jan', '2026 Feb', '2026 Mar'];
/** Normalized Y values 0–1 for an upward trend (look & feel). */
const CHART_POINTS = [0.22, 0.28, 0.38, 0.48, 0.62, 0.78];

const ProjectGrowthChart = () => {
  const w = 400;
  const h = 200;
  const pad = { top: 16, right: 16, bottom: 28, left: 36 };
  const innerW = w - pad.left - pad.right;
  const innerH = h - pad.top - pad.bottom;
  const n = CHART_POINTS.length;
  const points = CHART_POINTS.map((y, i) => {
    const x = pad.left + (innerW * i) / Math.max(n - 1, 1);
    const py = pad.top + innerH * (1 - y);
    return `${x},${py}`;
  }).join(' ');
  const lastX = pad.left + (innerW * (n - 1)) / Math.max(n - 1, 1);
  const lastY = pad.top + innerH * (1 - CHART_POINTS[n - 1]);

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-4 md:p-6">
      <h3 className="text-lg font-semibold text-black mb-4">Project</h3>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-52" role="img" aria-label="Project growth chart">
        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
          const y = pad.top + innerH * (1 - t);
          return (
            <line
              key={t}
              x1={pad.left}
              y1={y}
              x2={w - pad.right}
              y2={y}
              stroke="#e4e4e7"
              strokeWidth="1"
            />
          );
        })}
        <text x={4} y={pad.top + 4} className="fill-zinc-400 text-[9px]">
          15K
        </text>
        <text x={4} y={pad.top + innerH * 0.25 + 4} className="fill-zinc-400 text-[9px]">
          12K
        </text>
        <text x={4} y={pad.top + innerH * 0.5 + 4} className="fill-zinc-400 text-[9px]">
          9K
        </text>
        <text x={4} y={pad.top + innerH * 0.75 + 4} className="fill-zinc-400 text-[9px]">
          6K
        </text>
        <text x={4} y={pad.top + innerH + 4} className="fill-zinc-400 text-[9px]">
          3K
        </text>
        <polyline fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinejoin="round" points={points} />
        <circle cx={lastX} cy={lastY} r="5" fill="#2563eb" />
        {CHART_LABELS.map((label, i) => {
          const x = pad.left + (innerW * i) / Math.max(n - 1, 1);
          return (
            <text key={label} x={x - 22} y={h - 6} className="fill-zinc-500 text-[8px]">
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

const Profile = () => {
  const { user, login } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    address: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [stats, setStats] = useState({
    myProjectCount: 0,
    totalProjects: 0,
    totalUsers: 0,
  });

  const filteredContributors = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return CONTRIBUTORS;
    return CONTRIBUTORS.filter(
      (c) => c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const loadData = useCallback(async () => {
    if (!user?.token) return;
    setLoading(true);
    try {
      const [profileRes, statsRes] = await Promise.all([
        axiosInstance.get('/api/auth/profile', {
          headers: { Authorization: `Bearer ${user.token}` },
        }),
        axiosInstance.get('/api/auth/dashboard-stats', {
          headers: { Authorization: `Bearer ${user.token}` },
        }),
      ]);
      setFormData({
        name: profileRes.data.name || '',
        email: profileRes.data.email || '',
        university: profileRes.data.university || '',
        address: profileRes.data.address || '',
      });
      setStats({
        myProjectCount: statsRes.data.myProjectCount ?? 0,
        totalProjects: statsRes.data.totalProjects ?? 0,
        totalUsers: statsRes.data.totalUsers ?? 0,
      });
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to load profile.');
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.token) return;
    setSaving(true);
    try {
      const { data } = await axiosInstance.put('/api/auth/profile', formData, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      if (data?.token) {
        login({
          ...user,
          id: data.id,
          name: data.name,
          email: data.email,
          token: data.token,
        });
      }
      alert('Profile updated successfully!');
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to update profile.');
    } finally {
      setSaving(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-zinc-100">
        <StitchHeader activeNav="profile" authHighlight="none" />
        <p className="text-center py-20 text-zinc-600">Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100 font-body text-zinc-900 antialiased">
      <StitchHeader
        activeNav="profile"
        authHighlight="none"
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="max-w-5xl mx-auto px-4 md:px-8 py-8 pb-16">
        {loading ? (
          <p className="text-zinc-500 text-center py-8">Loading...</p>
        ) : (
          <>
            <h1 className="text-6xl md:text-7xl font-light text-zinc-300 tracking-tight mb-10">Your Profile</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-2">Project</p>
                <p className="text-4xl md:text-5xl font-semibold text-black tabular-nums">
                  {stats.totalProjects.toLocaleString()}
                </p>
                <p className="text-sm text-zinc-500 mt-2">+10% month over month</p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-wide mb-2">User</p>
                <p className="text-4xl md:text-5xl font-semibold text-black tabular-nums">
                  {stats.totalUsers.toLocaleString()}
                </p>
                <p className="text-sm text-zinc-500 mt-2">+5% month over month</p>
              </div>
            </div>

            <div className="mb-8">
              <ProjectGrowthChart />
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm mb-10">
              <h3 className="text-lg font-semibold text-black mb-4">Top Contributor</h3>
              <ul className="space-y-4">
                {filteredContributors.map((c) => (
                  <li key={c.email} className="border-b border-zinc-100 pb-4 last:border-0 last:pb-0">
                    <p className="font-semibold text-black">{c.name}</p>
                    <p className="text-sm text-zinc-500">{c.email}</p>
                  </li>
                ))}
              </ul>
              {filteredContributors.length === 0 && (
                <p className="text-sm text-zinc-500">No contributors match your search.</p>
              )}
            </div>

            <div className="rounded-xl border border-zinc-200 bg-white p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-black mb-6">Account details</h2>
              <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
                <div>
                  <label className="text-xs font-semibold text-zinc-600 uppercase tracking-wide">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-600 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-600 uppercase tracking-wide">University</label>
                  <input
                    type="text"
                    value={formData.university}
                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-zinc-600 uppercase tracking-wide">Address</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="mt-1 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-300"
                  />
                </div>
                <button
                  type="submit"
                  disabled={saving}
                  className="mt-2 rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-50"
                >
                  {saving ? 'Saving…' : 'Update Profile'}
                </button>
              </form>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Profile;
