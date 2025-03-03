const Testimonial = () => {
  const testimonials = [
    {
      name: "Theresa Webb",
      role: "Application Support Analyst Lead",
      description:
        "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Courtney Henry",
      role: "Director, Undergraduate Analytics and Planning",
      description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Albert Flores",
      role: "Career Educator",
      description: "Former PM for Linear, Lambda School, and On Deck.",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Marvin McKinney",
      role: "Co-Op & Internships Program & Operations Manager",
      description: "Former frontend dev for Linear, Coinbase, and Postscript.",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      twitter: "#",
      linkedin: "#",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h3 className="text-green-500 text-lg font-semibold">Tutors</h3>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">Meet the Heroes</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-2">
        On Weekend UX, instructors from all over the world instruct millions of
        students. We offer the knowledge and abilities.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto">
        {testimonials.map((person, index) => (
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
              >
                🐦
              </a>
              <a
                href={person.linkedin}
                className="text-gray-600 hover:text-blue-700"
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
