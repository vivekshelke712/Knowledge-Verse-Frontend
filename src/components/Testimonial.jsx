const Testimonial = () => {
  const mentors = [
    {
      name: "Dr. Sneha Patel",
      role: "Data Science Mentor",
      description:
        "Guided 5,000+ students with hands-on projects in ML & AI. Ex-Google Developer Expert.",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Rahul Deshmukh",
      role: "Full Stack Development Coach",
      description:
        "Specializes in React & Spring Boot. Mentor for 30+ hackathon-winning teams.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Ayesha Khan",
      role: "UI/UX Design Expert",
      description:
        "10+ years in design. Former mentor at Adobe Creative Jam. Loves interactive design.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Karan Mehta",
      role: "Cloud Computing Specialist",
      description:
        "AWS Certified. Helped 1000+ students get job-ready with cloud project bootcamps.",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      twitter: "#",
      linkedin: "#",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h3 className="text-green-500 text-lg font-semibold">Our Mentors</h3>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">
        Meet Your Guides at KnowledgeVerse
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-2">
        Learn from experienced professionals and educators who bring real-world
        experience and a passion for teaching.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
        {mentors.map((person, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold mt-4">{person.name}</h3>
            <p className="text-green-500 font-medium">{person.role}</p>
            <p className="text-gray-500 text-sm mt-2">{person.description}</p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={person.twitter}
                className="text-gray-600 hover:text-blue-500"
                aria-label="Twitter"
              >
                🐦
              </a>
              <a
                href={person.linkedin}
                className="text-gray-600 hover:text-blue-700"
                aria-label="LinkedIn"
              >
                🔗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
