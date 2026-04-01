import { useState } from 'react';

const PortfolioWorkspace = () => {
  const [project, setProject] = useState({ title: '', description: '', url: '' });
  const [projects, setProjects] = useState([
    { id: 1, title: 'Sample App', description: 'A sample React+Node app with authentication.', url: 'https://github.com/user/sample' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!project.title || !project.description) {
      alert('Title and description are required');
      return;
    }
    setProjects((prev) => [...prev, { ...project, id: Date.now() }]);
    setProject({ title: '', description: '', url: '' });
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Portfolio Workspace</h1>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">Add New Project</h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              value={project.title}
              onChange={(e) => setProject({ ...project, title: e.target.value })}
              placeholder="Project title"
              className="w-full rounded border p-2"
            />
            <textarea
              value={project.description}
              onChange={(e) => setProject({ ...project, description: e.target.value })}
              placeholder="Project description"
              className="w-full rounded border p-2"
            />
            <input
              type="url"
              value={project.url}
              onChange={(e) => setProject({ ...project, url: e.target.value })}
              placeholder="Project URL (optional)"
              className="w-full rounded border p-2"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700" type="submit">Add Project</button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow p-5">
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-gray-700 mb-2">{item.description}</p>
              {item.url && (
                <a href={item.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-800 underline">View project</a>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioWorkspace;
