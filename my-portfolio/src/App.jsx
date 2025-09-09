import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaJava,
  FaAws,
  FaReact,
  FaDocker,
  FaDatabase,
  FaStream
} from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiMysql,SiRedis, SiElasticsearch } from "react-icons/si";

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const skills = [
    { name: "Java", icon: <FaJava className="text-red-500 text-2xl" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-2xl" /> },
    { name: "React", icon: <FaReact className="text-blue-500 text-2xl" /> },
    { name: "AWS", icon: <FaAws className="text-yellow-500 text-2xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-2xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-700 text-2xl" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400 text-2xl" /> },
    { name: "System Design", icon: <FaDatabase className="text-gray-700 text-2xl" /> },
    { name: "Redis", icon: <SiRedis className="text-red-600 text-2xl" /> },
    { name: "Elasticsearch", icon: <SiElasticsearch className="text-orange-500 text-2xl" /> },
    { name: "Kafka", icon: <FaStream className="text-purple-600 text-2xl" /> },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 text-gray-900">
      {/* Navbar */}
      <header className="bg-white/80 backdrop-blur sticky top-0 shadow-md z-50">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-600">Imadabattuni Naveen Kumar</h1>
          <ul className="flex space-x-6 font-medium">
            {["about", "skills", "experience", "projects", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`transition ${
                    activeSection === item ? "text-blue-600 font-semibold" : "hover:text-blue-600"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main Sections */}
      <main className="container mx-auto px-6 py-16 space-y-28">
        {/* About Section */}
        <section id="about" className="text-center">
          <h2 className="text-4xl font-bold mb-6">👋 About Me</h2>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed">
            Hi, I’m <span className="font-semibold text-blue-600">Naveen</span>, a
            <span className="font-semibold"> Software Engineer II</span> with expertise in
            <span className="text-blue-500"> Java, Spring Boot, React, AWS</span>, and
            <span className="text-blue-500"> distributed system design</span>.
            I love building scalable products and solving real-world problems.
          </p>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">🛠 Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
                >
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <p className="text-lg font-medium">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Experience Section */}
        <section id="experience">
          <h2 className="text-4xl font-bold mb-10 text-center">💼 Experience</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">Software Engineer II @ SEW.AI</h3>
              <p className="text-gray-600">2022 - Present</p>
              <ul className="list-disc list-inside mt-3 text-gray-700 space-y-1">
                <li>Designed and built scalable notification systems by leading a team</li>
                <li>Migrated notification status storage from MongoDB to Click House </li>
                <li>Deployed microservices on AWS Cloud</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-4xl font-bold mb-10 text-center">📂 Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">Scalable E-commerce</h3>
              <p className="text-gray-700 mt-2">
                Built E-commerce Application using Java, Spring Boot,
                AWS, Elastic Search, MySQL, and Docker.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/naveen77025/userservice-API"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <FaGithub className="mr-1" /> GitHub
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">Netflix Clone</h3>
              <p className="text-gray-700 mt-2">
                React, Redux, and Tailwind-based Netflix clone with authentication
                and dynamic content.
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://github.com/naveen77025/BingeBox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <FaGithub className="mr-1" /> GitHub
                </a>
                <a
                  href="https://binge-box-brown.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-600 hover:underline"
                >
                  🚀 Live Demo
                </a>
                <a
                  href="https://drive.google.com/file/d/12I3z6j9WdTzeI6dPRITmzS_iD-i5gbSo/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                   🔗 Recorded Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Honors Section */}
        <section id="awards">
          <h2 className="text-4xl font-bold mb-10 text-center">🏆 Awards & Honors</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">
                Excellence Award — SEW.AI (2023)
              </h3>
              <p className="text-gray-700 mt-2">
                Recognized for outstanding performance and contribution to team success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600">
                Super Warrior Award — SEW.AI (2024)
              </h3>
              <p className="text-gray-700 mt-2">
                Recognized for exceptional leadership, ownership, and accountability.
              </p>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h2 className="text-4xl font-bold mb-6">📬 Contact</h2>
          <p className="mb-6">Let’s connect! Reach me on:</p>
          <div className="flex justify-center space-x-6 text-2xl">
            <a
              href="https://github.com/naveen77025/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/imadabattuni-naveen-kumar-b8429a190/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:imadabattunink@gmail.com" className="hover:text-blue-600">
              <FaEnvelope />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-20">
        <div className="flex justify-center space-x-6 mb-4 text-xl">
          <a
            href="https://github.com/naveen77025/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/imadabattuni-naveen-kumar-b8429a190/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:imadabattunink@gmail.com" className="hover:text-blue-400">
            <FaEnvelope />
          </a>
        </div>
        © {new Date().getFullYear()} Naveen Kumar — Built with ❤️ using React & TailwindCSS
      </footer>
    </div>
  );
}
