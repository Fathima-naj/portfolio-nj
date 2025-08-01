import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Background Decoration (Optional Light Effects) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-800">F</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Fathima Naja .p
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Full-Stack MERN Developer crafting scalable web applications with modern technologies
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-700">
              <span className="px-3 py-1 bg-gray-100 rounded-full">MongoDB</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">Express.js</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">React.js</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full">Node.js</span>
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </button>
            </div> */}

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              {[
                { icon: Github, href: 'https://github.com/Fathima-naj?tab=overview&from=2024-12-01&to=2024-12-31', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/fathima-naja-7890a7337', label: 'LinkedIn' },
                // { icon: Mail, href: '#', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-600 hover:text-black transition-colors duration-200 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
