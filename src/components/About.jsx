import React from 'react';
import { Code, Database, Server, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Code,
      color: 'from-[#D6A77A] to-[#C08B8B]',
      technologies: ['JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Redux'],
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'from-[#C08B8B] to-[#A45D5D]',
      technologies: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth'],
    },
    {
      category: 'Database',
      icon: Database,
      color: 'from-[#B18664] to-[#D6A77A]',
      technologies: ['MongoDB', 'Mongoose', 'MySQL'],
    },
    {
      category: 'Tools & Others',
      icon: Zap,
      color: 'from-[#8A6652] to-[#C08B8B]',
      technologies: ['Git', 'Vercel', 'Postman'],
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#1F1F1F] text-[#F0EDE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-[#D6A77A] to-[#C08B8B] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
            Aspiring MERN Stack Developer focused on building clean, responsive web applications with modern technologies.
          </p>
        </div>

        {/* About Text and Stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-[#A1A1A1]">
            <p className="text-lg leading-relaxed">
              I’m Fathima Naja, a passionate full-stack developer trained in the MERN stack, with a strong interest in frontend design and user experience.
              My journey into web development began from a place of curiosity and has grown into a focused career path through hands-on learning and real-world projects.
            </p>
            <p className="text-lg leading-relaxed">
              I'm committed to writing clean, maintainable code and love turning complex problems into elegant, usable interfaces.
              Recently, I've worked on e-commerce platforms, travel booking site, and home-feast-connect platform using React, Next.js, Tailwind CSS, and Redux.
            </p>

            {/* Stats Boxes */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-[#2B2B2B] text-[#F0EDE5] border border-[#3A3A3A] rounded-lg">
                <div className="text-3xl font-bold text-[#D6A77A] mb-2">3</div>
                <div className="text-[#A1A1A1]">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-[#2B2B2B] text-[#F0EDE5] border border-[#3A3A3A] rounded-lg">
                <div className="text-3xl font-bold text-[#C08B8B] mb-2">1</div>
                <div className="text-[#A1A1A1]">Internship</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ category, icon: Icon, color, technologies }) => (
            <div
              key={category}
              className="group p-6 bg-[#2B2B2B] text-[#F0EDE5] rounded-xl border border-[#3A3A3A] hover:border-[#D6A77A] transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{category}</h3>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-[#A1A1A1] bg-[#1F1F1F] px-3 py-1 rounded-full border border-[#3A3A3A]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
