import { FaReact, FaHtml5, FaNode, FaJava, FaGitAlt, FaDocker } from "react-icons/fa";
import { TbBrandJavascript, TbBrandPrisma } from "react-icons/tb";
import { SiTypescript, SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const techStack = [
  { icon: FaReact, name: "React", category: "Frontend" },
  { icon: FaHtml5, name: "HTML5", category: "Frontend" },
  { icon: TbBrandJavascript, name: "JavaScript", category: "Language" },
  { icon: SiTypescript, name: "TypeScript", category: "Language" },
  { icon: RiTailwindCssFill, name: "Tailwind CSS", category: "Styling" },
  { icon: FaNode, name: "Node.js", category: "Backend" },
  { icon: SiExpress, name: "Express.js", category: "Backend" },
  { icon: BiLogoMongodb, name: "MongoDB", category: "Database" },
  { icon: TbBrandPrisma, name: "Prisma", category: "Database" },
  { icon: FaJava, name: "Java", category: "Language" },
  { icon: FaGitAlt, name: "Git", category: "Tools" },
  { icon: FaDocker, name: "Docker", category: "Tools" }
];

function Techstack() {
  return (
    <section className="py-20 px-4" id="techstack">
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
            Tech Stack
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life and create exceptional digital experiences.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="card-premium p-6 text-center hover:scale-105 transition-all duration-300 group-hover:shadow-premium-lg">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-zinc-800 to-slate-700 group-hover:from-zinc-700 group-hover:to-slate-600 transition-all duration-300">
                  <tech.icon className="text-3xl text-zinc-300 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-zinc-200 text-sm">{tech.name}</h3>
                <span className="text-xs text-zinc-500 mt-1 block">{tech.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Tech Carousel */}
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900/50 to-slate-900/50 p-8 border border-zinc-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/20 to-transparent z-10"></div>

          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: [0, -1000, 0] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...techStack, ...techStack].map((tech, index) => (
              <div key={index} className="flex items-center gap-3 min-w-max">
                <div className="w-12 h-12 rounded-lg bg-zinc-800 shadow-premium flex items-center justify-center">
                  <tech.icon className="text-2xl text-zinc-300" />
                </div>
                <span className="font-medium text-zinc-200">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-zinc-800 to-slate-700 flex items-center justify-center">
              <FaReact className="text-3xl text-zinc-300" />
            </div>
            <h3 className="font-semibold text-zinc-200 mb-2">Frontend Development</h3>
            <p className="text-zinc-400 text-sm">Building responsive and interactive user interfaces with modern frameworks.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-zinc-800 to-slate-700 flex items-center justify-center">
              <FaNode className="text-3xl text-zinc-300" />
            </div>
            <h3 className="font-semibold text-zinc-200 mb-2">Backend Development</h3>
            <p className="text-zinc-400 text-sm">Creating robust server-side applications and APIs with Node.js ecosystem.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Techstack;
