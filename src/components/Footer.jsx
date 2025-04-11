import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-indigo-950 to-indigo-800 text-white pt-10 pb-6 mt-20 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Logo */}
        <div className="text-3xl font-bold text-white">
          Knowledge
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            Verse
          </span>
        </div>

        {/* Quick Navigation */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/roadmaps" className="hover:text-yellow-400 transition">
            Roadmaps
          </Link>
          <Link to="/repositories" className="hover:text-yellow-400 transition">
            Repositories
          </Link>
          <Link to="/resources" className="hover:text-yellow-400 transition">
            Resources
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-indigo-600 my-6 mx-6"></div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} KnowledgeVerse. Built with 💡 by Devs who
        dream big.
      </div>
    </footer>
  );
};

export default Footer;
