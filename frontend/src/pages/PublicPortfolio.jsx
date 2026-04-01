import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosConfig';
import { useAuth } from '../context/AuthContext';
import StitchHeader from '../components/StitchHeader';

const emptyForm = {
  title: '',
  topic: '',
  summary: '',
  tags: '',
  imageUrl: '',
};

const PublicPortfolio = () => {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('create');
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const authHeaders = useCallback(
    () => (user?.token ? { Authorization: `Bearer ${user.token}` } : {}),
    [user]
  );

  const loadProjects = useCallback(async () => {
    if (!user?.token) {
      setProjects([]);
      return;
    }
    setLoading(true);
    try {
      const { data } = await axiosInstance.get('/api/portfolio/mine', { headers: authHeaders() });
      setProjects(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
      alert(e.response?.data?.message || 'Could not load projects.');
    } finally {
      setLoading(false);
    }
  }, [user, authHeaders]);

  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter((p) => {
      const blob = [p.title, p.topic, p.summary, ...(p.tags || [])].join(' ').toLowerCase();
      return blob.includes(q);
    });
  }, [projects, searchQuery]);

  const openCreate = () => {
    setModalMode('create');
    setEditingId(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (p) => {
    setModalMode('edit');
    setEditingId(p._id);
    setForm({
      title: p.title || '',
      topic: p.topic || '',
      summary: p.summary || '',
      tags: (p.tags || []).join(', '),
      imageUrl: p.imageUrl || '',
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!user?.token) return;
    if (!form.title.trim()) {
      alert('Title is required.');
      return;
    }
    setSaving(true);
    try {
      if (modalMode === 'create') {
        await axiosInstance.post(
          '/api/portfolio',
          {
            title: form.title.trim(),
            topic: form.topic.trim(),
            summary: form.summary.trim(),
            tags: form.tags,
            imageUrl: form.imageUrl.trim(),
          },
          { headers: authHeaders() }
        );
      } else if (editingId) {
        await axiosInstance.put(
          `/api/portfolio/${editingId}`,
          {
            title: form.title.trim(),
            topic: form.topic.trim(),
            summary: form.summary.trim(),
            tags: form.tags,
            imageUrl: form.imageUrl.trim(),
          },
          { headers: authHeaders() }
        );
      }
      closeModal();
      await loadProjects();
    } catch (err) {
      alert(err.response?.data?.message || 'Save failed.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!user?.token) return;
    if (!window.confirm('Delete this project? This cannot be undone.')) return;
    try {
      await axiosInstance.delete(`/api/portfolio/${id}`, { headers: authHeaders() });
      await loadProjects();
    } catch (err) {
      alert(err.response?.data?.message || 'Delete failed.');
    }
  };

  const handleShare = async (id) => {
    const url = `${window.location.origin}/portfolio/explore?project=${id}`;
    try {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard.');
    } catch {
      prompt('Copy this link:', url);
    }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      <StitchHeader
        authHighlight="none"
        activeNav="portfolio"
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="bg-white border-b border-zinc-200 px-4 md:px-8 py-3 flex flex-wrap gap-3 items-center">
        <button
          type="button"
          onClick={openCreate}
          disabled={!user}
          className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Create New Project
        </button>
        <Link
          to="/profile"
          className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800 transition-colors inline-block text-center"
        >
          Settings
        </Link>
      </div>

      <main className="max-w-3xl mx-auto px-4 md:px-8 py-10 pb-20">
        <h1 className="text-2xl md:text-3xl font-bold text-black mb-8">Your project</h1>

        {!user && (
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center">
            <p className="text-zinc-600 mb-4">Sign in to create, view, and manage your portfolio projects.</p>
            <Link to="/login" className="font-semibold text-black underline underline-offset-4">
              Sign in
            </Link>
          </div>
        )}

        {user && loading && <p className="text-zinc-500 text-sm">Loading projects…</p>}

        {user && !loading && filtered.length === 0 && (
          <p className="text-zinc-500 text-sm">
            {searchQuery.trim() ? 'No projects match your search.' : 'No projects yet. Use Create New Project to add one.'}
          </p>
        )}

        {user && (
          <ul className="space-y-8">
            {filtered.map((p) => (
              <li key={p._id}>
                <article className="flex flex-col sm:flex-row gap-4 rounded-xl border border-zinc-200 bg-white p-4 md:p-6 shadow-sm">
                  <div className="w-full sm:w-36 h-36 shrink-0 rounded-lg overflow-hidden bg-zinc-100 flex items-center justify-center">
                    {p.imageUrl ? (
                      <img src={p.imageUrl} alt="" className="w-full h-full object-cover" />
                    ) : (
                      <span className="material-symbols-outlined text-5xl text-zinc-300">image</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-zinc-500 uppercase tracking-wide">Topic</p>
                    <h2 className="text-lg font-bold text-black leading-tight">{p.title}</h2>

                    <h3 className="text-sm font-bold text-black mt-4">Project Summary</h3>
                    <p className="text-sm text-zinc-600 mt-1 whitespace-pre-wrap">{p.summary || '—'}</p>

                    <h3 className="text-sm font-bold text-black mt-4">Tag</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {(p.tags || []).length === 0 && <span className="text-xs text-zinc-400">—</span>}
                      {(p.tags || []).map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium text-black"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col items-start sm:items-end gap-2 sm:gap-1 text-sm text-zinc-500 shrink-0 border-t sm:border-t-0 border-zinc-100 pt-3 sm:pt-0">
                    <span className="material-symbols-outlined text-zinc-400 text-xl sm:mb-1">more_vert</span>
                    <button
                      type="button"
                      className="hover:text-black text-left"
                      onClick={() => openEdit(p)}
                    >
                      Edit
                    </button>
                    <button type="button" className="hover:text-black text-left" onClick={() => handleShare(p._id)}>
                      Share
                    </button>
                    <button
                      type="button"
                      className="hover:text-red-600 text-left"
                      onClick={() => handleDelete(p._id)}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </main>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50" role="dialog" aria-modal="true">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6">
            <h2 className="text-xl font-bold text-black mb-4">
              {modalMode === 'create' ? 'Create project' : 'Edit project'}
            </h2>
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1">Title</label>
                <input
                  required
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1">Topic</label>
                <input
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1">Project summary</label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  value={form.summary}
                  onChange={(e) => setForm({ ...form, summary: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1">Tags (comma-separated)</label>
                <input
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  placeholder="e.g. COVID-19, Python, Australia"
                  value={form.tags}
                  onChange={(e) => setForm({ ...form, tags: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1">Image URL</label>
                <input
                  className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm"
                  placeholder="https://…"
                  value={form.imageUrl}
                  onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 rounded-lg bg-black py-2.5 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50"
                >
                  {saving ? 'Saving…' : modalMode === 'create' ? 'Create' : 'Save changes'}
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium hover:bg-zinc-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicPortfolio;
