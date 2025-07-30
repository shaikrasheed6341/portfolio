import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaUsers, FaRocket } from "react-icons/fa";

export default function Aboutus() {
  const skills = [
    { icon: FaCode, title: "Full-Stack Development", description: "Building complete web applications from frontend to backend" },
    { icon: FaLightbulb, title: "Problem Solving", description: "Creative solutions to complex technical challenges" },
    { icon: FaUsers, title: "User-Centered Design", description: "Creating intuitive and engaging user experiences" },
    { icon: FaRocket, title: "Performance Optimization", description: "Fast, scalable, and efficient applications" }
  ];

  return (
    <section className="py-20 px-4" id="about">
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
            About Me
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Get to know me better and understand my approach to creating exceptional digital experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image Section */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-slate-700 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              
              {/* Main image container */}
              <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl shadow-premium-lg p-6 border border-zinc-800">
                <img
                  src="/myimage.png"
                  alt="Shaik Rasheed - Full Stack Developer"
                  className="w-80 h-80 object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-zinc-600 to-slate-500 rounded-full animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-slate-600 to-zinc-500 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Hello! I'm <span className="text-gradient-premium">Shaik Rasheed</span>
              </h3>
              
              <p className="text-lg text-gray-200 leading-relaxed">
                A passionate full-stack web developer dedicated to creating exceptional digital experiences that make a difference. I believe in the power of clean code, intuitive design, and innovative solutions.
              </p>
              
              <p className="text-gray-200 leading-relaxed">
                With expertise in modern web technologies, I specialize in building scalable applications that not only meet technical requirements but also exceed user expectations. Every project is an opportunity to learn, grow, and push the boundaries of what's possible.
              </p>
              
              <p className="text-gray-200 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee while brainstorming the next big idea.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">Fresher</div>
                <div className="text-sm text-gray-200">Full-Stack Developer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">13+</div>
                <div className="text-sm text-gray-200">Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="card-premium p-6 text-center group hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-zinc-800 to-slate-700 flex items-center justify-center group-hover:from-zinc-700 group-hover:to-slate-600 transition-all duration-300">
                <skill.icon className="text-2xl text-zinc-300 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-zinc-200 mb-2">{skill.title}</h3>
              <p className="text-sm text-zinc-400">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card-premium p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to work together?
            </h3>
            <p className="text-zinc-300 mb-6">
              Let's collaborate to bring your vision to life. I'm excited to hear about your project and discuss how we can create something amazing together.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-premium group flex items-center justify-center gap-2 mx-auto"
            >
              <FaRocket className="text-lg" />
              Let's Start Building
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
