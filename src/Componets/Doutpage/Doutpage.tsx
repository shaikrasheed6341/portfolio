import { motion } from "framer-motion";
import { FaStar, FaClock, FaShieldAlt } from "react-icons/fa";

const Doutpage = () => {
  const highlights = [
    {
      icon: FaStar,
      title: "Why Choose Me?",
      description: "If you are looking for someone to build your personal portfolio or a business website, I can help you create something exceptional that stands out from the crowd.",
      color: "from-zinc-800 to-slate-700"
    },
    {
      icon: FaClock,
      title: "What Makes Me Stand Out?",
      description: "I can make you professional websites in an affordable range within no time. I am incredibly committed to my work and always deliver quality results.",
      color: "from-zinc-700 to-slate-600"
    },
    {
      icon: FaShieldAlt,
      title: "Quality Assurance",
      description: "Every project I work on is built with attention to detail, ensuring clean code, responsive design, and optimal performance for the best user experience.",
      color: "from-zinc-800 to-slate-700"
    }
  ];

  return (
    <section className="py-20 px-4" id="highlights">
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
            Why Choose Me?
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Discover what sets me apart and why I'm the right choice for your next project.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`card-premium p-8 h-full bg-gradient-to-br ${highlight.color} hover:shadow-premium-lg transition-all duration-300 group`}>
                {/* Icon */}
                <div className="w-16 h-16 mb-6 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                  <highlight.icon className="text-2xl text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {highlight.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-300 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
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
              Ready to get started?
            </h3>
            <p className="text-zinc-300 mb-6">
              Let's discuss your project requirements and create something amazing together. I'm here to help bring your vision to life.
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
              <FaStar className="text-lg" />
              Start Your Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Doutpage;