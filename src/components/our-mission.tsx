import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <section id="mission" className="py-20 bg-moss-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&q=80"
              alt="Our Mission"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-earth-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-earth-700 mb-6">
              At Accumenbridge, we're committed to revolutionizing security
              through intelligent technology. Our mission is to create safer
              environments by providing advanced AI-powered surveillance
              solutions that are accessible, reliable, and effective.
            </p>
            <p className="text-lg text-earth-700 mb-6">
              We believe that security shouldn't be reactive but proactive. By
              leveraging artificial intelligence and machine learning, we're
              enabling organizations to prevent incidents before they occur,
              protecting what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-earth-100 p-4 rounded-lg">
                <h3 className="font-semibold text-earth-800 mb-2">Vision</h3>
                <p className="text-earth-700">
                  To create a world where intelligent security is the standard,
                  not the exception.
                </p>
              </div>
              <div className="bg-earth-100 p-4 rounded-lg">
                <h3 className="font-semibold text-earth-800 mb-2">Values</h3>
                <p className="text-earth-700">
                  Innovation, integrity, reliability, and customer success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
