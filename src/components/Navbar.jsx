// import React from "react";
// import { NavLink } from "react-router-dom";
import { LayoutDashboard, BookOpen, Calendar, HelpCircle, TrendingUp, Code } from "lucide-react";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-1/5 h-screen bg-gray-900 text-white p-6 flex flex-col">
      <h2 className="text-3xl font-bold mb-6 text-center">Knowledge Verse</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className={({ isActive }) => `flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/topics" className={({ isActive }) => `flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
            <BookOpen size={20} />
            <span>Topic Management</span>
          </Link>
        </li>
        <li>
          <Link to="/revision" className={({ isActive }) => `flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
            <Calendar size={20} />
            <span>Revision Scheduler</span>
          </Link>
        </li>
        <li>
          <Link to="/interview" className={({ isActive }) => `flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
            <HelpCircle size={20} />
            <span>Interview Vault</span>
          </Link>
        </li>
        <li>
          <Link to="/progress" className={({ isActive }) => `flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
            <TrendingUp size={20} />
            <span>Progress Tracker</span>
          </Link>
        </li>
        <li>
          <Link to="/code-snippets" className={({ isActive }) => `flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
            <Code size={20} />
            <span>Code Snippet Library</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
