import { motion } from "framer-motion";
import { Shield, Eye, Clock, Zap, Lock, Cpu } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-moss-500" />,
      title: "Enhanced Security",
      description:
        "Advanced threat detection algorithms that identify potential security breaches before they occur.",
    },
    {
      icon: <Eye className="h-10 w-10 text-moss-500" />,
      title: "Real-time Monitoring",
      description:
        "24/7 surveillance with instant alerts and notifications for suspicious activities.",
    },
    {
      icon: <Clock className="h-10 w-10 text-moss-500" />,
      title: "Rapid Response",
      description:
        "Immediate action protocols triggered automatically when threats are detected.",
    },
    {
      icon: <Zap className="h-10 w-10 text-moss-500" />,
      title: "Efficient Processing",
      description:
        "High-speed data analysis with minimal latency for quick decision making.",
    },
    {
      icon: <Lock className="h-10 w-10 text-moss-500" />,
      title: "Data Protection",
      description:
        "End-to-end encryption ensuring all surveillance data remains secure and private.",
    },
    {
      icon: <Cpu className="h-10 w-10 text-moss-500" />,
      title: "AI Integration",
      description:
        "Machine learning algorithms that continuously improve detection accuracy over time.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-earth-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-earth-600 max-w-3xl mx-auto">
            Our AI-powered surveillance system offers cutting-edge capabilities
            that traditional systems simply cannot match.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-earth-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-earth-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-earth-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
