import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter, FiHeart } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub className="text-2xl text-blue-400 group-hover:text-red-400 transition-colors" />, url: "https://github.com/Abhisheksingh555", name: "GitHub" },
    { icon: <FiLinkedin className="text-2xl text-blue-400 group-hover:text-red-400 transition-colors" />, url: "https://www.linkedin.com/in/abhishek5555/", name: "LinkedIn" },
    { icon: <FiTwitter className="text-2xl text-blue-400 group-hover:text-red-400 transition-colors" />, url: "https://twitter.com", name: "Twitter" },
    { icon: <FiMail className="text-2xl text-blue-400 group-hover:text-red-400 transition-colors" />, url: "https://mail.google.com/mail", name: "Email" }
  ];

  const techStack = [
    { icon: <FaReact className="text-3xl text-blue-400 group-hover:text-red-400 transition-colors" />, name: "React" },
    { icon: <SiNextdotjs className="text-3xl text-blue-400 group-hover:text-red-400 transition-colors" />, name: "Next.js" },
    { icon: <FaNodeJs className="text-3xl text-blue-400 group-hover:text-red-400 transition-colors" />, name: "Node.js" },
    { icon: <SiTailwindcss className="text-3xl text-blue-400 group-hover:text-red-400 transition-colors" />, name: "Tailwind CSS" }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50">
      {/* Floating grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2Zy...')]"></div>
      </div>

      {/* Animated border gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/70 to-transparent">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-400 to-red-500"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
        
        {/* Tech stack showcase */}
        <motion.div 
          className="flex justify-center gap-8 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg group-hover:shadow-red-500/20 transition-all duration-300"
              >
                {tech.icon}
              </motion.div>
              <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div 
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-4 rounded-full group"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-red-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                {link.icon}
              </div>
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                {link.name}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-lg">
            Crafted with <FiHeart className="inline text-red-500 animate-pulse" /> by Abhishek Singh
          </p>
          <p className="text-gray-500 text-sm mt-2">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
