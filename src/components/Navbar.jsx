import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-yellow-500 text-2xl font-bold">H</div>
        <span className="text-gray-700 font-semibold">WEEKEND</span>
      </div>

      {/* Search Bar */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Want to learn?"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="ml-2 flex items-center text-gray-600"
        >
          Explore <FaChevronDown className="ml-1" />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full mt-2 w-40 bg-white border rounded-md shadow-lg">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Option 1
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Option 2
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Option 3
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-gray-700">
        <a href="#" className="hover:text-green-600">
          Home
        </a>
        <Link to="/aboutus" className="hover:text-green-600">
          About us
        </Link>
        <a href="#" className="hover:text-green-600">
          Courses
        </a>
        <a href="#" className="hover:text-green-600">
          Contact us
        </a>
        <a href="#" className="hover:text-green-600">
          FAQs
        </a>
      </div>

      {/* Auth Buttons */}
      <div className="flex space-x-4">
        <button className="text-gray-700 hover:text-green-600">Sign in</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
          Create free account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
