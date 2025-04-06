import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
        📬 Contact KnowledgeVerse
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Send us a message
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-gray-700">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Your Message</label>
              <textarea
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-blue-50 p-8 rounded-xl shadow flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Reach Us
            </h2>
            <p className="text-gray-700 mb-4">
              Have a question or just want to say hello? We'd love to hear from
              you!
            </p>
            <ul className="text-gray-600 space-y-3">
              <li>
                📍 <strong>Address:</strong> KnowledgeVerse HQ, 4th Floor,
                Techtower, Baner Road, Pune, Maharashtra – 411045
              </li>
              <li>
                📞 <strong>Phone:</strong> +91 98765 43210
              </li>
              <li>
                ✉️ <strong>Email:</strong> support@knowledgeverse.com
              </li>
            </ul>
          </div>

          {/* Social Media */}
          {/* Social Media */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Follow us
            </h3>
            <div className="flex gap-4 text-blue-600 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
