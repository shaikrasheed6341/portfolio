import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/shaikrasheed6341",
      color: "hover:text-zinc-300"
    },
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shaik-rasheed-4b76a9276/",
      color: "hover:text-blue-400"
    },
    {
      icon: FaTwitter,
      name: "Twitter",
      url: "https://x.com/shaikrasheed634",
      color: "hover:text-blue-300"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#dashboard" },
    { name: "Skills", href: "#techstack" },
    { name: "Projects", href: "#project" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-gradient-to-br from-zinc-950 to-slate-950 border-t border-zinc-800">
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-premium border border-zinc-700">
                <img src="logo.png" alt="logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold text-gradient-premium">
                Shaik Rasheed
              </span>
            </div>
            <p className="text-zinc-300 mb-6 max-w-md">
              Full-stack web developer passionate about creating exceptional digital experiences. Let's build something amazing together.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-zinc-800 shadow-premium border border-zinc-700 flex items-center justify-center text-zinc-300 transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-300 hover:text-white transition-colors duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.href.substring(1));
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2 text-zinc-300">
              <p>shaikrasheed6341@gmail.com</p>
              <p>Hyderabad, India</p>
              <p>Available for freelance work</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-zinc-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-zinc-400 text-sm">
              © {currentYear} Shaik Rasheed. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-zinc-400 text-sm">
              <span>Made with</span>
              <FaHeart className="text-red-400 animate-pulse" />
              <span>by Shaik Rasheed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;