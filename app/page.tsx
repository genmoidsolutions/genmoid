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
  MessageSquareMore,
  Code,
  Smartphone,
  Brain,
  Wifi,
} from "lucide-react";
import Image from "next/image";

export default function GenmoidHomepage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      title: "Welcome to Genmoid Solutions",
      subtitle: "Empowering Students Through Technology",
      description:
        "We are a trusted Software Development and IT Services company, combining deep technical expertise and industry experience to help students and businesses anticipate what's next.",
      cta: "Let's work together",
      accent: "from-blue-600 to-indigo-600",
    },
    {
      title: "Everything starts with ambition",
      subtitle: "Transform Ideas into Reality",
      description:
        "If you can think it, we can develop it. We turn bold ideas into groundbreaking business solutions for a tomorrow built on technology.",
      cta: "What's Your Ambition?",
      accent: "from-emerald-600 to-teal-600",
    },
    {
      title: "Internship Program for Students",
      subtitle: "Learn, Build, Succeed",
      description:
        "Get hands-on experience with real projects, mentorship from industry experts, and certification that matters. Join thousands of students who have kickstarted their careers with us.",
      cta: "Join Our Program",
      accent: "from-orange-600 to-red-600",
    },
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with cutting-edge technologies.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android platforms.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description:
        "AI-powered solutions and data analytics to drive intelligent business decisions.",
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "IoT Solutions",
      description:
        "Connected devices and smart automation systems for modern businesses.",
    },
  ];

  const pastWork = [
    {
      title: "EdTech Platform for XYZ College",
      description:
        "Built a comprehensive learning management system serving 5000+ students with interactive courses and assessments.",
      tech: ["React", "Node.js", "PostgreSQL"],
      result: "40% improvement in student engagement",
      category: "Education",
    },
    {
      title: "Healthcare Management System",
      description:
        "Developed patient management and appointment scheduling system for a multi-specialty hospital.",
      tech: ["Python", "Django", "MySQL"],
      result: "Reduced appointment wait time by 60%",
      category: "Healthcare",
    },
    {
      title: "Smart Agriculture IoT Solution",
      description:
        "Automated irrigation system with weather prediction integration for sustainable farming.",
      tech: ["Arduino", "Python", "React"],
      result: "30% water consumption reduction",
      category: "IoT",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen bg-gray-50 overflow-hidden pt-16"
      >
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <div className="h-full flex items-center justify-center">
              <div className="max-w-4xl mx-auto text-center px-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
                  {slide.subtitle}
                </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
                  {slide.description}
                </p>
                <button
                  className={`bg-gradient-to-r ${slide.accent} text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all transform hover:-translate-y-1`}
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg text-gray-800 p-3 rounded-full hover:bg-gray-50 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg text-gray-800 p-3 rounded-full hover:bg-gray-50 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === activeSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                We Are Genmoid Solutions
              </h2>
              <h5 className="text-xl text-gray-600 mb-6">
                At Genmoid Solutions, we have experience helping our customers
                solve key business challenges to achieve their goals with
                solutions in real-world applications.
              </h5>
            </div>
            <div>
              <p className="text-gray-700 mb-6">
                We offer reliable, efficient delivery with high-caliber
                engineers & finely-tuned software development processes. We
                believe in Leadership, Integrity, and Accountability for every
                commitment we make.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">We Imagine</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">We Engineer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">We Modernize</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">We Manage</span>
                </div>
              </div>
              <p className="text-gray-600 italic">
                Increasing revenue, improving efficiency, reducing cost—these
                are all accomplished by implementing innovative technology
                that&apos;s purpose-built to solve your challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive technology solutions for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Work Section */}
      <section id="work" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Past Work
            </h2>
            <p className="text-gray-600 text-lg">
              Successful projects that made a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWork.map((work, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm inline-block mb-4">
                  {work.category}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {work.title}
                </h3>
                <p className="text-gray-600 mb-4">{work.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-50 text-blue-600 px-2 py-1 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="bg-green-50 text-green-600 px-3 py-2 rounded-lg text-sm">
                  📈 {work.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}
