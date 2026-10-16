import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import all your pages from the pages folder
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Facilities from './pages/Facilities';
import Projects from './pages/Projects';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="bg-[#f8fafc] text-slate-800 antialiased min-h-screen flex flex-col justify-between">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}