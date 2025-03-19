import { FaReact, FaHtml5, FaNode, FaJava,FaGitAlt,FaDocker } from "react-icons/fa";
import { TbBrandJavascript, TbBrandPrisma } from "react-icons/tb";
import { SiTypescript, SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const icons = [
    FaReact, FaHtml5, TbBrandJavascript, TbBrandPrisma,FaDocker,
    SiTypescript, FaNode, SiExpress, FaJava,FaGitAlt,
    RiTailwindCssFill, BiLogoMongodb
];

function Techstack() {
    return (
        <div>
            <div className="text-center  mt-10 mb-5 lg:mb-15 ">
                <span className="  text-6xl font-extrabold w-ful bg-gradient-to-tl from-violet-700 to-violet-300 text-transparent bg-clip-text ">Tech Stack</span>
            </div>
            <div className="flex w-full overflow-hidden py-4 bg-transparent z-[-1] relative">


                {/* SVG Gradient Definition */}
                <svg width="" height="">
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="50%" stopColor="#8364e8" />
                            <stop offset="100%" stopColor="#8364e8" />
                        </linearGradient>
                    </defs>
                </svg>

                
                <motion.div
                    className="flex gap-10 icon-gradient"
                    animate={{ x: [0, -1000, 0] }}
                    transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                >
                    {[...icons, ...icons].map((Icon, index) => (
                        <Icon key={index} className="text-8xl" />
                    ))}
                </motion.div>

                {/* CSS to apply the gradient fill to all SVG paths inside .icon-gradient */}
                <style>{`
        .icon-gradient path {
          fill: url(#gradient) !important;
        }
      `}</style>
            </div>
        </div>
    );
}

export default Techstack;
