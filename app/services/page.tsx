"use client";
import React from "react";
import {
  Smartphone,
  Cloud,
  LineChart,
  Cog,
  Network,
  Monitor,
} from "lucide-react";

const services = [
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Data & Analytics",
    description:
      "Transform the way your business makes decisions. Explore our services and solutions designed to help you realize the full potential of your data so you can put it to work for you.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: "Automation AI/ML",
    description:
      "Compete better, reduce time to market, and improve customer experience with our Intelligent Automation solutions and services, accelerators, and frameworks.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Internet of Things (IoT)",
    description:
      "Genmoid helps enterprises connect and monitor devices, secure and automate operations, and compute and manage data effectively.",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description:
      "Genmoid Cloud Services combines industry-leading business solutions with a high-touch approach to help you maximize the transformative potential of the cloud.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Software Development",
    description:
      "We successfully deliver customized software solutions for our clients based on their business requirements, helping them streamline their execution processes.",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "App Development",
    description:
      "We strengthen your business with rich native applications and deliver the best user-friendly experience that makes us one of the best mobile app development companies.",
    color: "from-teal-500 to-green-500",
  },
];

const ServicesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
    <section
      className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-gray-800/50"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">We Provide</h2>
          <p className="text-gray-400 text-lg">
            Comprehensive technology solutions for your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all group"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-4">
                {service.title}
              </h4>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
