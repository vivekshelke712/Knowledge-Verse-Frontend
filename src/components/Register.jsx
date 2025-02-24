import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Register = () => {
  const handleGoogleSignIn = () => {
    console.log("Google Sign-In Clicked");
  };

  const handleGitHubSignIn = () => {
    console.log("GitHub Sign-In Clicked");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-semibold mb-6">Register</h2>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full p-3 mb-4 border rounded-lg shadow-sm bg-white hover:bg-gray-100"
        >
          <FcGoogle className="text-2xl mr-2" />
          Sign in with Google
        </button>
        <button
          onClick={handleGitHubSignIn}
          className="flex items-center justify-center w-full p-3 border rounded-lg shadow-sm bg-black text-white hover:bg-gray-800"
        >
          <FaGithub className="text-2xl mr-2" />
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default Register;
