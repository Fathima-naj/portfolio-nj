import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Home, User, Briefcase, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            {/* <Code className="h-8 w-8 text-blue-400" /> */}
            <span className="text-xl font-bold text-white">Fathima Naja.p</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: 'Home', id: 'home', icon: Home },
              { name: 'About', id: 'about', icon: User },
              { name: 'Projects', id: 'projects', icon: Briefcase },
              { name: 'Contact', id: 'contact', icon: Mail },
            ].map(({ name, id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="flex items-center space-x-1 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <Icon className="h-4 w-4" />
                <span>{name}</span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-400 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
            <nav className="flex flex-col space-y-4">
              {[
                { name: 'Home', id: 'home', icon: Home },
                { name: 'About', id: 'about', icon: User },
                { name: 'Projects', id: 'projects', icon: Briefcase },
                { name: 'Contact', id: 'contact', icon: Mail },
              ].map(({ name, id, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 px-4"
                >
                  <Icon className="h-4 w-4" />
                  <span>{name}</span>
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;