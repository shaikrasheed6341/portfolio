import Quationcard from "./Quationcard";
import { motion } from "framer-motion";

const Quation = () => {
  const services = [
    {
      title: "Modern Websites",
      description: "I build powerful, responsive websites that can potentially empower your company and drive business growth.",
      iconIndex: 0
    },
    {
      title: "Fast Learning",
      description: "I have built projects with modern frameworks like React, React Native, and Flask, adapting quickly to new technologies.",
      iconIndex: 1
    },
    {
      title: "Scalable Software",
      description: "I write scalable, secure, and fast programs in languages like Java and JavaScript, ensuring long-term maintainability.",
      iconIndex: 2
    }
  ];

  return (
    <section className="py-20 px-4" id="services">
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
            What I Offer
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Comprehensive web development services tailored to meet your business needs and exceed your expectations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Quationcard 
                title={service.title} 
                para={service.description} 
                iconindex={service.iconIndex} 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quation;