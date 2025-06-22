"use client";
import React from "react";
import { CheckCircle, Users, Target, Award, Lightbulb } from "lucide-react";

const AboutPage = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "We Imagine",
      description: "Turning visionary ideas into practical solutions",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "We Engineer",
      description: "Building robust, scalable technology solutions",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "We Modernize",
      description: "Upgrading systems with cutting-edge technology",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "We Manage",
      description: "Ensuring seamless operation and maintenance",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "1000+", label: "Students Trained" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Genmoid Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a trusted Software Development and IT Services company,
            combining deep technical expertise and industry experience to help
            students and businesses achieve their goals.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 px-4 bg-white" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                We Are Genmoid Solutions
              </h2>
              <h5 className="text-xl text-blue-600 mb-6">
                At Genmoid Solutions, we have experience helping our customers
                solve key business challenges to achieve their goals with
                solutions in real-world applications. Find your path to faster
                success.
              </h5>
            </div>
            <div>
              <p className="text-gray-700 mb-6">
                We offer reliable, efficient delivery with high-caliber
                engineers & finely-tuned software development processes. We
                believe in Leadership to lead the technology to build a better
                future, Integrity to follow truth and be real, Accountability
                for our every commitment.
              </p>
              <div className="space-y-3 mb-6">
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
                that&apos;s purpose-built to solve the challenges holding your
                organization back.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
