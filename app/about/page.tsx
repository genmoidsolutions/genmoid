"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
    <section className="py-20 px-4 bg-black/20" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              We Are Genmoid Solutions
            </h2>
            <h5 className="text-xl text-purple-300 mb-6">
              At Genmoid Solutions, we have experience helping our customers
              solve key business challenges to achieve their goals with
              solutions in real-world applications. Find your path to faster
              success.
            </h5>
          </div>
          <div>
            <p className="text-gray-300 mb-6">
              We offer reliable, efficient delivery with high-caliber engineers
              & finely-tuned software development processes. We believe in
              Leadership to lead the technology to build a better future,
              Integrity to follow truth and be real, Accountability for our
              every commitment.
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
              Increasing revenue, improving efficiency, reducing cost—these are
              all accomplished by implementing innovative technology that&apos;s
              purpose-built to solve the challenges holding your organization
              back.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
