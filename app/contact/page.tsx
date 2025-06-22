"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <section className="py-20 px-4" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg">
              Ready to start your project? Let&apos;s discuss your requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Email</p>
                      <p className="text-white">contact@genmoidsolutions.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Phone</p>
                      <p className="text-white">+91 9876543210</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400">Location</p>
                      <p className="text-white">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Expert team with 5+ years experience</li>
                  <li>• 24/7 customer support</li>
                  <li>• Competitive pricing</li>
                  <li>• Quick turnaround time</li>
                  <li>• Post-delivery support</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Send us a Message
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="name">
                    Name *
                  </label>
                  <input
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="email">
                    Email *
                  </label>
                  <input
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="subject">
                    Subject *
                  </label>
                  <input
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                    id="subject"
                    name="subject"
                    placeholder="Project Subject"
                    required
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none h-32 resize-none"
                    id="message"
                    name="message"
                    placeholder="Describe your project requirements..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center space-x-2"
                  type="submit"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
