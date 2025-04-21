import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Advantages() {
  const advantages = [
    {
      title: "Cost Reduction",
      description:
        "Reduce security personnel costs by up to 60% while improving coverage and effectiveness.",
    },
    {
      title: "Scalable Solution",
      description:
        "Easily scale from a single location to enterprise-wide deployment with centralized management.",
    },
    {
      title: "Preventative Security",
      description:
        "Shift from reactive to proactive security measures with predictive threat analysis.",
    },
    {
      title: "Seamless Integration",
      description:
        "Works with your existing camera infrastructure with minimal additional hardware requirements.",
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-earth-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Our solutions provide significant advantages over traditional
            surveillance systems and competing AI offerings.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-earth-200"
            >
              <CheckCircle className="h-6 w-6 text-moss-500 mt-1 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-earth-800 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-earth-600">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
