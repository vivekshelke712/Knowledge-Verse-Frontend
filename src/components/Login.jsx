import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useLoginMutation } from "../redux/api/authApi";
import toast from "react-hot-toast";

// Validation Schema
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await login(values).unwrap();

        localStorage.setItem("token", response.token);

        toast.success("Login successful!");
        navigate("/");
      } catch (error) {
        const errorMessage = error?.data?.message || "Invalid credentials.";
        setErrors({ general: errorMessage });
        toast.error(errorMessage);
      }

      setSubmitting(false);
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-blue-200 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white shadow-2xl rounded-2xl px-8 py-10"
      >
        <h2 className="text-4xl font-bold text-blue-700 text-center mb-2 font-serif">
          Welcome Back
        </h2>
        <p className="text-center text-blue-500 mb-6 text-sm">
          Login to continue your journey with KnowledgeVerse 🚀
        </p>

        {formik.errors.general && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {formik.errors.general}
          </div>
        )}

        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <label className="text-blue-700 text-sm">Email</label>
            <input
              type="email"
              name="email"
              className={`mt-1 w-full p-3 border rounded-xl focus:ring-2 outline-none ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-blue-200 focus:ring-blue-400"
              }`}
              placeholder="you@example.com"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-sm text-red-500 mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div>
            <label className="text-blue-700 text-sm">Password</label>
            <input
              type="password"
              name="password"
              className={`mt-1 w-full p-3 border rounded-xl focus:ring-2 outline-none ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-blue-200 focus:ring-blue-400"
              }`}
              placeholder="********"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-sm text-red-500 mt-1">
                {formik.errors.password}
              </div>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={isLoading}
            className={`w-full ${
              isLoading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } transition text-white font-semibold py-3 rounded-xl shadow`}
          >
            {isLoading ? "Logging in..." : "Log In"}
          </motion.button>
        </form>

        <p className="text-sm text-center text-blue-600 mt-6">
          New to KnowledgeVerse?{" "}
          <span
            className="text-blue-800 font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Register Now
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
