import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiPhone,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .send(
        "service_yo4uamk",
        "template_gt3fzim",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "EqRp7KrUAlFHqTTjl"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err.text || err);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Reach out and I'll get
            back to you soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800 p-8 rounded-xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-400">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-400">
                ❌ Oops! Something went wrong. Please try again later.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="flex items-center text-gray-300 mb-2"
                >
                  <FiUser className="mr-2" /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 border ${
                    errors.name ? "border-red-500" : "border-gray-600"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="flex items-center text-gray-300 mb-2"
                >
                  <FiMail className="mr-2" /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 border ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="flex items-center text-gray-300 mb-2"
                >
                  <FiMessageSquare className="mr-2" /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 bg-gray-700 border ${
                    errors.message ? "border-red-500" : "border-gray-600"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-white`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-red-500 to-blue-600 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start bg-gray-800 p-6 rounded-lg">
                <div className="p-3 bg-red-500/20 rounded-lg mr-4">
                  <FiMail className="text-red-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">EMAIL</h4>
                  <a
                    href="mailto:abhishek.singh77777.tech@gmail.com"
                    className="text-white hover:text-red-400 transition-colors"
                  >
                    abhishek.singh77777.tech@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start bg-gray-800 p-6 rounded-lg">
                <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                  <FiLinkedin className="text-blue-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">LINKEDIN</h4>
                  <a
                    href="https://www.linkedin.com/in/abhishek5555/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/abhishek5555/
                  </a>
                </div>
              </div>

              <div className="flex items-start bg-gray-800 p-6 rounded-lg">
                <div className="p-3 bg-gray-600/20 rounded-lg mr-4">
                  <FiGithub className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">GITHUB</h4>
                  <a
                    href="https://github.com/Abhisheksingh555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-400 transition-colors"
                  >
                    github.com/Abhisheksingh555
                  </a>
                </div>
              </div>

              <div className="flex items-start bg-gray-800 p-6 rounded-lg">
                <div className="p-3 bg-blue-500/20 rounded-lg mr-4">
                  <FiPhone className="text-blue-400 text-xl group-hover:text-red-400 transition-colors" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">MOBILE</h4>
                  <a
                    href="tel:+919532737920"
                    className="text-white hover:text-red-400 transition-colors"
                  >
                    +91 9532737920
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
