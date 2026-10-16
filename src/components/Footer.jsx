import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-16 pb-12 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 px-3 py-1 bg-white border border-slate-200 rounded-lg flex items-center justify-center shadow-sm">
                <img src="/assets/logo.jpg" alt="SMH Rail Logo" className="h-7 object-contain" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-wider text-navy-900">
                SMH <span className="text-lightBlue-600">RAIL</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pr-6">
              Pioneering rolling stock manufacturing and turnkey life extension solutions. Shaping the future of sustainable passenger and freight rail mobility across global frontiers.
            </p>
            <div className="text-xs text-slate-600 space-y-1">
              <div><strong>Headquarters:</strong> A3-01-02, Solaris Dutamas, 50480 Kuala Lumpur, Malaysia</div>
              <div><strong>Manufacturing Plant:</strong> Rasa Complex, Hulu Selangor, Malaysia</div>
              <div><strong>Contact:</strong> +603 6205 3200 | info@smhrail.com.my</div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-heading text-base font-bold text-navy-900 uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/solutions" className="hover:text-lightBlue-600 transition-colors">Urban Metro Systems</Link></li>
              <li><Link to="/solutions" className="hover:text-lightBlue-600 transition-colors">Mainline Locomotives</Link></li>
              <li><Link to="/solutions" className="hover:text-lightBlue-600 transition-colors">MRO & Remanufacturing</Link></li>
              <li><Link to="/solutions" className="hover:text-lightBlue-600 transition-colors">Rail Freight Wagons</Link></li>
              <li><Link to="/solutions" className="hover:text-lightBlue-600 transition-colors">Airport Rail & APM</Link></li>
              <li><Link to="/facilities" className="hover:text-lightBlue-600 transition-colors">Automated Wheel Lathes</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-heading text-base font-bold text-navy-900 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-lightBlue-600 transition-colors">About SMH Rail</Link></li>
              <li><Link to="/facilities" className="hover:text-lightBlue-600 transition-colors">Rasa Mega Facilities</Link></li>
              <li><Link to="/projects" className="hover:text-lightBlue-600 transition-colors">Global Footprint</Link></li>
              <li><Link to="/sustainability" className="hover:text-lightBlue-600 transition-colors">Sustainability & Sukuk</Link></li>
              <li><Link to="/about" className="hover:text-lightBlue-600 transition-colors">IRIS & ISO Accreditations</Link></li>
              <li><Link to="/contact" className="hover:text-lightBlue-600 transition-colors">Contact Engineering Sales</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-heading text-base font-bold text-navy-900 uppercase tracking-wider">Standards</h4>
            <div className="space-y-2 text-xs text-slate-700">
              <div className="p-2.5 rounded bg-white border border-slate-200 shadow-sm">
                <div className="font-bold text-lightBlue-600">IRIS ISO/TS 22163</div>
                <div className="text-[11px] text-slate-500">International Railway Standard</div>
              </div>
              <div className="p-2.5 rounded bg-white border border-slate-200 shadow-sm">
                <div className="font-bold text-lightBlue-600">EN 15085-2 CL1</div>
                <div className="text-[11px] text-slate-500">Railway Vehicle Welding Quality</div>
              </div>
              <div className="p-2.5 rounded bg-white border border-slate-200 shadow-sm">
                <div className="font-bold text-lightBlue-600">ISO 9001:2015</div>
                <div className="text-[11px] text-slate-500">Quality Management Systems</div>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div>&copy; 2026 SMH Rail Sdn Bhd. All rights reserved. | (515279-U)</div>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-lightBlue-600">Privacy Policy</Link>
            <Link to="/" className="hover:text-lightBlue-600">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
