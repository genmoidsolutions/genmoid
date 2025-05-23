"use client";
import React, { useState } from 'react';
import { 
  Code, 
  Rocket, 
  Users, 
  Lightbulb, 
  Phone, 
  Mail, 
  Github, 
  ExternalLink,
  Star,
  BookOpen,
  Briefcase,
  ShoppingCart,
  Send,
  Play,
  Filter,
  Calendar,
  MapPin,
  DollarSign,
  CheckCircle,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

export default function GenmoidHomepage() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [ideaForm, setIdeaForm] = useState({ 
    title: '', 
    description: '', 
    techStack: '', 
    timeline: '', 
    contact: '' 
  });

  const projects = [
    {
      id: 1,
      title: "E-Commerce Web App",
      category: "web",
      tech: ["React", "Node.js", "MongoDB"],
      price: 2999,
      description: "Full-stack e-commerce solution with admin panel, payment gateway, and inventory management.",
      demo: "🎥 Demo Available",
      rating: 4.9
    },
    {
      id: 2,
      title: "AI Chatbot System",
      category: "ml",
      tech: ["Python", "TensorFlow", "Flask"],
      price: 3999,
      description: "Intelligent chatbot with NLP capabilities for customer service automation.",
      demo: "🎥 Demo Available",
      rating: 4.8
    },
    {
      id: 3,
      title: "IoT Home Automation",
      category: "iot",
      tech: ["Arduino", "ESP32", "React"],
      price: 2499,
      description: "Complete home automation system with mobile app control and sensor integration.",
      demo: "🎥 Demo Available",
      rating: 4.7
    },
    {
      id: 4,
      title: "Stock Price Predictor",
      category: "ml",
      tech: ["Python", "Pandas", "Scikit-learn"],
      price: 1999,
      description: "Machine learning model for stock price prediction with data visualization dashboard.",
      demo: "🎥 Demo Available",
      rating: 4.6
    }
  ];

  const internships = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      type: "Remote",
      duration: "3 months",
      skills: ["React", "Node.js", "MongoDB"],
      stipend: "₹15,000/month",
      openings: 5
    },
    {
      id: 2,
      title: "Machine Learning Intern",
      type: "Hybrid",
      duration: "4 months",
      skills: ["Python", "TensorFlow", "Data Science"],
      stipend: "₹18,000/month",
      openings: 3
    },
    {
      id: 3,
      title: "Mobile App Developer Intern",
      type: "Remote",
      duration: "3 months",
      skills: ["React Native", "Flutter", "Firebase"],
      stipend: "₹16,000/month",
      openings: 4
    }
  ];

  const pastWork = [
    {
      title: "EdTech Platform for XYZ College",
      description: "Built a comprehensive learning management system serving 5000+ students",
      tech: ["React", "Node.js", "PostgreSQL"],
      result: "40% improvement in student engagement"
    },
    {
      title: "Healthcare Management System",
      description: "Developed patient management and appointment scheduling system",
      tech: ["Python", "Django", "MySQL"],
      result: "Reduced appointment wait time by 60%"
    },
    {
      title: "Smart Agriculture IoT Solution",
      description: "Automated irrigation system with weather prediction integration",
      tech: ["Arduino", "Python", "React"],
      result: "30% water consumption reduction"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleIdeaSubmit = (e) => {
    e.preventDefault();
    alert('Your project idea has been submitted successfully! Our team will review it and get back to you.');
    setIdeaForm({ title: '', description: '', techStack: '', timeline: '', contact: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Genmoid Solutions
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">Home</a>
              <a href="#internships" className="text-gray-300 hover:text-purple-400 transition-colors">Internships</a>
              <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">Projects</a>
              <a href="#work" className="text-gray-300 hover:text-purple-400 transition-colors">Our Work</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Empowering&nbsp;
              </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Students&nbsp;
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Through Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Your gateway to premium internships, readymade projects, and turning ideas into reality. 
              Join thousands of students who've accelerated their careers with Genmoid Solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span>Buy Projects</span>
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 rounded-full text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all flex items-center space-x-2">
              <Briefcase className="w-5 h-5" />
              <span>Join Internship</span>
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full text-white font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 flex items-center space-x-2">
              <Lightbulb className="w-5 h-5" />
              <span>Submit Idea</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">500+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">1000+</div>
              <div className="text-gray-400">Students Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400">50+</div>
              <div className="text-gray-400">College Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">4.9</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Current Internship Openings</h2>
            <p className="text-gray-400 text-lg">Kickstart your career with hands-on experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship) => (
              <div key={internship.id} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{internship.title}</h3>
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                    {internship.openings} openings
                  </span>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                    {internship.type}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                    {internship.duration}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <DollarSign className="w-4 h-4 mr-2 text-purple-400" />
                    {internship.stipend}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">Required Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, index) => (
                      <span key={index} className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Apply Now</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Readymade Projects</h2>
            <p className="text-gray-400 text-lg">High-quality projects ready for submission</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800/50 rounded-full p-2 flex space-x-2">
              {[
                { key: 'all', label: 'All Projects' },
                { key: 'web', label: 'Web Dev' },
                { key: 'ml', label: 'Machine Learning' },
                { key: 'iot', label: 'IoT' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeTab === tab.key
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400">{project.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-400">₹{project.price}</span>
                    <span className="text-purple-400 flex items-center space-x-1">
                      <Play className="w-4 h-4" />
                      <span>{project.demo}</span>
                    </span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center space-x-2">
                      <ShoppingCart className="w-4 h-4" />
                      <span>Buy Now</span>
                    </button>
                    <button className="px-4 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Idea Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Have a Project Idea?</h2>
          <p className="text-gray-400 text-lg mb-12">Share your vision and let us bring it to life</p>
          
          <form onSubmit={handleIdeaSubmit} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Project Title"
                value={ideaForm.title}
                onChange={(e) => setIdeaForm({...ideaForm, title: e.target.value})}
                className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Tech Stack (e.g., React, Python)"
                value={ideaForm.techStack}
                onChange={(e) => setIdeaForm({...ideaForm, techStack: e.target.value})}
                className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                required
              />
            </div>
            
            <textarea
              placeholder="Describe your project idea in detail..."
              value={ideaForm.description}
              onChange={(e) => setIdeaForm({...ideaForm, description: e.target.value})}
              rows={4}
              className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none mb-6"
              required
            />
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Expected Timeline"
                value={ideaForm.timeline}
                onChange={(e) => setIdeaForm({...ideaForm, timeline: e.target.value})}
                className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={ideaForm.contact}
                onChange={(e) => setIdeaForm({...ideaForm, contact: e.target.value})}
                className="bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all flex items-center justify-center space-x-2"
            >
              <Lightbulb className="w-5 h-5" />
              <span>Submit Your Idea</span>
            </button>
          </form>
        </div>
      </section>

      {/* Past Work Section */}
      <section id="work" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Past Work</h2>
            <p className="text-gray-400 text-lg">Proven track record of successful projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWork.map((work, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">{work.title}</h3>
                <p className="text-gray-400 mb-4">{work.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span className="font-semibold">{work.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg">Ready to start your journey? Let's talk!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              <form onSubmit={handleContactSubmit}>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    rows={4}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-3 text-purple-400" />
                    <span>contact@genmoidsolutions.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3 text-purple-400" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MessageCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>WhatsApp: +91 98765 43210</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all flex items-center justify-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                  </button>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Email Us</span>
                  </button>
                  <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all flex items-center justify-center space-x-2">
                    <Github className="w-4 h-4" />
                    <span>View GitHub</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Genmoid Solutions</span>
              </div>
              <p className="text-gray-400">Empowering students through innovative technology solutions and career opportunities.</p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Internship Programs</li>
                <li>Readymade Projects</li>
                <li>Custom Development</li>
                <li>Mentorship</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Web Development</li>
                <li>Machine Learning</li>
                <li>Mobile Apps</li>
                <li>IoT Solutions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <Github className="w-5 h-5 text-gray-400" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <MessageCircle className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 Genmoid Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-purple-500/25 flex items-center justify-center text-white hover:scale-110 transition-all">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
        >
          <ArrowRight className="w-5 h-5 transform -rotate-90" />
        </button>
      </div>
    </div>
  );
}