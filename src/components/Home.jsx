import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, ArrowRight, Download } from 'lucide-react';
import gsap from 'gsap';

const Home = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-tech", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        delay: 0.6,
        duration: 0.6,
      });

      gsap.from(".hero-social", {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        delay: 1,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".scroll-indicator", {
        opacity: 0,
        y: -10,
        delay: 1.5,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-[#1F1F1F] relative overflow-hidden"
    >
      {/* Light background blur elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Initial */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-[#D6A77A] to-[#C08B8B] p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <span className="text-4xl font-bold text-[#A1A1A1]">F</span>
              </div>
            </div>
          </div>

          {/* Main content with animation classes */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-[#F0EDE5] leading-tight hero-title">
                <span className="block">Hi, I'm</span>
                <span className="bg-gradient-to-r from-[#D6A77A] to-[#C08B8B] bg-clip-text  text-transparent">
                Fathima Naja .p
                </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#A1A1A1] max-w-3xl mx-auto hero-subtitle">
              Full-Stack MERN Developer crafting scalable web applications with modern technologies
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-[#D6A77A] hero-tech">
              {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tech, idx) => (
                <span key={idx} className="px-3 py-1 bg-[#2B2B2B] rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8">
              {[
                {
                  icon: Github,
                  href: 'https://github.com/Fathima-naj?tab=overview&from=2024-12-01&to=2024-12-31',
                  label: 'GitHub',
                },
                {
                  icon: Linkedin,
                  href: 'https://www.linkedin.com/in/fathima-naja-7890a7337',
                  label: 'LinkedIn',
                },
              ].map(({ icon: Icon, href, label }, idx) => (
                <a
                  key={label}
                  href={href}
                  className="hero-social text-[#D6A77A] hover:text-[#C08B8B] transition-colors duration-200 transform hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 scroll-indicator">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
