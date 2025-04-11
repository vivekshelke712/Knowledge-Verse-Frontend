import React from "react";

const ProgressPage = () => {
  const milestones = [
    {
      title: "Project Planning",
      status: "Completed",
      date: "March 1, 2025",
      description: "Initial planning and scope definition completed.",
    },
    {
      title: "Frontend UI Design",
      status: "Completed",
      date: "March 10, 2025",
      description: "Designed key pages using Tailwind CSS and UI mockups.",
    },
    {
      title: "Backend API Setup",
      status: "In Progress",
      date: "March 20, 2025",
      description: "Developing RESTful APIs using Spring Boot.",
    },
    {
      title: "Database Integration",
      status: "Pending",
      date: "April 5, 2025",
      description: "Will set up PostgreSQL and integrate with backend.",
    },
    {
      title: "Authentication Module",
      status: "Pending",
      date: "April 10, 2025",
      description: "JWT-based login and registration system coming soon.",
    },
    {
      title: "Deployment Phase",
      status: "Pending",
      date: "April 20, 2025",
      description: "Final deployment to Railway/Netlify with domain mapping.",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-xl">
      <h1 className="text-4xl font-extrabold mb-4 text-blue-800 text-center">
        📈 Project Progress Tracker
      </h1>
      <p className="text-blue-700 text-center mb-10 text-lg">
        Follow along with the journey of building our amazing project. Each
        milestone marks a key step toward completion!
      </p>
      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="bg-white border-l-4 border-blue-600 shadow-sm rounded-xl p-5 hover:shadow-md transition"
          >
            <h2 className="text-2xl font-semibold text-blue-900">
              {milestone.title}
            </h2>
            <p className="text-sm text-blue-600 mb-2">
              Status:{" "}
              <span
                className={`font-medium ${
                  milestone.status === "Completed"
                    ? "text-green-600"
                    : milestone.status === "In Progress"
                    ? "text-yellow-500"
                    : "text-gray-500"
                }`}
              >
                {milestone.status}
              </span>{" "}
              • Target: {milestone.date}
            </p>
            <p className="text-blue-800 text-sm italic">
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressPage;
