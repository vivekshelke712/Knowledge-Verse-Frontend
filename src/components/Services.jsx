import { FaBookOpen, FaBrain, FaChartLine } from "react-icons/fa";

const services = [
  {
    title: "Smart Topic Management",
    description:
      "Organize and explore topics with ease using dynamic tree structures and smart filters.",
    icon: <FaBookOpen className="text-green-500 text-2xl" />,
    hoverIcon: <FaBookOpen className="text-white text-2xl" />,
  },
  {
    title: "AI-Powered Revisions",
    description:
      "Get automated reminders and personalized suggestions for timely topic revisions.",
    icon: <FaBrain className="text-blue-500 text-2xl" />,
    hoverIcon: <FaBrain className="text-white text-2xl" />,
  },
  {
    title: "Progress & Performance",
    description:
      "Track your growth through detailed analytics and performance insights.",
    icon: <FaChartLine className="text-pink-500 text-2xl" />,
    hoverIcon: <FaChartLine className="text-white text-2xl" />,
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-white">
      <div className="text-center">
        <h4 className="text-green-500 font-semibold uppercase">
          KnowledgeVerse
        </h4>
        <h2 className="text-3xl font-bold mt-2">
          Learn Smart. Learn Better. Learn with Ease.
        </h2>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="group p-6 border rounded-lg shadow-md transition-all duration-300 hover:bg-green-500 hover:text-white cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              {/* Default Icon */}
              <div className="group-hover:hidden">{service.icon}</div>
              {/* Hovered Icon */}
              <div className="hidden group-hover:block">
                {service.hoverIcon}
              </div>

              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="mt-4 text-gray-600 group-hover:text-white">
              {service.description}
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-green-500 group-hover:text-white font-medium"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
