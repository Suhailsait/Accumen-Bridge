"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
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
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-earth-900 mb-4">
                Request a Demo
              </h1>
              <p className="text-lg text-earth-700">
                Experience the power of our solutions firsthand. Fill out the
                form below and our team will get in touch with you to schedule a
                personalized demo.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8"
                >
                  <div className="bg-moss-100 text-moss-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-earth-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-earth-700">
                    Your demo request has been submitted successfully. Our team
                    will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-earth-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-earth-200 focus:outline-none focus:ring-2 focus:ring-earth-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-earth-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-earth-200 focus:outline-none focus:ring-2 focus:ring-earth-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-earth-700 mb-1"
                      >
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-earth-200 focus:outline-none focus:ring-2 focus:ring-earth-500"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-earth-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-earth-200 focus:outline-none focus:ring-2 focus:ring-earth-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-earth-700 mb-1"
                    >
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-earth-200 focus:outline-none focus:ring-2 focus:ring-earth-500"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <optgroup label="AI Enabled Services">
                        <option value="attendance-security">
                          Attendance and Security
                        </option>
                        <option value="human-activity">
                          Human Activity Surveillance
                        </option>
                        <option value="traffic-planning">
                          Traffic / Crowd Planning
                        </option>
                        <option value="transportation">
                          Transportation Management
                        </option>
                        <option value="doctor-patient">
                          Doctor Patient Module
                        </option>
                        <option value="genai">
                          GenAI and Agentic AI Services
                        </option>
                        <option value="digital-marketing">
                          Digital Marketing Assistant
                        </option>
                        <option value="receptionist">Receptionist AI</option>
                      </optgroup>
                      <optgroup label="IOT Services">
                        <option value="farming">
                          Device Assisted Farming Technologies
                        </option>
                        <option value="home-automation">Home Automation</option>
                      </optgroup>
                      <optgroup label="Blockchain">
                        <option value="blockchain">Blockchain Services</option>
                      </optgroup>
                      <optgroup label="Media and Entertainment">
                        <option value="remastering">Media Remastering</option>
                        <option value="filmmaking">Film Making</option>
                        <option value="editing">Editing</option>
                      </optgroup>
                      <optgroup label="Tiered Services">
                        <option value="it-support">
                          L1 & L2 IT Support Services
                        </option>
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-earth-700 mb-1"
                    >
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-earth-200 focus:outline-none focus:ring-2 focus:ring-earth-500"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full bg-earth-700 hover:bg-earth-800 text-white py-3 px-6 rounded-md transition-colors duration-300"
                    >
                      Request Demo
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
