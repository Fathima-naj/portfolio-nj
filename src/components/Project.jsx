import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Project = () => {
  const projects = [
    {
      title: 'Home Feast Connect',
      description: 'A social food-sharing platform using maps and live updates. Built with Next.js, Leaflet API, and Tailwind CSS.',
      image: '/deliziare.png',
      technologies: ['Next.js', 'Tailwind', 'Socket.io', 'Express.js', 'Leaflet API'],
      github: 'https://github.com/deliziare-project/deliziare-front-end.git',
      live: 'https://deliziare-front-end.vercel.app/',
    },
    {
      title: 'Travel Planner',
      description: 'Collaborative travel itinerary planner with real-time chat. Built using Clerk for auth, Socket.io for messaging, and MongoDB for persistence.',
      image: '/travel.png',
      technologies: ['React', 'JavaScript', 'Clerk', 'Socket.io', 'Node', 'Express.js', 'MongoDB'],
      github: 'https://github.com/Fathima-naj/Destivia.git',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, payment integration, and admin dashboard. Built with React, Node.js, MongoDB, and Stripe API.',
      image: '/Ecommerce.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Razorpay', 'JWT'],
      github: 'https://github.com/Fathima-naj/FurniNest-Fullstack.git',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0EDE5] mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-[#D6A77A] to-[#C08B8B] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
            A few full-stack projects that reflect my development skills and passion for building useful web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-[#2B2B2B] rounded-2xl overflow-hidden border border-[#3A3A3A] hover:border-[#D6A77A] transition-transform transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={project.image || 'https://via.placeholder.com/400x250?text=Project+Image'}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#F0EDE5] mb-2 group-hover:text-[#D6A77A] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#A1A1A1] text-sm mb-4 line-clamp-3">
                  {project.description || 'No description provided for this project.'}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#1F1F1F] text-[#F0EDE5] text-xs rounded-full border border-[#3A3A3A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-1 text-[#A1A1A1] hover:text-[#F0EDE5] text-sm transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="flex items-center space-x-1 text-[#A1A1A1] hover:text-[#D6A77A] text-sm transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
