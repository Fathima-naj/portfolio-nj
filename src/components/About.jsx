import React from 'react';
import { Code, Database, Server, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      technologies: ['JavaScript','React.js', 'Next.js', 'Tailwind CSS', 'Redux']
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      technologies: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth']
    },
    {
      category: 'Database',
      icon: Database,
      color: 'from-purple-500 to-violet-500',
      technologies: ['MongoDB', 'Mongoose', 'MySQL']
    },
    {
      category: 'Tools & Others',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      technologies: ['Git', 'Vercel', 'Postman']
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aspiring MERN Stack Developer focused on building clean, responsive web applications with modern technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Text */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-700">
              <p className="text-lg leading-relaxed">
                I’m Fathima Naja, a passionate full-stack developer trained in the MERN stack, with a strong interest in frontend design and user experience. 
                My journey into web development began from a place of curiosity and has grown into a focused career path through hands-on learning and real-world projects.
              </p>

              <p className="text-lg leading-relaxed">
                I'm committed to writing clean, maintainable code and love turning complex problems into elegant, usable interfaces. 
                Recently, I've worked on e-commerce platforms, travel booking site, and home-feast-connect platform using React,Next.js, Tailwind CSS, and Redux.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-100 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gray-100 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
                <div className="text-gray-600">Internship</div>
              </div>
            </div>
          </div>

          {/* Profile Graphic */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center border border-gray-200">
                <div className="w-64 h-64 rounded-xl bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
                  <Code className="h-24 w-24 text-blue-500" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ category, icon: Icon, color, technologies }) => (
            <div
              key={category}
              className="group p-6 bg-gray-100 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">{category}</h3>

              <div className="space-y-2">
                {technologies.map((tech) => (
                  <div
                    key={tech}
                    className="text-sm text-gray-700 bg-white px-3 py-1 rounded-full inline-block mr-2 mb-1 border border-gray-300"
                  >
                    {tech}
                  </div>
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
