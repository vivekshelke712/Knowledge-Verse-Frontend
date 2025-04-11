import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLogoutMutation } from "../redux/api/authApi";
import toast from "react-hot-toast";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logout successful!");
      navigate("/");
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-blue-600 text-2xl font-bold">🔭</div>
        <Link to="/">
          <span className="text-gray-800 text-xl font-semibold">
            Knowledge<span className="text-blue-600">Verse</span>
          </span>
        </Link>
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

      {/* Auth Section */}
      <div className="relative flex space-x-4 items-center">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-medium shadow-sm"
            >
              Welcome, {user.name}
              <FaChevronDown className="text-sm mt-[1px]" />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg transition-all duration-200 z-50">
                <Link
                  to="/dashboard"
                  className="block px-5 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-t-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  📊 Dashboard
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="w-full text-left px-5 py-3 text-red-600 hover:bg-red-50 hover:text-red-700 rounded-b-xl transition-all"
                >
                  🚪 Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/register">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              Sign Up
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
