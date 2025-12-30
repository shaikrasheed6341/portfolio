import { useTypewriter } from "react-simple-typewriter";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Dashboard() {
  const [text] = useTypewriter({
    words: ["Full-Stack Web Developer", "Problem Solver", "Creative Thinker"],
    loop: 0,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  // Function for smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div 
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting */}
            <div className="mt-10">
              <motion.h2 
                className="text-lg font-medium text-zinc-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Hello, I'm
              </motion.h2>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Shaik Rasheed
              </motion.h1>
            </div>

            {/* Typewriter Text */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <p className="text-xl sm:text-2xl text-zinc-300 font-medium">
                I'm a{" "}
                <span className="text-white font-bold">
                  {text}
                </span>
                <span className="animate-pulse-slow">|</span>
              </p>
              
              <p className="text-lg text-gray-200 leading-relaxed max-w-lg">
                Passionate about creating beautiful, functional, and user-centered digital experiences that make a difference.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button
                onClick={() => scrollToSection("project")}
                className="btn-premium group flex items-center justify-center gap-2"
              >
                View My Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-premium-secondary group flex items-center justify-center gap-2"
              >
                Let's Talk
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </motion.div>

            {/* Resume Download */}
            <motion.div 
              className="flex justify-center  lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <a
                href="/shaikrasheed.pdf"
                download="Shaik_Rasheed_Resume.pdf"
                className="inline-flex items-center  bg-white gap-3 px-6 py-3 text-black rounded-2xl   hover:text-black font-medium transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white group-hover:bg-white flex items-center justify-center transition-colors duration-200">
                  <FaDownload className="text-black " />
                </div>
                <span >Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-slate-700 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              
              {/* Main image container */}
              <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl shadow-premium-lg p-8 border border-zinc-800">
                <img
                  src="/main.svg"
                  alt="Shaik Rasheed - Full Stack Developer"
                  className="w-full max-w-md animate-float"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-zinc-600 to-slate-500 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-slate-600 to-zinc-500 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            </div>
          </motion.div>
        </div>  
      </div>
    </section>
  );
}

export default Dashboard;