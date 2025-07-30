import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface CardcomponentProps {
  title: string;
  description: string;
  image: string;
  github?: string;
  live?: string;
  technologies: string[];
  category: string;
}

function Cardcomponent({ 
  title, 
  description, 
  image, 
  github, 
  live, 
  technologies, 
  category 
}: CardcomponentProps) {
  return (
    <motion.div 
      className="group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-premium overflow-hidden h-full">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-zinc-100 to-slate-200 flex items-center justify-center p-8">
            <img
              src={image}
              alt={`${title} preview`}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-zinc-700 rounded-full border border-zinc-200">
              {category}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-white  transition-colors duration-200">
            {title}
          </h3>

          {/* Description */} 
          <p className="text-gray-200 text-sm leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                    className="px-2 py-1 bg-white text-xs font-medium text-black rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-zinc-800 text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors duration-200 group/btn"
              >
                <FaGithub className="text-lg group-hover/btn:scale-110 transition-transform duration-200" />
                Code
              </a>
            )}
            
            {live && live !== "#" && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-zinc-800 text-sm font-medium rounded-lg border border-zinc-200 hover:bg-zinc-50 transition-colors duration-200 group/btn"
              >
                <FaExternalLinkAlt className="text-lg group-hover/btn:scale-110 transition-transform duration-200" />
                Live
              </a>
            )}
            
            {live === "#" && (
              <button
                disabled
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-400 text-sm font-medium rounded-lg cursor-not-allowed"
              >
                <FaExternalLinkAlt className="text-lg" />
                Coming Soon
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Cardcomponent;