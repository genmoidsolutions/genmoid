"use client";
import React, { useState } from "react";
import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  MessageSquareMore
} from "lucide-react";
import Image from "next/image";
export default function GenmoidHomepage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTab, setActiveTab] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [ideaForm, setIdeaForm] = useState({
    title: "",
    description: "",
    techStack: "",
    timeline: "",
    contact: "",
  });

  const heroSlides = [
    {
      title: "Welcome to Genmoid Solutions",
      subtitle: "Empowering Students Through Technology",
      description: "We are a trusted Software Development and IT Services company, combining deep technical expertise and industry experience to help students and businesses anticipate what's next. Our offerings create unique competitive advantages by giving you the power to see beyond and rise above.",
      cta: "Let's work together",
      background: "bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
    },
    {
      title: "Everything starts with ambition",
      subtitle: "Transform Ideas into Reality",
      description: "If you can think it, we can develop it. We turn bold ideas into groundbreaking business solutions for a tomorrow built on technology. From concept to deployment, we're your technology partner.",
      cta: "What's Your Ambition?",
      background: "bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900"
    },
    {
      title: "Internship Program for Students",
      subtitle: "Learn, Build, Succeed",
      description: "Welcome to our comprehensive internship program designed for students. Get hands-on experience with real projects, mentorship from industry experts, and certification that matters. Join thousands of students who have kickstarted their careers with us.",
      cta: "Join Our Program",
      background: "bg-gradient-to-br from-orange-900 via-red-900 to-pink-900"
    }
  ];

  const pastWork = [
    {
      title: "EdTech Platform for XYZ College",
      description: "Built a comprehensive learning management system serving 5000+ students with interactive courses and assessments.",
      tech: ["React", "Node.js", "PostgreSQL"],
      result: "40% improvement in student engagement",
      image: "🎓"
    },
    {
      title: "Healthcare Management System",
      description: "Developed patient management and appointment scheduling system for a multi-specialty hospital.",
      tech: ["Python", "Django", "MySQL"],
      result: "Reduced appointment wait time by 60%",
      image: "🏥"
    },
    {
      title: "Smart Agriculture IoT Solution",
      description: "Automated irrigation system with weather prediction integration for sustainable farming.",
      tech: ["Arduino", "Python", "React"],
      result: "30% water consumption reduction",
      image: "🌱"
    }
  ];


  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };



  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">

      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'
                } ${slide.background}`}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative h-full flex items-center justify-center">
                <div className="max-w-4xl mx-auto text-center px-4">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl text-purple-300 mb-8 animate-fade-in-delay">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-delay-2">
                    {slide.description}
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all animate-bounce-in">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-black/40 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-black/40 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === activeSlide ? 'bg-purple-500' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">We Are Genmoid Solutions</h2>
              <h5 className="text-xl text-purple-300 mb-6">
                At Genmoid Solutions, we have experience helping our customers solve key business challenges to achieve their goals with solutions in real-world applications. Find your path to faster success.
              </h5>
            </div>
            <div>
              <p className="text-gray-300 mb-6">
                We offer reliable, efficient delivery with high-caliber engineers & finely-tuned software development processes. We believe in Leadership to lead the technology to build a better future, Integrity to follow truth and be real, Accountability for our every commitment.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-300">We Imagine</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-300">We Engineer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-300">We Modernize</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-300">We Manage</span>
                </div>
              </div>
              <p className="text-gray-400 italic">
                Increasing revenue, improving efficiency, reducing cost—these are all accomplished by implementing innovative technology that's purpose-built to solve the challenges holding your organization back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}



      {/* Past Work Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Past Work</h2>
            <p className="text-gray-400 text-lg">Successful projects that made a difference</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWork.map((work, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all">
                <div className="text-6xl mb-4">{work.image}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{work.title}</h3>
                <p className="text-gray-400 mb-4">{work.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-800 text-gray-300 px-2 py-1 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="bg-green-500/20 text-green-300 px-3 py-2 rounded-lg text-sm">
                  📈 {work.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black/40 border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-transparent rounded-xl flex items-center justify-center">
                  <Image
                    src="/logo5.png" // update this to the correct image path
                    alt="Genmoid Solutions Logo"
                    width={10}
                    height={10}
                    className="w-10 h-10"
                  />                </div>
                <span className="text-xl font-bold text-white">Genmoid</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering students and businesses through innovative technology solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://wa.me/917030020973" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                  <MessageSquareMore className="w-5 h-5" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Machine Learning</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">IoT Solutions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Internships</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Training</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Certification</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Mentorship</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Genmoid Solutions. All rights reserved. Made with ❤️ for students and innovators.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}