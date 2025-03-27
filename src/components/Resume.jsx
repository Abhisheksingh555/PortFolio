import { motion } from "framer-motion";
import { FiDownload, FiFileText, FiBriefcase, FiAward } from "react-icons/fi";
import resume from "../assets/Abhishek555.pdf";

const Resume = () => {
  const resumeFeatures = [
    {
      icon: <FiBriefcase className="text-3xl text-teal-400" />,
      title: "Work Experience",
      description: "5+ years in web development"
    },
    {
      icon: <FiFileText className="text-3xl text-blue-400" />,
      title: "Skills",
      description: "React, Node.js, MongoDB, etc."
    },
    {
      icon: <FiAward className="text-3xl text-purple-400" />,
      title: "Certifications",
      description: "Verified credentials"
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
            My Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Download my complete resume to explore my professional journey in detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {resumeFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-teal-400/30 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 mb-4 bg-gray-700/50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={resume} // Fix: Pass the imported file path directly
            download="Abhishek_Singh_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload size={20} /> Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
