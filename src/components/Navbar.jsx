import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // New state for auth

  const handleLogin = () => {
    // Mock login logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Mock logout logic
    setIsLoggedIn(false);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-blue-600 text-2xl font-bold">🔭</div>
        <span className="text-gray-800 text-xl font-semibold">
          Knowledge<span className="text-blue-600">Verse</span>
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
        <Link to="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link to="/aboutus" className="hover:text-blue-600 transition">
          About
        </Link>
        <Link to="/community" className="hover:text-blue-600 transition">
          Community
        </Link>
        <Link to="/roadmap" className="hover:text-blue-600 transition">
          RoadMaps
        </Link>
        <Link to="/contact" className="hover:text-blue-600 transition">
          Contact
        </Link>
      </div>

      {/* Dropdown */}
      <div className="relative hidden md:block">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition duration-300 ease-in-out"
        >
          Discover
          <FaChevronDown
            className={`text-xs transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-3 w-52 bg-white border border-gray-200 rounded-xl shadow-xl z-20 animate-fade-in-up">
            <ul className="py-2 text-sm text-gray-800">
              {["Learning Paths", "Mentorship", "Hackathons"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="px-5 py-3 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 rounded-lg cursor-pointer transition duration-200"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Auth Buttons */}
      <div className="flex space-x-4 items-center">
        {isLoggedIn ? (
          <>
            <Link
              to="/userDash"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
          >
            LogIn
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
