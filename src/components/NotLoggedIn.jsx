import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotLoggedIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white bg-opacity-80 backdrop-blur-lg border border-white/30 shadow-2xl rounded-2xl p-10 max-w-md text-center space-y-6"
      >
        {/* Optional Emoji / Illustration */}
        <div className="text-6xl animate-bounce">🔒</div>

        <h1 className="text-3xl font-bold text-gray-800">
          You're Not Logged In
        </h1>
        <p className="text-gray-600">
          To access the treasure trove of knowledge, please login to your
          account.
        </p>

        <Link to="/login">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-md hover:shadow-lg">
            Login Now
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotLoggedIn;
