import { useCallback, useEffect, useMemo, useState } from 'react';
import axiosInstance from '../axiosConfig';
import { useAuth } from '../context/AuthContext';
import StitchHeader from '../components/StitchHeader';

const SAMPLE_PROJECTS = [
  {
    _id: 'sample-covid-19',
    title: 'COVID-19',
    topic: 'Topic',
    summary:
      'This project describe the health status during COVID-19. Data is used from 2019 to 2024. Python is applied for data collection, data cleansing and visualization.',
    tags: ['COVID-19', 'Python', 'Australia'],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDpQM8c41bICxkuDAqs6GKYZmpYJBKgMLnLZG7jNifDmj89L4nsiE0AgH6bbi5SWL9-UXxljFOVGVjnsb3NMuWIMGkhigky6PcieOWks5-d2U12xAB_eSO6_klxBBJ9ahF3ahZ45OajmqykVLcMOMxoFW5gdN3wzwQaXEGboGS3fIaxS3tUXl9u9E7XBis_ht1x2b6f5S_Qz0UPaO3aVhbxuBaTzPnezmf3RoMVXNIfQRBv3hYLfqDPDr2T1v4vBN65tQphXO17UA',
    userName: 'qut_001',
  },
  {
    _id: 'sample-australian-cargo',
    title: 'Australian cargo',
    topic: 'Topic',
    summary:
      'This project describe the number of the cargo in Australia. Past 10 years data is used for trend analysis, forecasting, and logistics planning.',
    tags: ['Cargo', 'Logistics', 'Australia'],
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDRCwhIafZVFH7x2TDfmAGxcAMvNx_Zd9WTrrDRLpbqbTNm_2Zmd0OgtDzhAhronHgQmYgXjTKj4035Vs45RrpMjsd36mdSj7LTCSsUkXX7GTGXnQy-nOgD0FLj3pb5G_o2Bygk6OD3kkVYtmkPPrlBdsTv4CNWmpCUQTqYP7PPsnHTlbZOE2kN8SJfm0GC9Zg-pDFZ4-I_8viClXofc9OzIiHx03StQFhMvPozgWeZ1cr91awTsTHaZrrBIXS8r5svpqJF8OWOGA',
    userName: 'australia001',
  },
];

const MySkill = () => {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const loadPublicProjects = useCallback(async () => {
    setLoading(true);
    try {
      const headers = user?.token ? { Authorization: `Bearer ${user.token}` } : undefined;
      const response = await axiosInstance.get('/api/portfolio/public', { headers });
      setItems(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Could not load public portfolios.');
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadPublicProjects();
  }, [loadPublicProjects]);

  const filteredItems = useMemo(() => {
    const source = items.length > 0 ? items : SAMPLE_PROJECTS;
    const q = searchQuery.trim().toLowerCase();
    if (!q) return source;
    return source.filter((item) => {
      const text = [item.title, item.topic, item.summary, item.userName, ...(item.tags || [])]
        .join(' ')
        .toLowerCase();
      return text.includes(q);
    });
  }, [items, searchQuery]);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-body antialiased">
      <StitchHeader
        activeNav="skill"
        authHighlight="none"
        showFilterSort
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black mb-10">
          Get the portfolio you
          <br />
          are interested with
        </h1>

        {loading && <p className="text-sm text-zinc-500 mb-6">Loading portfolios...</p>}
        {!loading && filteredItems.length === 0 && (
          <p className="text-sm text-zinc-500 mb-6">No portfolios found for your search.</p>
        )}
        {!loading && items.length === 0 && (
          <p className="text-xs text-zinc-400 mb-6">Showing sample projects for demo.</p>
        )}

        <div className="space-y-12">
          {filteredItems.map((item) => (
            <article key={item._id} className="border-b border-zinc-100 pb-10">
              <div className="flex gap-4 items-start">
                <div className="w-36 h-32 rounded overflow-hidden bg-zinc-100 shrink-0 flex items-center justify-center">
                  {item.imageUrl ? (
                    <img src={item.imageUrl} alt={item.title || 'Portfolio'} className="w-full h-full object-cover" />
                  ) : (
                    <span className="material-symbols-outlined text-zinc-300 text-5xl">image</span>
                  )}
                </div>
                <div className="flex-1 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-zinc-400 text-sm">Topic</p>
                    <h2 className="text-3xl font-medium leading-tight">{item.title || item.topic || 'Untitled'}</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-zinc-400 text-sm">User name</p>
                    <p className="text-2xl font-normal">{item.userName}</p>
                  </div>
                </div>
              </div>

              <h3 className="text-4xl font-semibold mt-8 mb-3">Project Summary</h3>
              <p className="text-xl text-zinc-600 leading-relaxed max-w-3xl">
                {item.summary || 'No project summary provided.'}
              </p>

              <div className="mt-4">
                <h4 className="text-4xl font-semibold mb-2">Tag</h4>
                <div className="flex flex-wrap gap-3">
                  {(item.tags || []).length === 0 && (
                    <span className="rounded-full border border-zinc-200 px-4 py-1 text-sm text-zinc-400">No tags</span>
                  )}
                  {(item.tags || []).map((tag) => (
                    <span key={tag} className="rounded-full border border-zinc-200 px-4 py-1 text-sm text-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MySkill;

