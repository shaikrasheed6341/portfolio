import React from "react";
import { FaMagic, FaBookOpen, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const svgimages = [FaMagic, FaBookOpen, FaRocket];

interface Quationcardprop {
  title: string;
  para: string;
  iconindex: number;
}

const Quationcard: React.FC<Quationcardprop> = ({ title, para, iconindex }) => {
  const Iconcomponent = svgimages[iconindex % svgimages.length];

  return (
    <motion.div
      className="group"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-premium p-8 text-center h-full hover:shadow-premium-lg transition-all duration-300">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-zinc-100 to-slate-200 flex items-center justify-center group-hover:from-zinc-200 group-hover:to-slate-300 transition-all duration-300">
          <Iconcomponent className="text-2xl text-zinc-900  transition-colors duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-zinc-100 leading-relaxed">
          {para}
        </p>
      </div>
    </motion.div>
  );
};

export default Quationcard;