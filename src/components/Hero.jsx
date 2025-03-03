import { FaChalkboardTeacher, FaVideo } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="relative bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Text & CTA */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Up Your <span className="text-green-500">Skills</span> To
            <br /> <span className="text-blue-500">Advance</span> Your
            <span className="text-yellow-500"> Career Path</span>
          </h1>
          {/* <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <Typewriter
              words={["Up Your Skills To", "Advance Your Career Path"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
            <br />
            <span className="text-green-500">Skills</span> To
            <br />
            <span className="text-blue-500">Advance</span> Your
            <span className="text-yellow-500"> Career Path</span>
          </h1> */}
          <p className="text-gray-600">
            Learn UI-UX Design skills with weekend UX. The latest online
            learning system and material that help your knowledge growing.
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-green-500 text-white rounded-lg font-medium shadow-lg hover:bg-green-600 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-green-500 text-green-500 rounded-lg font-medium hover:bg-green-100 transition">
              Get free trial
            </button>
          </div>
          {/* Features */}
          <div className="flex space-x-6 text-gray-600 mt-4">
            <span className="flex items-center space-x-2">
              🟡 <span>Public Speaking</span>
            </span>
            <span className="flex items-center space-x-2">
              🔴 <span>Career-Oriented</span>
            </span>
            <span className="flex items-center space-x-2">
              🔵 <span>Creative Thinking</span>
            </span>
          </div>
        </div>

        {/* Right Section - Image & Stats */}
        <div className="md:w-1/2 relative mt-10 md:mt-0">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
              alt="Student"
              className="rounded-lg shadow-lg"
            />
            {/* Floating Stats */}
            <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-2">
              <FaVideo className="text-green-500" />
              <div>
                <h4 className="text-lg font-bold">2K+</h4>
                <p className="text-xs text-gray-600">Video Courses</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg flex items-center space-x-2">
              <FaChalkboardTeacher className="text-blue-500" />
              <div>
                <h4 className="text-lg font-bold">250+</h4>
                <p className="text-xs text-gray-600">Tutors</p>
              </div>
            </div>
            <div className="absolute top-6 right-6 bg-white p-3 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold">5K+</h4>
              <p className="text-xs text-gray-600">Online Courses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
    </section>
  );
};

export default Hero;
