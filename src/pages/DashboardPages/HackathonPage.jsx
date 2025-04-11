import React, { useState } from "react";

const HackathonsPage = () => {
  const [hackathons, setHackathons] = useState([
    {
      id: 1,
      title: "CodeStorm 2025",
      organizer: "DevClub University",
      date: "2025-05-20",
      description: "A 24-hour hackathon on AI, Web, and Mobile innovations.",
      status: "upcoming",
    },
    {
      id: 2,
      title: "Hackfinity",
      organizer: "Open Source Circle",
      date: "2025-03-15",
      description: "Focused on Web3 and blockchain projects.",
      status: "past",
    },
  ]);

  const [newHackathon, setNewHackathon] = useState({
    title: "",
    organizer: "",
    date: "",
    description: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setNewHackathon({ ...newHackathon, [e.target.name]: e.target.value });
  };

  const handleAddHackathon = (e) => {
    e.preventDefault();
    const today = new Date();
    const eventDate = new Date(newHackathon.date);
    const status = eventDate > today ? "upcoming" : "past";

    setHackathons([
      ...hackathons,
      { ...newHackathon, id: hackathons.length + 1, status },
    ]);
    setNewHackathon({
      title: "",
      organizer: "",
      date: "",
      description: "",
    });
    setShowModal(false);
  };

  const upcoming = hackathons.filter((h) => h.status === "upcoming");
  const past = hackathons.filter((h) => h.status === "past");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-blue-800 mb-1">
              🏆 Hackathons
            </h1>
            <p className="text-blue-600 text-lg">
              Track, participate and reflect on your hackathon journeys.
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition"
          >
            ➕ Add Hackathon
          </button>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            🚀 Upcoming Hackathons
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((h) => (
              <div
                key={h.id}
                className="bg-white p-6 rounded-xl shadow-md border border-blue-200"
              >
                <h3 className="text-lg font-bold text-blue-800">{h.title}</h3>
                <p className="text-sm text-blue-600">
                  Organizer: {h.organizer}
                </p>
                <p className="text-sm text-blue-500">Date: {h.date}</p>
                <p className="mt-2 text-gray-700 text-sm">{h.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            📜 Past Hackathons
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {past.map((h) => (
              <div
                key={h.id}
                className="bg-white p-6 rounded-xl shadow-md border border-blue-100 opacity-80"
              >
                <h3 className="text-lg font-bold text-blue-700">{h.title}</h3>
                <p className="text-sm text-blue-500">
                  Organizer: {h.organizer}
                </p>
                <p className="text-sm text-blue-400">Date: {h.date}</p>
                <p className="mt-2 text-gray-600 text-sm">{h.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal for New Hackathon */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 w-[500px] shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">
              Add New Hackathon
            </h2>
            <form onSubmit={handleAddHackathon} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Hackathon Title"
                value={newHackathon.title}
                onChange={handleChange}
                required
                className="w-full border border-blue-300 rounded-lg px-4 py-2"
              />
              <input
                type="text"
                name="organizer"
                placeholder="Organizer"
                value={newHackathon.organizer}
                onChange={handleChange}
                required
                className="w-full border border-blue-300 rounded-lg px-4 py-2"
              />
              <input
                type="date"
                name="date"
                value={newHackathon.date}
                onChange={handleChange}
                required
                className="w-full border border-blue-300 rounded-lg px-4 py-2"
              />
              <textarea
                name="description"
                placeholder="Short Description"
                value={newHackathon.description}
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
                  Save Hackathon
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HackathonsPage;
