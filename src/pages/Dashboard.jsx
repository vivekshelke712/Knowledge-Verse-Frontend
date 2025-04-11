import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import NotLoggedIn from "./NotLoggedIn"; // Make sure this path is correct

import {
  FaMedal,
  FaBookOpen,
  FaGithub,
  FaLink,
  FaClipboardList,
  FaBullseye,
  FaUserFriends,
  FaCodeBranch,
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaBrain,
  FaStickyNote,
  FaFileUpload,
  FaComments,
  FaHandshake,
} from "react-icons/fa";
import NotLoggedIn from "../components/NotLoggedIn";

const cards = [
  {
    title: "Certifications",
    description: "Upload and showcase your tech certifications.",
    icon: <FaMedal />,
    link: "/dashboard/certifications",
    bg: "bg-yellow-100",
  },
  {
    title: "Learning Resources",
    description: "Add and organize your favorite tutorials, PDFs, and tools.",
    icon: <FaBookOpen />,
    link: "/dashboard/resources",
    bg: "bg-blue-100",
  },
  {
    title: "GitHub Repositories",
    description: "Connect your GitHub and track open-source contributions.",
    icon: <FaGithub />,
    link: "/dashboard/repositories",
    bg: "bg-gray-100",
  },
  {
    title: "Save Useful Links",
    description: "Bookmark blogs, videos, tools, or courses for future use.",
    icon: <FaLink />,
    link: "/dashboard/links",
    bg: "bg-green-100",
  },
  {
    title: "Topics to Study",
    description: "Plan and prioritize concepts you want to learn next.",
    icon: <FaClipboardList />,
    link: "/dashboard/topics",
    bg: "bg-pink-100",
  },
  {
    title: "Set Goals",
    description: "Track short-term and long-term learning goals.",
    icon: <FaBullseye />,
    link: "/dashboard/goals",
    bg: "bg-red-100",
  },
  {
    title: "Find Study Buddies",
    description: "Match with learners interested in similar topics.",
    icon: <FaUserFriends />,
    link: "/dashboard/study-buddies",
    bg: "bg-indigo-100",
  },
  {
    title: "Join Hackathons",
    description: "Discover and register for upcoming coding events.",
    icon: <FaCodeBranch />,
    link: "/dashboard/hackathons",
    bg: "bg-purple-100",
  },
  {
    title: "Explore Roadmaps",
    description: "Follow curated paths for frontend, backend, and more.",
    icon: <FaMapMarkedAlt />,
    link: "/dashboard/roadmaps",
    bg: "bg-orange-100",
  },
  {
    title: "Events Calendar",
    description: "Stay updated with tech meetups, webinars, & deadlines.",
    icon: <FaCalendarAlt />,
    link: "/dashboard/calendar",
    bg: "bg-blue-200",
  },
  {
    title: "Track Learning Progress",
    description: "Visualize what you’ve learned and what’s pending.",
    icon: <FaBrain />,
    link: "/dashboard/progress",
    bg: "bg-emerald-100",
  },
  {
    title: "Personal Notes",
    description: "Save insights, code snippets, and reflections.",
    icon: <FaStickyNote />,
    link: "/dashboard/notes",
    bg: "bg-teal-100",
  },
  {
    title: "Upload Resume",
    description: "Save your resume for job applications or mentorship.",
    icon: <FaFileUpload />,
    link: "/dashboard/resume",
    bg: "bg-slate-100",
  },
  {
    title: "AI Tools",
    description: "Ask questions, share ideas, or start a thread.",
    icon: <FaComments />,
    link: "/dashboard/forum",
    bg: "bg-violet-100",
  },
  {
    title: "Get Mentorship",
    description: "Request help from seniors, mentors, or professionals.",
    icon: <FaHandshake />,
    link: "/dashboard/mentorship",
    bg: "bg-rose-100",
  },
];

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  if (!user?.email) return <NotLoggedIn />;

  return (
    <div className="min-h-screen px-6 py-10 bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-700">
          Your KnowledgeVerse
        </h1>
        <p className="text-gray-600 mt-3 text-lg max-w-3xl mx-auto">
          A central hub to manage your learning journey — organize resources,
          track goals, engage in community, and grow your skills. Let’s shape
          your knowledge universe together.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Link to={card.link} key={index}>
            <div
              className={`flex flex-col justify-between h-48 p-5 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105 cursor-pointer ${card.bg}`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl text-blue-700">{card.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-gray-700">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
