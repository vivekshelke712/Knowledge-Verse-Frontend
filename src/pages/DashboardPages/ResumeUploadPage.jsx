import React, { useState } from "react";
import html2pdf from "html2pdf.js";

const ResumeCreator = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    skills: "",
    experience: "",
    education: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleDownload = () => {
    const element = document.getElementById("resume");
    html2pdf()
      .from(element)
      .set({ margin: 0.5, filename: `${userInfo.name}_Resume.pdf` })
      .save();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50 p-8">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-blue-300">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
          📄 Resume Creator
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {Object.entries(userInfo).map(([key, val]) => (
            <div key={key}>
              <label className="block text-blue-800 font-semibold mb-1 capitalize">
                {key}
              </label>
              <textarea
                name={key}
                value={val}
                onChange={handleChange}
                className="w-full border border-blue-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[60px]"
                placeholder={`Enter your ${key}`}
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleDownload}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-full shadow-md transition duration-300"
        >
          Download Resume as PDF
        </button>

        <div id="resume" className="hidden">
          <div className="p-6 text-black">
            <h1 className="text-2xl font-bold mb-2">{userInfo.name}</h1>
            <p>
              {userInfo.email} | {userInfo.phone}
            </p>
            <h2 className="mt-4 font-bold">Summary</h2>
            <p>{userInfo.summary}</p>
            <h2 className="mt-4 font-bold">Skills</h2>
            <p>{userInfo.skills}</p>
            <h2 className="mt-4 font-bold">Experience</h2>
            <p>{userInfo.experience}</p>
            <h2 className="mt-4 font-bold">Education</h2>
            <p>{userInfo.education}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCreator;
