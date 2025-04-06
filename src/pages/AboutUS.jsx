import React from "react";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-extrabold text-blue-600">
          Welcome to KnowledgeVerse
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          A collaborative learning platform bridging the gap between potential
          and opportunity. At KnowledgeVerse, we empower students,
          professionals, and educators to grow, connect, and lead through
          real-world learning.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="flex flex-col md:flex-row gap-12 mb-16 items-center">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1581091012184-5c8d8e50f6f5"
            alt="Knowledge community"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-600">Our Mission</h2>
          <p className="text-gray-700 mt-4">
            To create a global knowledge ecosystem that connects learners with
            mentors, real-world projects, and growth opportunities — empowering
            them to build careers they’re passionate about.
          </p>
          <h2 className="text-3xl font-bold text-blue-600 mt-8">Our Vision</h2>
          <p className="text-gray-700 mt-4">
            A world where education is practical, accessible, and built around
            curiosity, not classrooms.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Collaboration",
              desc: "We believe that learning thrives in a supportive and collaborative environment.",
            },
            {
              title: "Growth",
              desc: "We focus on helping individuals grow — not just academically, but professionally and personally.",
            },
            {
              title: "Accessibility",
              desc: "Everyone should have access to quality education, no matter their background.",
            },
            {
              title: "Innovation",
              desc: "We adapt fast, adopt tech, and evolve our courses to meet current industry trends.",
            },
            {
              title: "Community",
              desc: "Our global network of learners and mentors is the heart of KnowledgeVerse.",
            },
            {
              title: "Integrity",
              desc: "We’re committed to honest, transparent, and value-driven education.",
            },
          ].map((value, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-sm hover:bg-blue-100 transition"
            >
              <h4 className="text-lg font-bold text-blue-600">{value.title}</h4>
              <p className="text-gray-600 mt-2">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-900">
          Ready to join a movement where learning never stops?
        </h2>
        <p className="text-gray-600 mt-2 mb-4">
          Become part of a community that believes in growing together. Explore
          our programs, connect with mentors, and start your journey with
          KnowledgeVerse.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
