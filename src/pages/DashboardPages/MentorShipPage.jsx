import React from "react";

const mentors = [
  {
    name: "Anjali Deshmukh",
    stack: "React, Node.js",
    years: 5,
    price: 499,
    bio: "Frontend wizard and full-stack mentor with startup experience.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Rohan Mehta",
    stack: "Java, Spring Boot",
    years: 6,
    price: 699,
    bio: "Java backend mentor helping students crack FAANG interviews.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Sara Malik",
    stack: "AI/ML, Python",
    years: 4,
    price: 799,
    bio: "ML researcher & Kaggle expert offering project guidance.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Sampann Tiwari",
    stack: "Life Learning Skills ",
    years: 4,
    price: 199,
    bio: "Do What you Love , Love What you Do , This is the Life .",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  // ✅ Add more mentors here up to 20
];

const MentorshipPage = () => {
  const handlePayment = async (mentor) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    script.onload = () => {
      const options = {
        key: "rzp_test_m9uTfFCgaH2B8k", // 🔐 <-- Your Razorpay API Key goes here
        amount: mentor.price * 100,
        currency: "INR",
        name: "KnowledgeVerse Mentorship",
        description: `Session with ${mentor.name}`,
        image: "https://your-logo-link.png", // Optional logo
        handler: function (response) {
          alert(
            `✅ Payment successful!\nPayment ID: ${response.razorpay_payment_id}`
          );
        },
        prefill: {
          name: "Student Name",
          email: "student@example.com",
        },
        theme: {
          color: "#0ea5e9",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    script.onerror = () => {
      alert("⚠️ Failed to load Razorpay SDK. Please try again later.");
    };

    document.body.appendChild(script);
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
          🌟 Mentorship Marketplace
        </h1>
        <p className="text-center text-blue-600 mb-10">
          Book sessions with experts across different tech stacks!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-blue-100"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-300"
              />
              <h2 className="text-xl font-bold text-blue-800 text-center">
                {mentor.name}
              </h2>
              <p className="text-center text-sm text-blue-600 mb-2">
                {mentor.stack} • {mentor.years}+ yrs exp
              </p>
              <p className="text-center text-sm text-blue-500 italic mb-4">
                {mentor.bio}
              </p>
              <p className="text-center font-semibold text-blue-700 text-lg mb-4">
                ₹{mentor.price} / session
              </p>
              <button
                onClick={() => handlePayment(mentor)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full"
              >
                Book Session
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorshipPage;
