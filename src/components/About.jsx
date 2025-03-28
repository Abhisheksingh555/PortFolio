import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiCode,
  FiServer,
  FiLayers,
  FiCloud,
  FiDatabase
} from "react-icons/fi";


const About = () => {
  const skills = [
    { name: "HTML5", level: 90, icon: <FiCode className="text-blue-400" /> },
    { name: "CSS/Tailwind", level: 85, icon: <FiLayers className="text-pink-400" /> },
    { name: "React", level: 85, icon: <FiCode className="text-cyan-400" /> },
    { name: "Node.js", level: 80, icon: <FiServer className="text-purple-400" /> },
    { name: "Express", level: 75, icon: <FiCode className="text-blue-500" /> },
    { name: "MongoDB", level: 75, icon: <FiDatabase className="text-green-400" /> },
    { name: "SQL", level: 70, icon: <FiDatabase className="text-yellow-400" /> },
    { name: "JavaScript", level: 85, icon: <FiCode className="text-yellow-300" /> },
    { name: "Java", level: 80, icon: <FiCode className="text-red-400" /> },
    { name: "Python", level: 75, icon: <FiCode className="text-blue-600" /> },
    { name: "AWS", level: 70, icon: <FiCloud className="text-indigo-400" /> },
    { name: "REST APIs", level: 80, icon: <FiServer className="text-teal-400" /> },
    { name: "CI/CD", level: 65, icon: <FiCloud className="text-gray-500" /> },
  ];

  const experience = [
    {
      year: "2024",
      role: "Full Stack Developer Intern",
      company: "Coding Blocks, Delhi",
      description:
        "Developed and optimized full-stack web applications using React.js, Node.js, and MongoDB. Built scalable backend services and implemented RESTful APIs for seamless data exchange. Enhanced application performance through database query optimization and collaborated with cross-functional teams to improve project functionality.",
    },
    {
      year: "2023",
      role: "Website Developer Intern",
      company: "IIIT Prayagraj",
      description:
        "Designed and developed user-friendly web templates for internal projects using HTML, CSS, and JavaScript. Improved website responsiveness, ensured cross-browser compatibility, and optimized asset loading for enhanced performance. Contributed to creating reusable UI components while maintaining accessibility standards.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in modern web
            technologies, dedicated to crafting exceptional digital experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Profile Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Personal Profile
            </h3>

            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1 mr-6">
                  <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-white text-xl">AS</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">
                    Abhishek Singh
                  </h4>
                  <p className="text-cyan-300">Software Developer</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">LOCATION</p>
                  <p className="text-white">Mathura, India</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">EMAIL</p>
                  <p className="text-white">abhishek.singhdkm555@gmail.com</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">PHONE</p>
                  <p className="text-white">+91 95327 37920</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h5 className="text-gray-300 mb-4">Connect With Me</h5>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Abhisheksingh555"
                    className="p-3 bg-gray-700 rounded-full hover:bg-cyan-500 transition-colors"
                  >
                    <FiGithub className="text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhishek5555/"
                    className="p-3 bg-gray-700 rounded-full hover:bg-blue-600 transition-colors"
                  >
                    <FiLinkedin className="text-xl" />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="p-3 bg-gray-700 rounded-full hover:bg-blue-400 transition-colors"
                  >
                    <FiTwitter className="text-xl" />
                  </a>
                  <a
                    href="https://mail.google.com/mail"
                    className="p-3 bg-gray-700 rounded-full hover:bg-red-500 transition-colors"
                  >
                    <FiMail className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-12"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Who Am I?</h3>
              <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm Abhishek Singh, a passionate software developer with a
                  strong foundation in full-stack development. I love turning
                  ideas into reality through clean, scalable, and efficient
                  code.
                </p>
                <p>
                  My expertise lies in JavaScript technologies, including
                  React.js, Node.js, Express, and MongoDB. Additionally, I have
                  experience with cloud computing, APIs, and database
                  management.
                </p>
                <p>
                  I thrive on solving real-world problems by building dynamic
                  and user-centric digital solutions. Constant learning and
                  adapting to new technologies keep me motivated in this
                  ever-evolving field.
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">My Journey</h3>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-10 border-l-2 border-gray-700 pb-8 last:pb-0 last:border-0 group"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transform group-hover:scale-125 transition-transform"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                      <span className="text-cyan-300 font-medium">
                        {exp.year}
                      </span>
                      <span className="text-white font-bold">{exp.role}</span>
                    </div>
                    <h4 className="text-lg text-gray-200 mb-2">
                      {exp.company}
                    </h4>
                    <p className="text-gray-400">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">My Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-800 p-6 rounded-xl shadow-lg"
                  >
                    <div className="flex items-center mb-3">
                      <div className="mr-3">{skill.icon}</div>
                      <h4 className="text-lg font-medium text-white">
                        {skill.name}
                      </h4>
                      <span className="ml-auto text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
