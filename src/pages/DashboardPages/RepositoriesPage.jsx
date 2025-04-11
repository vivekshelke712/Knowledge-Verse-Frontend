import React, { useState } from "react";

const dummyRepositories = [
  {
    id: 1,
    name: "knowledgeverse-ui",
    description: "Frontend for KnowledgeVerse using React + Tailwind",
    language: "JavaScript",
    stars: 28,
    link: "https://github.com/user/knowledgeverse-ui",
  },
  {
    id: 2,
    name: "spring-auth-api",
    description: "JWT authentication API using Spring Boot",
    language: "Java",
    stars: 55,
    link: "https://github.com/user/spring-auth-api",
  },
  {
    id: 3,
    name: "dsa-java",
    description: "Data Structures and Algorithms in Java",
    language: "Java",
    stars: 94,
    link: "https://github.com/user/dsa-java",
  },
  {
    id: 4,
    name: "mern-task-app",
    description: "Task Manager app built with MERN Stack",
    language: "JavaScript",
    stars: 70,
    link: "https://github.com/user/mern-task-app",
  },
  {
    id: 5,
    name: "portfolio-nextjs",
    description: "Modern developer portfolio using Next.js",
    language: "TypeScript",
    stars: 39,
    link: "https://github.com/user/portfolio-nextjs",
  },
];

const RepositoriesPage = () => {
  const [repos, setRepos] = useState(dummyRepositories);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    language: "",
    stars: 0,
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddRepo = () => {
    if (!formData.name || !formData.link) return alert("Name & Link required");
    setRepos((prev) => [
      ...prev,
      { id: Date.now(), ...formData, stars: parseInt(formData.stars) || 0 },
    ]);
    setShowModal(false);
    setFormData({
      name: "",
      description: "",
      language: "",
      stars: 0,
      link: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-3 tracking-tight">
          🧠 GitHub Repositories
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Showcasing your best work — repositories that reflect your journey and
          growth.
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="mb-10 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          ➕ Add New Repository
        </button>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md relative">
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">
                Add Repository
              </h2>

              <input
                name="name"
                placeholder="Repository Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mb-3 px-4 py-2 border rounded-lg"
              />
              <input
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full mb-3 px-4 py-2 border rounded-lg"
              />
              <input
                name="language"
                placeholder="Language"
                value={formData.language}
                onChange={handleChange}
                className="w-full mb-3 px-4 py-2 border rounded-lg"
              />
              <input
                name="stars"
                type="number"
                placeholder="Stars"
                value={formData.stars}
                onChange={handleChange}
                className="w-full mb-3 px-4 py-2 border rounded-lg"
              />
              <input
                name="link"
                placeholder="GitHub Link"
                value={formData.link}
                onChange={handleChange}
                className="w-full mb-5 px-4 py-2 border rounded-lg"
              />

              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddRepo}
                  className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm"
                >
                  Add Repository
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-5"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold text-gray-800">
                  {repo.name}
                </h2>
                <span className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded">
                  ⭐ {repo.stars}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3">{repo.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-700">
                  {repo.language}
                </span>
                <a
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  🔗 View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepositoriesPage;
