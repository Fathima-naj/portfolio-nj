import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';


function Layout() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <main>
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;