import React, { useState } from "react";

const roadmaps = [
  {
    title: "Full Stack Developer",
    desc: "Master frontend, backend, and databases to build scalable web applications.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
    ],
    milestones: [
      "Master HTML, CSS, JavaScript fundamentals",
      "Build interactive UIs with React",
      "Create RESTful APIs with Node & Express",
      "Connect to databases like MongoDB or PostgreSQL",
      "Understand deployment & version control (Git, GitHub, Netlify, Vercel)",
    ],
  },
  {
    title: "Frontend Developer",
    desc: "Focus on creating beautiful and responsive user interfaces.",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Figma"],
    milestones: [
      "Understand responsive web design principles",
      "Work with modern JS frameworks like React/Vue",
      "Use CSS libraries like Tailwind or Bootstrap",
      "Learn state management (Redux/Context API)",
      "Convert UI designs from Figma into real apps",
    ],
  },
  {
    title: "Backend Developer",
    desc: "Develop robust server-side applications and manage data flow.",
    tech: ["Node.js", "Express", "Java", "Spring Boot", "Python", "PostgreSQL"],
    milestones: [
      "Understand HTTP, REST APIs, and request-response cycles",
      "Build CRUD APIs with Node.js or Spring Boot",
      "Handle authentication (JWT/OAuth)",
      "Integrate database queries with SQL/ORMs",
      "Implement testing and debugging",
    ],
  },
  {
    title: "Cybersecurity Engineer",
    desc: "Protect digital systems and sensitive data from threats.",
    tech: ["Linux", "Wireshark", "Nmap", "Burp Suite", "Kali Linux", "Python"],
    milestones: [
      "Understand OSI model and network protocols",
      "Perform vulnerability assessments",
      "Learn ethical hacking & penetration testing",
      "Study firewalls, encryption, and cryptography",
      "Get certifications like CEH or CompTIA Security+",
    ],
  },
  {
    title: "DevOps Engineer",
    desc: "Streamline development and deployment processes.",
    tech: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "AWS", "Linux"],
    milestones: [
      "Understand CI/CD pipelines",
      "Work with Docker and Kubernetes for containerization",
      "Automate deployments using Jenkins or GitHub Actions",
      "Learn scripting in Bash or Python",
      "Monitor systems with tools like Prometheus/Grafana",
    ],
  },
  {
    title: "Mobile App Developer",
    desc: "Create mobile applications for Android and iOS platforms.",
    tech: ["React Native", "Flutter", "Java", "Swift", "Firebase"],
    milestones: [
      "Build cross-platform apps using Flutter or React Native",
      "Integrate mobile APIs (camera, storage, maps)",
      "Publish apps on Play Store and App Store",
      "Use Firebase for authentication and real-time DB",
      "Implement push notifications and analytics",
    ],
  },
  {
    title: "Data Scientist",
    desc: "Extract insights from data using analytics and visualization tools.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "SQL", "Tableau"],
    milestones: [
      "Understand data cleaning and wrangling",
      "Perform exploratory data analysis (EDA)",
      "Work on datasets using Pandas & NumPy",
      "Visualize data with Matplotlib and Seaborn",
      "Create dashboards using Tableau or Power BI",
    ],
  },
  {
    title: "Machine Learning Engineer",
    desc: "Develop intelligent systems that learn from data.",
    tech: ["Python", "Scikit-learn", "TensorFlow", "Keras", "PyTorch"],
    milestones: [
      "Master linear regression, decision trees, clustering",
      "Understand supervised vs unsupervised learning",
      "Train models and measure accuracy",
      "Work with deep learning and neural networks",
      "Deploy ML models using Flask or FastAPI",
    ],
  },
  {
    title: "Cloud Computing",
    desc: "Learn to design, manage, and deploy cloud-based solutions.",
    tech: ["AWS", "Azure", "GCP", "Docker", "Terraform"],
    milestones: [
      "Understand core services of AWS/GCP/Azure",
      "Set up virtual machines, storage, and networking",
      "Learn cloud-native tools like Lambda & S3",
      "Automate infrastructure using Terraform",
      "Prepare for certifications (AWS Certified Solutions Architect)",
    ],
  },
  {
    title: "Web3 / Blockchain Developer",
    desc: "Build decentralized applications and smart contracts.",
    tech: ["Solidity", "Ethereum", "Hardhat", "MetaMask", "IPFS"],
    milestones: [
      "Understand blockchain fundamentals and Ethereum",
      "Write smart contracts using Solidity",
      "Deploy contracts using Hardhat/Truffle",
      "Connect dApps with MetaMask using Web3.js or Ethers.js",
      "Explore NFTs, DeFi, and DAOs",
    ],
  },
];

const RoadMaps = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCard = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-12">
        Career Roadmaps
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {roadmaps.map((roadmap, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border-2 bg-white border-blue-200 shadow-md hover:border-blue-400 transition-all duration-300"
          >
            <div onClick={() => toggleCard(index)} className="cursor-pointer">
              <h3 className="text-xl font-semibold text-blue-700 mb-1">
                {roadmap.title}
              </h3>
              <p className="text-gray-700">{roadmap.desc}</p>
            </div>

            {/* Expandable section */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-screen mt-4" : "max-h-0"
              }`}
            >
              {activeIndex === index && (
                <>
                  <p className="font-semibold text-blue-600">
                    🛠️ Core Technologies:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    {roadmap.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>

                  <p className="font-semibold text-blue-600">
                    📍 Learning Milestones:
                  </p>
                  <ul className="list-decimal list-inside text-gray-600">
                    {roadmap.milestones.map((milestone, i) => (
                      <li key={i}>{milestone}</li>
                    ))}
                  </ul>

                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                    Start Learning
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadMaps;
