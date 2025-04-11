import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useRegisterMutation } from "../redux/api/authApi";
// import { useRegisterMutation } from "../../redux/api/authApi";

const Register = () => {
  const navigate = useNavigate();
  const [registerUser, { isSuccess, isError, error }] = useRegisterMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { user } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, role } = formData;

    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setErrorMessage("");
    registerUser({ name, email, password, role });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Account created successfully");
      navigate("/login");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message || "Registration failed");
    }
  }, [isError]);

  return (
    <div className="min-h-screen py-14 bg-gradient-to-tr from-blue-100 via-white to-blue-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl px-8 py-10"
      >
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-2 font-serif">
          KnowledgeVerse
        </h2>
        <p className="text-center text-blue-500 mb-6 text-sm">
          🚀 Unlock the world of learning & mentorship!
        </p>

        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="text-blue-700 text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 w-full border border-blue-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="e.g. Priya Sharma"
            />
          </div>

          <div>
            <label className="text-blue-700 text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full border border-blue-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-blue-700 text-sm">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 w-full border border-blue-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="********"
              />
            </div>

            <div>
              <label className="text-blue-700 text-sm">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 w-full border border-blue-200 p-3 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="********"
              />
            </div>
          </div>

          <div>
            <label className="text-blue-700 text-sm">Register as</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 w-full border border-blue-200 p-3 rounded-xl bg-white focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="user">Student</option>
              <option value="mentor">Mentor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-xl mt-2 shadow-md"
          >
            Create Account
          </motion.button>
        </form>

        <p className="text-sm text-center text-blue-600 mt-6">
          Already a member?{" "}
          <span
            className="text-blue-800 font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Log in here
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
