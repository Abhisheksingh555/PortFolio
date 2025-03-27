import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, 
  SiExpress, SiPython, SiJavascript 
} from 'react-icons/si'; 
import { FaAws } from 'react-icons/fa'; 


const Projects = () => {
  const projectData = [
    { 
      title: "Life Flow - Blood Donation Platform", 
      description: "A responsive and interactive platform for real-time donor-recipient matching. Users can manage profiles with blood type, location, and contact details, while advanced search and filtering enhance usability.",
      tech: [
        { icon: <SiReact className="text-blue-400" />, name: "React" },
        { icon: <SiJavascript className="text-yellow-300" />, name: "JavaScript" },
        { icon: <SiTailwindcss className="text-cyan-300" />, name: "Tailwind CSS" }
      ],
      github: "#",
      liveDemo: "#",
      image: "/life-flow-screenshot.jpg"
    },
    { 
      title: "Property Rental System", 
      description: "A MERN-based platform that allows homeowners to list rental properties and helps users find accommodations. Features include profile creation, listing management, user authentication, and a comment/rating system.",
      tech: [
        { icon: <SiReact className="text-blue-400" />, name: "React" },
        { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
        { icon: <SiExpress className="text-gray-500" />, name: "Express.js" },
        { icon: <SiMongodb className="text-green-300" />, name: "MongoDB" }
      ],
      github: "#",
      liveDemo: "#",
      image: "/property-rental-screenshot.jpg"
    },
    { 
      title: "House Price Estimation", 
      description: "A machine learning project predicting house prices using Python and data analysis libraries. Implemented features for PG owners to list properties and for users to compare and save listings.",
      tech: [
        { icon: <SiPython className="text-blue-500" />, name: "Python" },
        { icon: <SiMongodb className="text-green-300" />, name: "MongoDB" }
      ],
      github: "#",
      liveDemo: "#",
      image: "/house-price-estimation.jpg"
    },
    { 
      title: "YouTube Clone", 
      description: "A video streaming platform inspired by YouTube, focusing on cloud-based scalability. Implemented a robust backend, user authentication, and dynamic video rendering.",
      tech: [
        { icon: <SiReact className="text-blue-400" />, name: "React" },
        { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
        { icon: <FaAws className="text-orange-400" />, name: "AWS" } // Replaced SiAws with FaAws
      ],
      github: "#",
      liveDemo: "#",
      image: "/youtube-clone.jpg"
    }
    ,
    { 
      title: "LMS Platform", 
      description: "A full-featured Learning Management System with course creation, student enrollment, and progress tracking. Designed for interactive e-learning with real-time analytics.",
      tech: [
        { icon: <SiReact className="text-blue-400" />, name: "React" },
        { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
        { icon: <SiMongodb className="text-green-300" />, name: "MongoDB" }
      ],
      github: "#",
      liveDemo: "#",
      image: "/lms-screenshot.jpg"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one was built to solve real problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl shadow-2xl"
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-400">
                  Project Image
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              <div className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex gap-3 mb-4">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="flex items-center gap-1 bg-gray-700/50 px-2 py-1 rounded-md">
                      <span className="text-lg">{tech.icon}</span>
                      <span className="text-xs text-gray-300">{tech.name}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink /> Live Demo
                  </motion.a>
                </div>
              </div>

              <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
