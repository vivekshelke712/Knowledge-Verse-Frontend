import React from "react";

const dummyLinks = [
  {
    id: 1,
    title: "FreeCodeCamp – Learn to Code",
    url: "https://www.freecodecamp.org/",
    description: "An interactive platform to learn web development and coding.",
    tags: ["Frontend", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "GeeksForGeeks DSA Guide",
    url: "https://www.geeksforgeeks.org/data-structures/",
    description: "Comprehensive DSA material for interviews and learning.",
    tags: ["DSA", "Java", "Algorithms"],
  },
  {
    id: 3,
    title: "Spring Boot Documentation",
    url: "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/",
    description: "Official documentation for building apps with Spring Boot.",
    tags: ["Backend", "Java", "Spring Boot"],
  },
  {
    id: 4,
    title: "MDN Web Docs",
    url: "https://developer.mozilla.org/",
    description: "Web standards documentation for HTML, CSS, JavaScript.",
    tags: ["Docs", "HTML", "CSS", "JS"],
  },
  {
    id: 5,
    title: "React Official Website",
    url: "https://reactjs.org/",
    description: "The library for building modern web UIs.",
    tags: ["React", "Frontend", "JavaScript"],
  },
];

const LinksPage = () => {
  return (
    <div className="min-h-screen px-10 py-12 bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-5xl font-extrabold text-blue-800 mb-2">
              🔗 Saved Knowledge Links
            </h1>
            <p className="text-blue-600 text-lg">
              All your bookmarked resources organized in one place.
            </p>
          </div>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition">
            ➕ Add New Link
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {dummyLinks.map((link) => (
            <a
              href={link.url}
              key={link.id}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-blue-200 hover:border-blue-400"
            >
              <h2 className="text-xl font-bold text-blue-700">{link.title}</h2>
              <p className="text-blue-500 text-sm my-2">{link.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {link.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
