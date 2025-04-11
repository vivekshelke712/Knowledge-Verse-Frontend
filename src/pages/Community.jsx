import React from "react";

const Community = () => {
  const topics = [
    "Web Development",
    "Data Science",
    "Machine Learning",
    "Cloud Computing",
    "Open Source",
    "Cybersecurity",
    "DevOps",
    "UI/UX Design",
  ];

  const contributors = [
    {
      name: "Ritika Sharma",
      role: "Full Stack Dev",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Arjun Rao",
      role: "Data Scientist",
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    {
      name: "Sneha Joshi",
      role: "ML Engineer",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
  ];

  const events = [
    {
      title: "Hackathon X 2025",
      desc: "Join us for a 48-hour global coding sprint and win amazing prizes!",
      date: "April 25–27, 2025",
    },
    {
      title: "AI in Real Life",
      desc: "Panel discussion on real-world AI adoption with industry leaders.",
      date: "May 10, 2025",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        🌐 KnowledgeVerse Community
      </h1>

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-10 rounded-xl shadow mb-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">
          Connect. Learn. Grow.
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Welcome to the beating heart of KnowledgeVerse — a space where
          learners, mentors, and tech enthusiasts come together to share, build,
          and thrive.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          <a href="https://discord.com/servers/techsource-club-590251368669773830">
            Join the Discord Community
          </a>
        </button>
      </div>

      {/* Contributors */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-blue-700 mb-6">
          💎 Top Contributors
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contributors.map((user, i) => (
            <div
              key={i}
              className="bg-white shadow-md p-4 rounded-xl flex flex-col items-center"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-20 h-20 rounded-full mb-4"
              />
              <h4 className="text-lg font-semibold text-blue-800">
                {user.name}
              </h4>
              <p className="text-gray-600">{user.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Topics */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          🧵 Popular Topics
        </h3>
        <div className="flex flex-wrap gap-4">
          {topics.map((topic, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium shadow hover:bg-blue-200 cursor-pointer"
            >
              #{topic}
            </span>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
          📅 Upcoming Events
        </h3>
        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-500 pl-4 bg-white shadow p-4 rounded"
            >
              <h4 className="text-lg font-semibold text-blue-800">
                {event.title}
              </h4>
              <p className="text-gray-600">{event.desc}</p>
              <p className="text-sm text-blue-500 mt-1">{event.date}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">
          Ready to Contribute or Learn?
        </h2>
        <p className="text-gray-700 mb-6">
          Join discussions, collaborate on open-source projects, and grow with
          the KnowledgeVerse family.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition">
          Explore Community Boards
        </button>
      </section>
    </div>
  );
};

export default Community;
