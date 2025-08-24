import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiBootstrap,
  SiCss3,
  SiFirebase,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const Projects = () => {
  const projectData = [
    {
      title: "Property Rental System",
      description:
        "A MERN-based platform that allows homeowners to list rental properties and helps users find accommodations. Features include profile creation, listing management, user authentication, and a comment/rating system.",
      tech: [
        { icon: <SiReact className="text-blue-400" />, name: "React" },
        { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
        { icon: <SiExpress className="text-gray-500" />, name: "Express.js" },
        { icon: <SiMongodb className="text-green-300" />, name: "MongoDB" },
      ],
      github: "https://github.com/Abhisheksingh555/Rental-Property.git",
      liveDemo: "https://buildestate.vercel.app/",
      image:
        "https://github.com/Abhisheksingh555/PortFolio/blob/main/src/assets/front-page.png?raw=true",
    },
    {
      title: "JobJunction – Job Portal",
      description:
        "A full-stack MERN job portal that allows users to browse, filter, and apply for jobs, while employers can post and manage job listings. Features secure authentication (Email/Password + Google), pagination, and a modern responsive UI.",
      tech: [
        { icon: <SiReact className="text-cyan-400" />, name: "React.js" },
        { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
        { icon: <SiExpress className="text-gray-600" />, name: "Express.js" },
        { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
        {
          icon: <SiFirebase className="text-yellow-500" />,
          name: "Firebase Auth",
        },
        { icon: <SiCss3 className="text-blue-500" />, name: "CSS3" },
        {
          icon: <SiBootstrap className="text-purple-600" />,
          name: "Bootstrap 5",
        },
      ],
      github: "https://github.com/Abhisheksingh555/Job-Portal",
      liveDemo: "https://mern-job-portal-lakshay.vercel.app/",
      image:
        "https://github.com/LakshayD02/MERN_Job_Portal_Website/blob/main/Output-1.png?raw=true",
    },
    {
      title: "EduStack - LMS Platform",
      description:
        "EduStack is a full-featured Learning Management System (LMS) that enables course creation, student enrollment, interactive learning, and progress tracking. Designed with real-time analytics, secure payments, and a modern UI for seamless e-learning experiences.",
      tech: [
        { icon: <SiReact className="text-blue-400" />, name: "React" },
        { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
        { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
        { icon: <SiExpress className="text-gray-500" />, name: "Express.js" },
        {
          icon: <SiTailwindcss className="text-teal-400" />,
          name: "Tailwind CSS",
        },
        { icon: <FaAws className="text-orange-400" />, name: "Cloud Services" },
      ],
      github: "https://github.com/Abhisheksingh555/Online-Learning-Platform",
      liveDemo: "https://edu-stack-frontend.vercel.app/",
      image:
        "https://github.com/Abhisheksingh555/PortFolio/blob/main/src/assets/lms-front-page.png?raw=true",
    },
    {
      title: "E-commerce Product Card",
      description:
        "A modern and responsive E-commerce product card built with HTML, CSS, and JavaScript. It features product image previews, dynamic quantity updates, responsive design, and interactive UI components for a real shopping experience.",
      tech: [
        { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
        { icon: <SiCss3 className="text-blue-500" />, name: "CSS3" },
        {
          icon: <SiJavascript className="text-yellow-400" />,
          name: "JavaScript",
        },
      ],
      github: "https://github.com/Abhisheksingh555/E-commerce-card",
      liveDemo: "https://e-commerce-card-omega.vercel.app/",
      image:
        "https://github.com/Abhisheksingh555/E-commerce-card/blob/main/assets/preview-1.png?raw=true",
    },
    {
      title: "Abhii Counter App",
      description:
        "A simple yet elegant Counter App built with HTML, CSS, and JavaScript. It demonstrates DOM manipulation with increment, decrement, and reset functionality, along with error handling when the value reaches zero.",
      tech: [
        { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
        { icon: <SiCss3 className="text-blue-500" />, name: "CSS3" },
        {
          icon: <SiJavascript className="text-yellow-400" />,
          name: "JavaScript",
        },
      ],
      github: "https://github.com/Abhisheksingh555/Dom",
      liveDemo: "https://abhisheksingh555.github.io/Dom/",
      image:
        "https://github.com/Abhisheksingh555/Dom/blob/main/assets/preview-1.png?raw=true",
    },
    {
      title: "Abhii Restaurant Website",
      description:
        "A modern, responsive website showcasing flame-grilled dishes, wood-fired pizzas, and an unforgettable dining experience. Built with HTML, CSS, and Bootstrap 5, featuring clean UI, responsive design, and accessibility best practices.",
      tech: [
        { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
        { icon: <SiCss3 className="text-blue-500" />, name: "CSS3" },
        {
          icon: <SiBootstrap className="text-purple-500" />,
          name: "Bootstrap 5",
        },
      ],
      github: "https://github.com/Abhisheksingh555/Pizza_Restaurant_UI",
      liveDemo: "https://abhisheksingh555-pizza-restaurant.netlify.app",
      image:
        "https://github.com/Abhisheksingh555/Pizza_Restaurant_UI/blob/main/assets/preview-1.png?raw=true",
    },
    {
      title: "Insta Clone",
      description:
        "A sleek and responsive Instagram-like user interface built purely with HTML and CSS. Features a clean layout, modern styling, and responsive design for mobile and desktop views.",
      tech: [
        { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
        { icon: <SiCss3 className="text-blue-500" />, name: "CSS3" },
      ],
      github:
        "https://github.com/Abhisheksingh555/Insta-Clone-using-HTML-CSS.git",
      liveDemo: "https://abhisheksingh555-insta-clone.netlify.app",
      image:
        "https://raw.githubusercontent.com/Abhisheksingh555/Insta-Clone-using-HTML-CSS/main/assets/preview_01.png",
    },
    {
      title: "Bootstrap-UI",
      description:
        "A clean and responsive Bootstrap UI Components Showcase with cards, grids, and elegant styles. Perfect for quickly prototyping websites or learning Bootstrap + Custom CSS integration.",
      tech: [
        { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
        { icon: <SiCss3 className="text-blue-500" />, name: "CSS3" },
        {
          icon: <SiBootstrap className="text-purple-600" />,
          name: "Bootstrap 5",
        },
      ],
      github: "https://github.com/Abhisheksingh555/Bootstrap-UI",
      liveDemo: "https://abhisheksingh555-bootstrap-ui.netlify.app",
      image:
        "https://github.com/Abhisheksingh555/Bootstrap-UI/blob/main/assets/preview_01.png?raw=true",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one was built to solve
            real problems.
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
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex gap-3 mb-4 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 bg-gray-700/50 px-2 py-1 rounded-md"
                    >
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
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-lg text-white hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg text-white hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink /> Live Demo
                  </motion.a>
                </div>
              </div>

              <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-red-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
