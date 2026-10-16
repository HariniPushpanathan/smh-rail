import React, { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-sm font-semibold text-white border-b-2 border-lightBlue-400 pb-1 transition-colors"
      : "text-sm font-semibold text-slate-200 hover:text-lightBlue-400 pb-1 transition-colors";

  const getMobileLinkClass = ({ isActive }) =>
    isActive
      ? "block py-2 text-lightBlue-600 font-bold border-b border-slate-100"
      : "block py-2 text-slate-700 font-semibold border-b border-slate-100 hover:text-lightBlue-600";

  const handleSectionClick = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/solutions') {
      navigate('/solutions');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRfqClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/contact') {
      navigate('/contact');
      setTimeout(() => {
        const el = document.getElementById('rfq-form');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('rfq-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-lightBlue-50 border-b border-lightBlue-100 text-xs py-2 px-4 text-slate-700 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-lightBlue-600/10 text-lightBlue-700 border border-lightBlue-300">
              GLOBAL EXCELLENCE
            </span>
            <span className="text-slate-600">Extending Rolling Stock Lifespans with Certified IRIS & EN 15085 Precision</span>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Rasa Mega-Plant Active
            </span>
            <span className="text-slate-300">|</span>
            <a href="tel:+60362053200" className="hover:text-lightBlue-600 transition-colors font-semibold">+603 6205 3200</a>
            <span className="text-slate-300">|</span>
            <Link to="/contact" className="text-lightBlue-600 font-semibold hover:underline">Headquarters: Kuala Lumpur, Malaysia</Link>
          </div>
        </div>
      </div>

      {/* Primary Sticky Navigation Header */}
      <header className="sticky top-0 z-50 transition-all duration-300 bg-navy-900 backdrop-blur-md border-b border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-11 px-3 py-1 bg-white border border-slate-200 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <img 
                src="/assets/logo.jpg" 
                alt="SMH Rail Logo" 
                className="h-8 object-contain" 
                onError={(e) => { e.target.src = 'https://via.placeholder.com/120x40?text=SMH+RAIL'; }} 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-bold tracking-wider text-white flex items-center gap-1">
                SMH <span className="text-lightBlue-400">RAIL</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-lightBlue-200 -mt-1 font-semibold">Extending Life</span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" className={getLinkClass} end>Home</NavLink>
            
            <div className="relative group flex items-center">
              <NavLink to="/solutions" className={getLinkClass}>
                <span className="flex items-center gap-1">
                  Solutions
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
              </NavLink>
              <div className="absolute left-0 top-full hidden group-hover:block w-72 pt-2">
                <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-xl space-y-1 text-slate-800 cursor-pointer">
                  <div onClick={() => handleSectionClick('urban')} className="block px-3 py-2 rounded-lg hover:bg-lightBlue-50 transition-colors">
                    <div className="text-sm font-bold text-navy-900">Urban Rail Transit</div>
                    <div className="text-xs text-slate-500">MRT1 & MRT2 Driverless Metros, LRT</div>
                  </div>
                  <div onClick={() => handleSectionClick('mainline')} className="block px-3 py-2 rounded-lg hover:bg-lightBlue-50 transition-colors">
                    <div className="text-sm font-bold text-navy-900">Mainline Locomotives</div>
                    <div className="text-xs text-slate-500">H10 Series Eco-Locomotives</div>
                  </div>
                  <div onClick={() => handleSectionClick('airport')} className="block px-3 py-2 rounded-lg hover:bg-lightBlue-50 transition-colors">
                    <div className="text-sm font-bold text-navy-900">Airport Rail & APM</div>
                    <div className="text-xs text-slate-500">Automated People Movers & Express</div>
                  </div>
                  <div onClick={() => handleSectionClick('mro')} className="block px-3 py-2 rounded-lg hover:bg-lightBlue-50 transition-colors">
                    <div className="text-sm font-bold text-navy-900">MRO & Life Extension</div>
                    <div className="text-xs text-slate-500">Heavy Overhaul, Bogies & Wheels</div>
                  </div>
                  <div onClick={() => handleSectionClick('freight')} className="block px-3 py-2 rounded-lg hover:bg-lightBlue-50 transition-colors">
                    <div className="text-sm font-bold text-navy-900">Rail Freight Wagons</div>
                    <div className="text-xs text-slate-500">Ballast, Hoppers & Container Flats</div>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/facilities" className={getLinkClass}>Facilities</NavLink>
            <NavLink to="/projects" className={getLinkClass}>Global Projects</NavLink>
            <NavLink to="/sustainability" className={getLinkClass}>Sustainability</NavLink>
            <NavLink to="/about" className={getLinkClass}>About Us</NavLink>
            <NavLink to="/contact" className={getLinkClass}>Contact</NavLink>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSearchOpen(true)}
              className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-lightBlue-400 text-slate-300 hover:text-white transition-colors"
              title="Search website"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>

            {/* Fleet RFQ Button with Smooth Scroll Handler */}
            <a 
              href="/contact#rfq-form" 
              onClick={handleRfqClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-lightBlue-600 hover:bg-lightBlue-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-105 cursor-pointer"
            >
              <span>Fleet RFQ</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>

        </div>

        {/* Mobile Slide-out Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-2 shadow-md text-slate-800">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass} end>Home</NavLink>
            <NavLink to="/solutions" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass}>Our Solutions</NavLink>
            <NavLink to="/facilities" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass}>Manufacturing Facilities</NavLink>
            <NavLink to="/projects" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass}>Global Track Record</NavLink>
            <NavLink to="/sustainability" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass}>Sustainability & ESG</NavLink>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass}>About SMH Rail</NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass}>Contact & RFQ Configurator</NavLink>
          </div>
        )}
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
