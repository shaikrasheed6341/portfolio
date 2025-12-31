import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { useState } from "react";

const Contactme = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add email service integration here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "shaikrasheed6341@gmail.com",
      link: "mailto:shaikrasheed6341@gmail.com"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Hyderabad, India",
      link: null
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "+91 1234567890",
      link: "tel:+911234567890"
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/shaikrasheed6341",
      color: "hover:text-zinc-800"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shaik-raseed-4b76a9276/",
      color: "hover:text-blue-600"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://x.com/shaikrasheed634",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section className="py-20 px-4" id="contact">
      <div className="container-premium">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-zinc-300 leading-relaxed mb-8">
                I'm always excited to hear about new projects and opportunities. Whether you have a specific project in mind or just want to chat about technology, feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="card-premium p-4 group hover:scale-105 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-slate-700 flex items-center justify-center group-hover:from-zinc-700 group-hover:to-slate-600 transition-all duration-300">
                      <info.icon className="text-xl text-zinc-300 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-zinc-200">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-zinc-400 hover:text-white transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-zinc-400">{info.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-zinc-200 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-800 to-slate-700 flex items-center justify-center text-zinc-300 transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="card-premium p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 bg-zinc-800 text-white placeholder-zinc-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 bg-zinc-800 text-white placeholder-zinc-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 bg-zinc-800 text-white placeholder-zinc-400"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-zinc-700 rounded-lg focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-all duration-200 bg-zinc-800 text-white placeholder-zinc-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-premium group flex items-center justify-center gap-2"
              >
                <FaEnvelope className="text-lg" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contactme;