import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Mobile menu band
  };

  // Animation variants for desktop links
  const linkVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.1, color: "oklch(0.985 0.001 106.423)", transition: { duration: 0.3 } },
  };

  // Animation variants for mobile menu
  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-gradient-to-r from-violet-600 to-violet-600 backdrop-blur-md shadow-lg p-4"
    >
      <div className="flex justify-between items-center mx-4 lg:mx-12">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="text-3xl font-extrabold text-white tracking-wide cursor-pointer"
          onClick={() => scrollToSection("dashboard")}
        >
          <div className="rounded-full overflow-hidden w-13 h-13">
            <img src="sameer.png" alt="logo" className="w-full h-full object-left-bottom" />
          </div>


        </motion.div>

        {/* Hamburger Icon (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <motion.svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </motion.svg>
          </button>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden lg:flex space-x-10">
          <ul className="flex items-center space-x-10">
            {["techstack", "project", "contact", "about"].map((section) => (
              <motion.li
                key={section}
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="text-lg text-white font-semibold cursor-pointer"
              >
                <a
                  href={`#${section}`}
                  onClick={() => scrollToSection(section)}
                  className="relative group"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace("dashboard", "Home")}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-1 bg-zinc-700 group-hover:w-full transition-all duration-300" />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden absolute top-16 left-0 w-full bg-gray-900/95 backdrop-blur-md p-6 shadow-xl"
          >
            <ul className="flex flex-col space-y-6">
              {["dashboard", "techstack", "project", "contact"].map((section) => (
                <motion.li
                  key={section}
                  whileHover={{ x: 10 }}
                  className="text-lg text-white font-semibold"
                >
                  <a
                    href={`#${section}`}
                    onClick={() => scrollToSection(section)}
                    className="block py-2"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1).replace("dashboard", "Home")}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Navbar;