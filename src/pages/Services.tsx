"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useParams } from "react-router-dom";

export default function Services() {
  const { sub } = useParams();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const aiServicesRef = useRef<HTMLDivElement>(null);
  const iotServicesRef = useRef<HTMLDivElement>(null);
  const blockchainRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const tieredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Extract category from URL hash if present
    if (sub) {
      const category = sub;
      setActiveCategory(category);
    }
  }, [sub]);

  // Function to check if a section should be displayed based on active category
  const shouldDisplaySection = (sectionId: string) => {
    if (!activeCategory) return true; // Show all sections if no category is selected
    return sectionId === activeCategory || activeCategory.startsWith(sectionId);
  };

  return (
    <>
      <Navbar />
      <section className="pt-32 pb-20 bg-earth-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-earth-900 mb-4">
                Our Services
              </h1>
              <p className="text-lg text-earth-700">
                We offer a wide range of innovative, AI-powered, and digital
                transformation services tailored to meet the evolving needs of
                businesses across industries. Explore how we empower smarter
                operations, secure environments, and seamless experiences.
              </p>
            </div>

            {/* AI Enabled Services */}
            {shouldDisplaySection("ai-enabled") && (
              <div id="ai-enabled" ref={aiServicesRef} className="mb-20">
                <h2 className="text-3xl font-bold text-earth-900 mb-6 pb-2 border-b-2 border-moss-300">
                  AI Enabled Services
                </h2>
                <p className="text-earth-700 mb-6">
                  Harness the power of Artificial Intelligence to transform
                  traditional processes into intelligent, automated solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div
                    id="attendance-security"
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-earth-800 mb-3">
                        Attendance and Security
                      </h3>
                      <p className="text-earth-700 mb-4">
                        Secure and efficient systems designed to simplify access
                        control and employee attendance through advanced
                        technology.
                      </p>
                      <ul className="list-disc list-inside text-earth-600 space-y-1">
                        <li>
                          Facial recognition-based attendance: Automated
                          check-ins with high accuracy and zero human
                          intervention
                        </li>
                        <li>
                          Biometric access control: Enhanced security using
                          fingerprint and retina scan systems
                        </li>
                        <li>
                          Real-time monitoring and alerts: Instant notifications
                          and dashboards for proactive management
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    id="human-activity"
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-earth-800 mb-3">
                        Human Activity Surveillance
                      </h3>
                      <p className="text-earth-700 mb-4">
                        Stay ahead of security risks and operational
                        inefficiencies with intelligent monitoring.
                      </p>
                      <ul className="list-disc list-inside text-earth-600 space-y-1">
                        <li>
                          Behavior analysis: AI models that track and understand
                          human behavior patterns
                        </li>
                        <li>
                          Anomaly detection: Identify unusual activity in
                          real-time for quick response
                        </li>
                        <li>
                          Pattern recognition: Continuous learning to refine
                          surveillance insights
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    id="traffic-planning"
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-earth-800 mb-3">
                        Traffic & Crowd Planning
                      </h3>
                      <p className="text-earth-700 mb-4">
                        Optimize movement and public safety in urban spaces.
                      </p>
                      <ul className="list-disc list-inside text-earth-600 space-y-1">
                        <li>
                          Real-time traffic analysis: Monitor congestion,
                          incidents, and vehicle flow
                        </li>
                        <li>
                          Crowd density monitoring: Analyze foot traffic in
                          public areas and events
                        </li>
                        <li>
                          Predictive congestion management: Use historical and
                          live data to prevent bottlenecks
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div
                    id="transportation"
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-earth-800 mb-3">
                        Transportation Management
                      </h3>
                      <p className="text-earth-700 mb-4">
                        Revolutionize transportation and logistics operations.
                      </p>
                      <ul className="list-disc list-inside text-earth-600 space-y-1">
                        <li>
                          Fleet tracking & management: Live GPS tracking and
                          remote diagnostics
                        </li>
                        <li>
                          Route optimization: Reduce fuel usage and travel time
                          using intelligent routing
                        </li>
                        <li>
                          Predictive maintenance: Minimize downtime through
                          data-driven alerts and forecasts
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* IOT Services */}
            {shouldDisplaySection("iot") && (
              <div id="iot" ref={iotServicesRef} className="mb-20">
                <h2 className="text-3xl font-bold text-earth-900 mb-6 pb-2 border-b-2 border-moss-300">
                  IoT Services
                </h2>
                <p className="text-earth-700 mb-6">
                  Connect, monitor, and manage devices with our end-to-end IoT
                  solutions:
                </p>
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                  <ul className="list-disc list-inside text-earth-600 space-y-3">
                    <li>
                      Smart environment creation with real-time data collection
                      and automation
                    </li>
                    <li>
                      Seamless device integration for remote access and control
                    </li>
                    <li>
                      Scalable architecture for enterprise-wide IoT ecosystems
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Blockchain */}
            {shouldDisplaySection("blockchain") && (
              <div id="blockchain" ref={blockchainRef} className="mb-20">
                <h2 className="text-3xl font-bold text-earth-900 mb-6 pb-2 border-b-2 border-moss-300">
                  Blockchain Solutions
                </h2>
                <p className="text-earth-700 mb-6">
                  Ensure data integrity and transparency with decentralized
                  digital systems:
                </p>
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                  <ul className="list-disc list-inside text-earth-600 space-y-3">
                    <li>
                      Custom blockchain development tailored to your business
                      use case
                    </li>
                    <li>
                      Secure and immutable records for finance, supply chain,
                      identity, and more
                    </li>
                    <li>
                      Enhanced security with smart contracts and distributed
                      ledger technology
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Media and Entertainment */}
            {shouldDisplaySection("media") && (
              <div id="media" ref={mediaRef} className="mb-20">
                <h2 className="text-3xl font-bold text-earth-900 mb-6 pb-2 border-b-2 border-moss-300">
                  Media & Entertainment Solutions
                </h2>
                <p className="text-earth-700 mb-6">
                  Take your content strategy to the next level with advanced
                  digital media services:
                </p>
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                  <ul className="list-disc list-inside text-earth-600 space-y-3">
                    <li>AI-enhanced media production and post-processing</li>
                    <li>
                      Smart content delivery platforms with adaptive streaming
                    </li>
                    <li>
                      Interactive tools for audience engagement and performance
                      tracking
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Tiered Services */}
            {shouldDisplaySection("tiered") && (
              <div id="tiered" ref={tieredRef} className="mb-20">
                <h2 className="text-3xl font-bold text-earth-900 mb-6 pb-2 border-b-2 border-moss-300">
                  Tiered IT Support Services
                </h2>
                <p className="text-earth-700 mb-6">
                  Flexible IT support designed to grow with your business:
                </p>
                <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                  <ul className="list-disc list-inside text-earth-600 space-y-3">
                    <li>
                      Basic to Advanced Support: Choose the level of support
                      that fits your needs
                    </li>
                    <li>
                      24/7 Monitoring & Response: Proactive troubleshooting and
                      performance optimization
                    </li>
                    <li>
                      Scalable Plans: Easily upgrade as your operations expand
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
