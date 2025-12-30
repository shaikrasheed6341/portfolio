import { motion } from "framer-motion";
import Cardcomponent from "../Project/Cardcomponent";
import { FaBriefcase } from "react-icons/fa";

const workProjects = [
    {
        id: 1,
        title: "Flacondive",
        description: "Worked on FalconDive, an iGaming decision intelligence platform, migrating key frontend modules to React to improve performance, scalability, and maintainability.",
        image: "/game.png", // Placeholder
        technologies: ["React", "Redux", "Redux", "Bootstrap","charjs"],
        category: "Professional Work"
    },
    {
        id: 2,
        title: "Fitness Sass Application",
        description: "Build a fitness application where trainer can connect with users and track workouts, nutrition, and health metrics. ",
        image: "/fitness.png", // Placeholder
        technologies: ["React", "TypeScript", "Prisma", "Postgres", "Auth0", "Tailwind CSS", "Vite"],
        category: "Professional Work"
    },
    {
        id: 3,
        title: "E-commerce Website",
        description: "Developed a user-friendly e-commerce website with a focus Both Frontend and Backend .",
        image: "/ecommerce-svgrepo-com.svg", // Placeholder
        technologies: ["React", "Node.js", "Drizzle ORM", "Express", "Postgres", "Tailwind CSS", "Vite"],
        category: "Professional Work"
    }
];

function WorkExperienceProjects() {
    return (
        <section className="py-20 px-4 bg-zinc-900/50" id="work-projects">
            <div className="container-premium">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <FaBriefcase className="text-3xl text-violet-500" />
                        <h2 className="text-4xl sm:text-5xl font-bold text-white">
                            Work Experience Projects
                        </h2>
                    </div>
                    <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
                        A selection of professional projects I've contributed to, demonstrating my ability to deliver high-quality solutions in a corporate environment.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {workProjects.map((project, index) => (
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
                                technologies={project.technologies}
                                category={project.category}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Optional: Call to Action specific to hiring */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p className="text-white font-semibold">
                        I am unable to show the live link or Code repository of the project due to company policy.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default WorkExperienceProjects;
