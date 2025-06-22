"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  Headphones,
  Award,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
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

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contact@genmoidsolutions.com",
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9876543210",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Pune, Maharashtra, India",
      description: "Come visit our office",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      value: "9:00 AM - 6:00 PM",
      description: "Monday to Friday",
    },
  ];

  const features = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Team",
      description: "5+ years of industry experience",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Quick Response",
      description: "We respond within 24 hours",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? Let&apos;s discuss your requirements
            and bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a Message
              </h3>

              <div className="space-y-6">
                <div>
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="name"
                  >
                    Name *
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
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
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="email"
                  >
                    Email *
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
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
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="subject"
                  >
                    Subject *
                  </label>
                  <input
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
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
                  <label
                    className="block text-gray-700 font-medium mb-2"
                    htmlFor="message"
                  >
                    Message *
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 h-32 resize-none"
                    id="message"
                    name="message"
                    placeholder="Describe your project requirements..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2 font-semibold"
                  onClick={handleSubmit}
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">{info.title}</p>
                        <p className="text-gray-900 font-semibold">
                          {info.value}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity, but most web
                development projects take 2-6 weeks, while mobile apps can take
                1-3 months.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you provide post-launch support?
              </h3>
              <p className="text-gray-600">
                Yes, we offer comprehensive post-launch support including bug
                fixes, updates, and maintenance for all our projects.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What technologies do you work with?
              </h3>
              <p className="text-gray-600">
                We work with modern technologies including React, Node.js,
                Python, Flutter, React Native, and various AI/ML frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let&apos;s discuss your project and turn your ideas into reality.
            Get in touch today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Schedule a Call
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
