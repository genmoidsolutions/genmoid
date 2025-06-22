
      import Image from "next/image";
      import { MessageSquareMore, Facebook, Instagram, Linkedin } from "lucide-react";
      import React from "react";
      
      const Footer: React.FC = () => (
        <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2">
                  <div className="w-15 h-15 bg-transparent rounded-2xl flex items-center justify-center">
                    <Image
                      alt="Genmoid Solutions Logo"
                      className="w-16 h-16"
                      height={64}
                      src="/logo6.png"
                      width={64}
                    />
                  </div>
                  <span className="text-2xl font-bold text-[#0256ed]">
                    Genmoid Solutions
                  </span>
                </div>
                <p className="text-gray-400 mb-4">
                  Empowering students and businesses through innovative technology
                  solutions.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/917030020973"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <MessageSquareMore className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
      
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/services/web-development"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/mobile-apps"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Mobile Apps
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/machine-learning"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Machine Learning
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/iot-solutions"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      IoT Solutions
                    </a>
                  </li>
                </ul>
              </div>
      
              <div>
                <h4 className="font-semibold mb-4">Programs</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/programs/internships"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Internships
                    </a>
                  </li>
                  <li>
                    <a
                      href="/programs/training"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Training
                    </a>
                  </li>
                  <li>
                    <a
                      href="/programs/certification"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Certification
                    </a>
                  </li>
                  <li>
                    <a
                      href="/programs/mentorship"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Mentorship
                    </a>
                  </li>
                </ul>
              </div>
      
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/about"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="/career"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
      
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Genmoid Solutions. All rights reserved. Made with ❤️ for
                students and innovators.
              </p>
            </div>
          </div>
        </footer>
      );
      
      export default Footer;