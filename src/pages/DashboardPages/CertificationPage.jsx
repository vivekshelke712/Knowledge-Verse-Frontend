import React, { useState } from "react";

const CertificationPage = () => {
  const [certifications, setCertifications] = useState([
    {
      id: 1,
      title: "Full Stack Developer - Coursera",
      image:
        "https://dummyimage.com/400x250/93c5fd/ffffff&text=Full+Stack+Certificate",
    },
    {
      id: 2,
      title: "Data Structures & Algorithms - Udemy",
      image:
        "https://dummyimage.com/400x250/fda4af/ffffff&text=DSA+Certificate",
    },
    {
      id: 3,
      title: "Cloud Computing - AWS Academy",
      image:
        "https://dummyimage.com/400x250/a7f3d0/000000&text=Cloud+Certificate",
    },
    {
      id: 4,
      title: "Machine Learning - Google",
      image: "https://dummyimage.com/400x250/fcd34d/000000&text=ML+Certificate",
    },
    {
      id: 5,
      title: "Frontend Development - FreeCodeCamp",
      image:
        "https://dummyimage.com/400x250/c4b5fd/000000&text=Frontend+Certificate",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newCert, setNewCert] = useState({
    title: "",
    image: "",
    provider: "",
    date: "",
  });

  const handleAddCert = (e) => {
    e.preventDefault();

    const newCertificate = {
      id: certifications.length + 1,
      title: newCert.title,
      image: newCert.image,
      provider: newCert.provider || "Self Uploaded",
      date: newCert.date || "N/A",
    };

    setCertifications([...certifications, newCertificate]);
    setShowForm(false);
    setNewCert({ title: "", image: "", provider: "", date: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-10 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        My Certifications
      </h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        This section helps you manage and showcase your certifications. Add new
        ones as you achieve them, and maintain your learning journey all in one
        place.
      </p>

      {/* Add New Certification Button */}
      <div className="mb-10">
        <button
          onClick={() => setShowForm(true)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition"
        >
          + Add New Certification
        </button>
      </div>

      {/* Add Certification Form */}
      {showForm && (
        <div className="mb-12 p-6 bg-white shadow-xl rounded-xl max-w-xl mx-auto">
          <form onSubmit={handleAddCert} className="space-y-5">
            <div>
              <label className="text-sm text-gray-700 font-medium">
                Certificate Title
              </label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="e.g. DevOps Essentials"
                value={newCert.title}
                onChange={(e) =>
                  setNewCert({ ...newCert, title: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium">
                Image URL
              </label>
              <input
                type="url"
                className="w-full mt-1 p-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="https://example.com/cert.jpg"
                value={newCert.image}
                onChange={(e) =>
                  setNewCert({ ...newCert, image: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium">
                Issued By
              </label>
              <input
                type="text"
                className="w-full mt-1 p-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="e.g. Coursera"
                value={newCert.provider}
                onChange={(e) =>
                  setNewCert({ ...newCert, provider: e.target.value })
                }
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 font-medium">Date</label>
              <input
                type="month"
                className="w-full mt-1 p-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={newCert.date}
                onChange={(e) =>
                  setNewCert({ ...newCert, date: e.target.value })
                }
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-medium transition shadow"
              >
                Add Certification
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-xl font-medium transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Certification Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800">
                {cert.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Issued by: {cert.provider}
              </p>
              <p className="text-sm text-gray-400">Date: {cert.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationPage;
