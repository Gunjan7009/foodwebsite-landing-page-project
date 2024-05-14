import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './components/Golbal.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Menu />
      <Contact />
      < Footer />
    </div>
  );
};

export default App;
