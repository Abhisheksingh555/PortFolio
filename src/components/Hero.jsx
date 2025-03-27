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
      "Java Developer"
    ],
    []
  );

  const socialLinks = [
    { icon: <FiGithub size={20} />, url: "https://github.com/Abhisheksingh555", name: "GitHub" },
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
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto h-full px-6 flex flex-col md:flex-row items-center justify-center md:justify-between relative z-10 py-20">
        {/* Text content */}
        <motion.div
          className="w-full md:w-1/2 order-2 md:order-1 mt-10 md:mt-0 flex flex-col justify-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400 leading-tight">
            Hi, I'm <span className="text-white">Abhishek Singh</span>
          </h1>

          <div className="h-14 md:h-16 overflow-hidden mb-6">
            <motion.p
              key={currentRole}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-200"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {roles[currentRole]}
            </motion.p>
          </div>

          <p className="text-gray-300 mb-8 text-lg max-w-lg">
            I build exceptional digital experiences with modern web
            technologies. Currently specializing in React, Node.js, and cloud
            architectures.
          </p>

          {/* Social links - properly aligned */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition-all flex items-center justify-center"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.name}
                title={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
            <motion.button
              onClick={handleViewResume}
              className="px-8 py-4 bg-transparent border-2 border-teal-400 text-teal-400 rounded-lg font-bold text-lg hover:bg-teal-400/10 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload size={20} /> View Resume
            </motion.button>
          </div>
        </motion.div>

        {/* Enlarged Photo */}
        <motion.div
          className="w-full md:w-1/2 order-1 md:order-2 flex justify-center mb-10 md:mb-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-112 md:h-112">
            {/* Photo container */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden border-4 border-white/10">
              <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white">
                <img
                  src={myphoto}
                  alt="Abhishek Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating accent elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"
              animate={{
                y: [0, 15, 0],
                x: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
