import Cardcomponent from "./Cardcomponent";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Invoice Generator",
    description: "A modern web application for creating and managing professional invoices with real-time calculations and PDF export functionality.",
    image: "/invoice.svg",
    github: "https://github.com/shaikrasheed6341/invoiceGenrator",
    live: "https://invoice-genrator-tvpk.vercel.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    category: "Web Application"
  },
  {
    id: 2,
    title: "Villa Rent",
    description: "A comprehensive property rental platform with advanced search, booking system, and user management features.",
    image: "/villa.svg",
    github: "https://github.com/shaikrasheed6341/VillaRent",
    live: "#",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack"
  },
  {
    id: 3,
    title: "SIH_HACKTHON Aadhaar-seeding-vs-DBT",   
    description: "A project focused on Aadhaar seeding and DBT integration for government initiatives.",
    image: "/dbt.svg",
    github: "https://github.com/shaikrasheed6341/Aadhaar-seeding-vs-DBT.git",
    live: "#",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack"
  },
];

function Project() {
  return (
    <section className="py-20 px-4" id="project">
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
            Featured Projects
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Cardcomponent
                title={project.title}
                description={project.description}
                image={project.image}
                github={project.github}
                live={project.live}
                technologies={project.technologies}
                category={project.category}
              />
            </motion.div>
          ))}
        </div>

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
              Have a project in mind?
            </h3>
            <p className="text-zinc-300 mb-6">
              Let's work together to bring your ideas to life. I'm always excited to take on new challenges and create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/shaikrasheed6341"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium-secondary group flex items-center justify-center gap-2"
              >
                <FaGithub className="text-lg" />
                View More on GitHub
              </a>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn-premium group flex items-center justify-center gap-2"
              >
                <FaExternalLinkAlt className="text-lg" />
                Let's Discuss
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;