"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Eye, Cpu, Lock, Building } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const attemptAutoplay = async () => {
      if (videoRef.current) {
        try {
          const autoplayAllowed = await document.documentElement
            .requestFullscreen()
            .then(() => {
              document.exitFullscreen();
              return true;
            })
            .catch(() => false);

          if (autoplayAllowed) {
            await videoRef.current.play();
          }
        } catch (error) {
          console.log("Autoplay not allowed or video source issue:", error);
          setVideoError(true);
        }
      }
    };

    // Actually call the function
    attemptAutoplay();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden">
      {/* Background with fallback */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <div className="relative w-full h-full">
            {/* Use a high-quality image as background */}
            <img
              src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920&q=80"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-earth-900/70"></div>
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-earth-800 to-moss-700"></div>
        )}
      </div>

      <div className="container mx-auto px-4 z-10 relative pt-32 pb-20">
        <div className="max-w-3xl mx-auto mb-12">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI-Powered Smart Surveillance: Revolutionizing Security
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Traditional surveillance systems are no longer sufficient. Our
            AI-Powered Smart Surveillance provides unmanned, intelligent,
            real-time AI monitoring and threat detection.
          </motion.p>

          <motion.p
            className="text-lg text-white/80 mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tapping into the projected $16.3B AI video surveillance market by
            2028.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              className="bg-earth-100 text-earth-800 hover:bg-earth-200 text-lg py-6 px-8"
              asChild
            >
              <Link to="/services">Our Services</Link>
            </Button>
            <Button
              variant="outline"
              className="border-earth-100 text-earth-100 hover:bg-earth-900/30 text-lg py-6 px-8"
              asChild
            >
              <Link to="/request-demo">Request Demo</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="h-8 w-8 text-moss-400" />,
                title: "Retail Security",
                description:
                  "Prevent theft and ensure customer safety with intelligent monitoring.",
              },
              {
                icon: <Lock className="h-8 w-8 text-moss-400" />,
                title: "Banking Protection",
                description:
                  "Secure financial institutions with advanced threat detection.",
              },
              {
                icon: <Eye className="h-8 w-8 text-moss-400" />,
                title: "Healthcare Safety",
                description:
                  "Monitor patient areas and secure sensitive medical facilities.",
              },
              {
                icon: <Building className="h-8 w-8 text-moss-400" />,
                title: "Corporate Security",
                description:
                  "Protect your business assets and employees with smart surveillance.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="bg-earth-900/50 backdrop-blur-sm p-6 rounded-lg border border-earth-700 hover:border-moss-600 transition-colors duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-earth-200">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
