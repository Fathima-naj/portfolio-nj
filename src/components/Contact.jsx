import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      info: 'pfathinaja@gmail.com',
      link: 'mailto:pfathinaja@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+91 9048940621',
      link: 'tel:+919048940621'
    },
    // {
    //   icon: MapPin,
    //   title: 'Location',
    //   info: 'Malappuram, Kerala, India',
    //   link: 'https://maps.google.com/?q=Kochi,Kerala'
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F0EDE5] mb-4">
            Get In <span className="bg-gradient-to-r from-[#D6A77A] to-[#C08B8B] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-[#A1A1A1] mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, info, link }) => (
                <a
                  key={title}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#D6A77A] to-[#C08B8B] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{title}</h4>
                    <p className="text-gray-400">{info}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4 ">
                {[
                  { icon: Github, href: 'https://github.com/Fathima-naj', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/fathima-naja-7890a7337', label: 'LinkedIn' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#2B2B2B] hover:bg-[#383838] rounded-lg flex items-center justify-center text-gray-400 hover:text-[#D6A77A] transition-all duration-300 transform hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-[#2B2B2B] backdrop-blur-sm rounded-2xl p-8 border border-[#3A3A3A] ">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#A1A1A1] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#2F2F2F] border border-[#3A3A3A] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D6A77A] focus:ring-1 focus:ring-[#3A3A3A]"
                    placeholder="Jane Thomas"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#A1A1A1] mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#2F2F2F] border border-[#3A3A3A] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D6A77A] focus:ring-1 focus:ring-[#3A3A3A]"
                    placeholder="jane@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#A1A1A1] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#2F2F2F] border border-[#3A3A3A] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D6A77A] focus:ring-1 focus:ring-[#3A3A3A]"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#A1A1A1] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#2F2F2F] border border-[#3A3A3A] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D6A77A] focus:ring-1 focus:ring-[#3A3A3A] resize-none"
                  placeholder="Tell me about your project or how I can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[#D6A77A] to-[#C08B8B] hover:from-[#A87D6C] hover:to-[#8D5F5F] transform hover:scale-105'
                } text-white transition-all duration-300`}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
