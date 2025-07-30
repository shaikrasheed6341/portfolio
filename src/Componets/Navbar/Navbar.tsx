import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Animation variants
  const linkVariants = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
    open: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-zinc-950/90 backdrop-blur-md shadow-premium border-b border-zinc-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-premium">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("dashboard")}
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden shadow-premium border border-zinc-700">
              <img src="logo.png" alt="logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-lg font-bold text-gradient-premium hidden sm:block">
              Shaik Rasheed
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {[
              { id: "techstack", label: "Skills" },
              { id: "project", label: "Projects" },
              { id: "about", label: "About" },
              { id: "contact", label: "Contact" }
            ].map((item, index) => (
              <motion.div
                key={item.id}
                variants={linkVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-zinc-300 hover:text-white font-medium text-sm transition-colors duration-200 group"
                >
                  {item.label}
                  <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </button>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.button
              variants={linkVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              onClick={() => scrollToSection("contact")}
              className="btn-premium text-sm px-4 py-2"
            >
              Get In Touch
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors duration-200"
            >
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden bg-zinc-950/95 backdrop-blur-md rounded-xl shadow-premium-lg border border-zinc-800 mb-2 overflow-hidden"
            >
              <div className="py-3 px-4 space-y-2">
                {[
                  { id: "techstack", label: "Skills" },
                  { id: "project", label: "Projects" },
                  { id: "about", label: "About" },
                  { id: "contact", label: "Contact" }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 px-3 text-zinc-300 hover:text-white hover:bg-zinc-800 rounded-lg font-medium text-sm transition-all duration-200"
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <div className="pt-2 border-t border-zinc-800">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="w-full btn-premium text-sm py-2"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;