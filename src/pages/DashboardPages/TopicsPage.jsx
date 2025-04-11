import React, { useState } from "react";

const TopicsPage = () => {
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: "Data Structures & Algorithms",
      description:
        "Master arrays, linked lists, trees, graphs, and algorithms like sorting and searching.",
      level: "Intermediate",
      tags: ["DSA", "Java", "Problem Solving"],
    },
    {
      id: 2,
      title: "Frontend Development",
      description:
        "Learn how to build stunning UIs using HTML, CSS, JavaScript, and React.",
      level: "Beginner",
      tags: ["HTML", "CSS", "JavaScript", "React"],
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newTopic, setNewTopic] = useState({
    title: "",
    description: "",
    level: "Beginner",
    tags: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTopic({ ...newTopic, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tagsArray = newTopic.tags.split(",").map((tag) => tag.trim());

    setTopics([
      ...topics,
      {
        id: topics.length + 1,
        title: newTopic.title,
        description: newTopic.description,
        level: newTopic.level,
        tags: tagsArray,
      },
    ]);

    setNewTopic({ title: "", description: "", level: "Beginner", tags: "" });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white px-10 py-12">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-extrabold text-blue-800 mb-2">
              📘 Explore Learning Topics
            </h1>
            <p className="text-blue-600 text-lg">
              Add and organize your areas of learning interest in one place.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
          >
            ➕ Add New Topic
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="bg-white p-6 rounded-2xl border border-blue-200 shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold text-blue-700 mb-2">
                {topic.title}
              </h2>
              <p className="text-blue-500 text-sm mb-3">{topic.description}</p>
              <span className="inline-block mb-3 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                Level: {topic.level}
              </span>
              <div className="flex flex-wrap gap-2">
                {topic.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl w-[500px] p-8 shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">
              Add a New Topic
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                value={newTopic.title}
                onChange={handleChange}
                placeholder="Topic Title"
                required
                className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="description"
                value={newTopic.description}
                onChange={handleChange}
                placeholder="Brief Description"
                required
                className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <select
                name="level"
                value={newTopic.level}
                onChange={handleChange}
                className="w-full border border-blue-300 rounded-lg px-4 py-2"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <input
                type="text"
                name="tags"
                value={newTopic.tags}
                onChange={handleChange}
                placeholder="Tags (comma-separated)"
                className="w-full border border-blue-300 rounded-lg px-4 py-2"
              />
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="text-blue-600 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Save Topic
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicsPage;
