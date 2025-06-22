"use client";
import React from "react";
import {
  Briefcase,
  Clock,
  MapPin,
  DollarSign,
  Users,
  Star,
} from "lucide-react";

const internships = [
  {
    id: 1,
    title: "Full Stack Developer Intern",
    type: "Remote",
    skills: ["React", "Node.js", "MongoDB"],
    openings: 5,
    duration: "2-3 months",
    stipend: "₹5,000 - ₹8,000",
    level: "Intermediate",
  },
  {
    id: 2,
    title: "Machine Learning Intern",
    type: "Remote",
    skills: ["Python", "TensorFlow", "Data Science"],
    openings: 3,
    duration: "2-3 months",
    stipend: "₹6,000 - ₹10,000",
    level: "Advanced",
  },
  {
    id: 3,
    title: "Mobile App Developer Intern",
    type: "Remote",
    skills: ["React Native", "Flutter", "Firebase"],
    openings: 4,
    duration: "2-3 months",
    stipend: "₹5,000 - ₹8,000",
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Computer Vision Intern",
    type: "Remote",
    skills: ["Python", "OpenCV", "PyTorch"],
    openings: 2,
    duration: "3-4 months",
    stipend: "₹7,000 - ₹12,000",
    level: "Advanced",
  },
  {
    id: 5,
    title: "Android Developer Intern",
    type: "Remote",
    skills: ["Kotlin", "Java", "Android Studio"],
    openings: 6,
    duration: "2-3 months",
    stipend: "₹5,000 - ₹8,000",
    level: "Beginner",
  },
  {
    id: 6,
    title: "Python Developer Intern",
    type: "Remote",
    skills: ["Python", "Django", "Flask"],
    openings: 8,
    duration: "2-3 months",
    stipend: "₹4,000 - ₹7,000",
    level: "Beginner",
  },
];

const benefits = [
  {
    icon: <Star className="w-6 h-6" />,
    title: "Industry Mentorship",
    description: "Learn from experienced professionals",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Collaboration",
    description: "Work on real projects with our team",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Certificate of Completion",
    description: "Get recognized for your achievements",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Performance Bonuses",
    description: "Extra rewards for exceptional work",
  },
];

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Launch Your Career
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join our comprehensive internship program and kickstart your career
            with hands-on experience, mentorship, and industry recognition.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all transform hover:-translate-y-1">
            Apply Now
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Internship?
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive benefits designed for your growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="py-20 px-4 bg-gray-50" id="internships">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Available Positions
            </h2>
            <p className="text-gray-600 text-lg">
              Find the perfect internship opportunity for your skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internships.map((internship) => (
              <div
                key={internship.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <span className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                      {internship.type}
                    </span>
                  </div>
                  <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {internship.level}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {internship.title}
                </h3>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Required Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-600 px-2 py-1 rounded-lg text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-sm text-gray-900">
                        {internship.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500">Stipend</p>
                      <p className="text-sm text-gray-900">
                        {internship.stipend}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{internship.openings} openings</span>
                  </span>
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who have kickstarted their careers with
            us. Apply today and take the first step towards your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              View All Positions
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Contact HR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
