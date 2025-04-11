import React, { useState } from "react";

const RoadMapsPage = () => {
  const [roadmaps, setRoadmaps] = useState([
    {
      id: 1,
      title: "Frontend Development",
      description: "Master HTML, CSS, JavaScript, React, and UI/UX principles.",
      level: "Beginner to Advanced",
      color: "from-pink-100 to-pink-50",
      link: "https://roadmap.sh/frontend",
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Learn Node.js, Spring Boot, REST APIs, Databases & Auth.",
      level: "Intermediate to Advanced",
      color: "from-yellow-100 to-yellow-50",
      link: "https://roadmap.sh/backend",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    level: "",
    color: "from-indigo-100 to-white",
    link: "",
  });

  const handleAddRoadmap = (e) => {
    e.preventDefault();
    const newRoadmap = {
      id: Date.now(),
      ...formData,
    };
    setRoadmaps([...roadmaps, newRoadmap]);
    setFormData({
      title: "",
      description: "",
      level: "",
      color: "from-indigo-100 to-white",
      link: "",
    });
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-3 tracking-tight">
          🛤️ Roadmaps to Mastery
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Curated roadmaps to guide your journey with clarity and confidence.
        </p>

        {/* Add New Roadmap Button */}
        <button
          onClick={() => setShowModal(true)}
          className="mb-10 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          ➕ Add New Roadmap
        </button>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl w-full max-w-md shadow-xl relative">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                📝 Add New Roadmap
              </h2>
              <form onSubmit={handleAddRoadmap} className="space-y-4">
                <input
                  name="title"
                  type="text"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
                <input
                  name="level"
                  type="text"
                  placeholder="Level (e.g., Beginner to Advanced)"
                  value={formData.level}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
                <input
                  name="link"
                  type="url"
                  placeholder="Link to Roadmap"
                  value={formData.link}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded"
                />
                <select
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="from-pink-100 to-pink-50">Pink</option>
                  <option value="from-yellow-100 to-yellow-50">Yellow</option>
                  <option value="from-green-100 to-green-50">Green</option>
                  <option value="from-blue-100 to-blue-50">Blue</option>
                  <option value="from-indigo-100 to-white">Indigo</option>
                </select>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Roadmaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {roadmaps.map((roadmap) => (
            <div
              key={roadmap.id}
              className={`bg-gradient-to-br ${roadmap.color} rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105`}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {roadmap.title}
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                {roadmap.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs font-medium px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                  {roadmap.level}
                </span>
                <a
                  href={roadmap.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 font-semibold hover:underline"
                >
                  📌 Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMapsPage;
