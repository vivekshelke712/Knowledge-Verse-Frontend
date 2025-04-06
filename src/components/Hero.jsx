import { FaChalkboardTeacher, FaVideo } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="relative bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text & CTA */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <Typewriter
              words={[
                "Up Your Skills",
                "Advance Your Career Path",
                "Grow with KnowledgeVerse",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
            <br />
            with <span className="text-blue-600">Knowledge</span>
            <span className="text-green-500">Verse</span>
          </h1>
          <p className="text-gray-600">
            Empower your learning journey with interactive video courses, expert
            tutors, and a community that fuels your passion to grow and lead in
            your career.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section - Image & Stats */}
        <div className="md:w-1/2 relative mt-10 md:mt-0">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60"
              alt="Student learning"
              className="rounded-lg shadow-xl"
            />
            {/* Floating Stats */}
            <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md flex items-center space-x-2">
              <FaVideo className="text-blue-600" />
              <div>
                <h4 className="text-lg font-bold"></h4>
                <p className="text-xs text-gray-600">Save Resources </p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md flex items-center space-x-2">
              <FaChalkboardTeacher className="text-green-600" />
              <div>
                <h4 className="text-lg font-bold"></h4>
                <p className="text-xs text-gray-600">Community Support</p>
              </div>
            </div>
            <div className="absolute top-6 right-6 bg-white p-3 rounded-lg shadow-md text-center">
              <h4 className="text-lg font-bold">1M +</h4>
              <p className="text-xs text-gray-600">USERS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
