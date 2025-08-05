import React from 'react';
import { Code, Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F1F1F] border-t border-[#2A2A2A]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {/* Main Footer Content */}
    <div className="grid md:grid-cols-3 gap-8 mb-8">
      {/* Brand Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-[#F0EDE5]">Fathima Naja .p</span>
        </div>
        <p className="text-[#A1A1A1] max-w-sm">
          Full-stack MERN developer passionate about creating exceptional web experiences 
          and solving complex problems through code.
        </p>
        <div className="flex space-x-4">
          {[
            { icon: Github, href: 'https://github.com/Fathima-naj', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/fathima-naja-7890a7337', label: 'LinkedIn' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1A1A1] hover:text-[#D6A77A] transition-colors duration-200"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-[#F0EDE5] font-semibold mb-4">Quick Links</h2>
        <ul className="space-y-2">
          {['About', 'Projects', 'Contact'].map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[#A1A1A1] hover:text-[#D6A77A] transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h4 className="text-[#F0EDE5] font-semibold mb-4">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {['JavaScript','React', 'Node.js', 'MongoDB', 'Express', 'Next.js'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#2B2B2B] text-[#DAD2C9] text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="pt-8 border-t border-[#2A2A2A]">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center text-[#A1A1A1] text-sm">
          © {currentYear} Fathima Naja — Built with React, JavaScript & Tailwind CSS
        </div>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;