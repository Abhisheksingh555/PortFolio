import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiDownload,
} from "react-icons/fi";
import myphoto from "../assets/Photo2.jpg";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = useMemo(
    () => [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "React Specialist",
      "Tech Enthusiast",
      "Java Developer",
    ],
    []
  );

  const socialLinks = [
    {
      icon: <FiGithub size={20} />,
      url: "https://github.com/Abhisheksingh555",
      name: "GitHub",
    },
    {
      icon: <FiLinkedin size={20} />,
      url: "https://www.linkedin.com/in/abhishek5555/",
      name: "LinkedIn",
    },
    {
      icon: <FiTwitter size={20} />,
      url: "https://twitter.com",
      name: "Twitter",
    },
    {
      icon: <FiMail size={20} />,
      url: "https://mail.google.com/mail",
      name: "Email",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const handleViewResume = () => {
    // Open resume in a new tab
    window.open("/resume");
  };

  return (
    <section className="min-h-screen w-full overflow-hidden relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Gradient rectangle accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-32 bg-gradient-to-r from-blue-500 to-red-500 rounded-xl mix-blend-screen filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-32 bg-gradient-to-r from-red-500 to-blue-500 rounded-xl mix-blend-screen filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between relative z-10 py-20">
        {/* Text content */}
        <motion.div
          className="w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
              Hi, I'm Abhishek Singh
            </span>
          </h1>

          <motion.p
            key={currentRole}
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {roles[currentRole]}
          </motion.p>

          <p className="text-gray-300 mb-8 text-lg max-w-lg">
            Enthusiastic and detail-oriented Software Engineer fresher with a
            solid understanding of software development principles. Skilled in
            React, Node.js, and Java, with hands-on experience from academic
            projects and self-learning. Eager to apply problem-solving skills
            and technical knowledge to contribute to innovative and impactful
            software solutions.
          </p>

          {/* Social links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-r from-blue-500 to-red-500 rounded-full text-white hover:scale-110 transition-all"
                whileHover={{ y: -3 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <motion.a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-red-500 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-red-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Hire Me
            </motion.a>
            <motion.button
              onClick={handleViewResume}
              className="px-8 py-4 border-2 border-gradient-to-r from-blue-500 to-red-500 text-blue-400 rounded-lg font-bold text-lg hover:bg-blue-500/10 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <FiDownload size={20} /> View Resume
            </motion.button>
          </div>
        </motion.div>

        {/* Photo with gradient border */}
        <motion.div
          className="w-full md:w-1/2 order-1 md:order-2 flex justify-center mb-10 md:mb-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-2xl overflow-hidden p-[4px] bg-gradient-to-r from-blue-500 to-red-500">
            <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden">
              <img
                src={myphoto}
                alt="Abhishek Singh"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
