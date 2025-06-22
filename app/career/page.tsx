"use client";
import React from "react";
import { Briefcase } from "lucide-react";

const internships = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    type: "Remote",
    skills: ["React", "Node.js", "MongoDB"],
    openings: 5,
    duration: "2-3 months",
    stipend: "₹5,000 - ₹8,000",
  },
  {
    id: 2,
    title: "Machine Learning Intern",
    type: "Remote",
    skills: ["Python", "TensorFlow", "Data Science"],
    openings: 3,
    duration: "2-3 months",
    stipend: "₹6,000 - ₹10,000",
  },
  {
    id: 3,
    title: "Mobile App Developer Intern",
    type: "Remote",
    skills: ["React Native", "Flutter", "Firebase"],
    openings: 4,
    duration: "2-3 months",
    stipend: "₹5,000 - ₹8,000",
  },
  {
    id: 4,
    title: "Computer Vision Intern",
    type: "Remote",
    skills: ["Python", "OpenCV", "PyTorch"],
    openings: 2,
    duration: "3-4 months",
    stipend: "₹7,000 - ₹12,000",
  },
  {
    id: 5,
    title: "Android Developer Intern",
    type: "Remote",
    skills: ["Kotlin", "Java", "Android Studio"],
    openings: 6,
    duration: "2-3 months",
    stipend: "₹5,000 - ₹8,000",
  },
  {
    id: 6,
    title: "Python Developer Intern",
    type: "Remote",
    skills: ["Python", "Django", "Flask"],
    openings: 8,
    duration: "2-3 months",
    stipend: "₹4,000 - ₹7,000",
  },
];

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <section className="py-20 px-4 bg-black/20" id="internships">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Internship Opportunities
            </h2>
            <p className="text-gray-400 text-lg">
              Join our comprehensive internship program and kickstart your
              career
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship) => (
              <div
                key={internship.id}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-purple-500" />
                    <span className="text-sm bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full">
                      {internship.type}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {internship.openings} openings
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {internship.title}
                </h3>

                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Required Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded-lg text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm text-gray-400">Duration</p>
                    <p className="text-white">{internship.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Stipend</p>
                    <p className="text-white">{internship.stipend}</p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
