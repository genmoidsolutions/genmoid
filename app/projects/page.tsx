"use client";
import React, { useState } from "react";
import { Star, ShoppingCart, Play } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Web App",
    category: "web",
    tech: ["React", "Node.js", "MongoDB"],
    price: 2999,
    description:
      "Full-stack e-commerce solution with admin panel, payment gateway, and inventory management.",
    demo: "🎥 Demo Available",
    rating: 4.9,
    features: [
      "Payment Integration",
      "Admin Dashboard",
      "Inventory Management",
      "User Authentication",
    ],
  },
  {
    id: 2,
    title: "AI Chatbot System",
    category: "ml",
    tech: ["Python", "TensorFlow", "Flask"],
    price: 3999,
    description:
      "Intelligent chatbot with NLP capabilities for customer service automation.",
    demo: "🎥 Demo Available",
    rating: 4.8,
    features: [
      "Natural Language Processing",
      "Multi-language Support",
      "Analytics Dashboard",
      "API Integration",
    ],
  },
  {
    id: 3,
    title: "IoT Home Automation",
    category: "iot",
    tech: ["Arduino", "ESP32", "React"],
    price: 2499,
    description:
      "Complete home automation system with mobile app control and sensor integration.",
    demo: "🎥 Demo Available",
    rating: 4.7,
    features: [
      "Voice Control",
      "Mobile App",
      "Sensor Integration",
      "Energy Monitoring",
    ],
  },
  {
    id: 4,
    title: "Stock Price Predictor",
    category: "ml",
    tech: ["Python", "Pandas", "Scikit-learn"],
    price: 1999,
    description:
      "Machine learning model for stock price prediction with data visualization dashboard.",
    demo: "🎥 Demo Available",
    rating: 4.6,
    features: [
      "Real-time Predictions",
      "Data Visualization",
      "Historical Analysis",
      "Risk Assessment",
    ],
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    category: "web",
    tech: ["React", "Express", "MySQL"],
    price: 2299,
    description:
      "Complete social media management dashboard with analytics and scheduling features.",
    demo: "🎥 Demo Available",
    rating: 4.5,
    features: [
      "Post Scheduling",
      "Analytics",
      "Multi-platform Support",
      "Team Collaboration",
    ],
  },
  {
    id: 6,
    title: "Healthcare Management System",
    category: "web",
    tech: ["React", "Django", "PostgreSQL"],
    price: 3499,
    description:
      "Comprehensive healthcare management system with patient records and appointment scheduling.",
    demo: "🎥 Demo Available",
    rating: 4.8,
    features: [
      "Patient Records",
      "Appointment Scheduling",
      "Medical History",
      "Prescription Management",
    ],
  },
];

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState<"all" | "web" | "ml" | "iot">(
    "all",
  );

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Projects Section */}
      <section
        className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50"
        id="projects"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready-to-Use Projects
            </h2>
            <p className="text-gray-400 text-lg">
              High-quality projects with source code and documentation
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/50 rounded-full p-1 backdrop-blur-md">
              <button
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === "all"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("all")}
              >
                All Projects
              </button>
              <button
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === "web"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("web")}
              >
                Web Development
              </button>
              <button
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === "ml"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("ml")}
              >
                Machine Learning
              </button>
              <button
                className={`px-6 py-2 rounded-full transition-all ${
                  activeTab === "iot"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => setActiveTab("iot")}
              >
                IoT
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-400">
                        {project.rating}
                      </span>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-purple-400">
                    ₹{project.price}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded-lg text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded-lg text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-green-400">{project.demo}</span>
                  <div className="flex space-x-2">
                    <button className="bg-gray-800 text-gray-300 px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                      <Play className="w-4 h-4" />
                    </button>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all flex items-center space-x-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
