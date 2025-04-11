import React, { useState } from "react";

const GoalsPage = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Complete React Course",
      description: "Finish React + Redux tutorial and build one mini project.",
      deadline: "2025-04-30",
    },
    {
      id: 2,
      title: "Contribute to Open Source",
      description: "Make 2 meaningful pull requests on GitHub.",
      deadline: "2025-05-10",
    },
  ]);

  const [newGoal, setNewGoal] = useState({
    title: "",
    description: "",
    deadline: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setNewGoal({ ...newGoal, [e.target.name]: e.target.value });
  };

  const handleAddGoal = (e) => {
    e.preventDefault();
    setGoals([...goals, { ...newGoal, id: goals.length + 1 }]);
    setNewGoal({ title: "", description: "", deadline: "" });
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white px-10 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-blue-800 mb-1">
              🎯 Learning Goals
            </h1>
            <p className="text-blue-600 text-lg">
              Keep track of what you want to achieve.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            ➕ Add New Goal
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="bg-white p-6 rounded-2xl border border-blue-200 shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-bold text-blue-700 mb-2">
                {goal.title}
              </h2>
              <p className="text-blue-600 mb-3 text-sm">{goal.description}</p>
              <span className="inline-block text-sm text-blue-500 bg-blue-100 px-3 py-1 rounded-full">
                Deadline: {goal.deadline}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Add Goal Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 w-[500px] shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Add Goal</h2>
            <form onSubmit={handleAddGoal} className="space-y-4">
              <input
                type="text"
                name="title"
                value={newGoal.title}
                onChange={handleChange}
                placeholder="Goal Title"
                required
                className="w-full border border-blue-300 rounded-lg px-4 py-2"
              />
              <textarea
                name="description"
                value={newGoal.description}
                onChange={handleChange}
                placeholder="Goal Description"
                required
                className="w-full border border-blue-300 rounded-lg px-4 py-2"
              ></textarea>
              <input
                type="date"
                name="deadline"
                value={newGoal.deadline}
                onChange={handleChange}
                required
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
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Save Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalsPage;
