import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  // Search database indexing your site's content
  const searchItems = [
    { title: 'H10 Series Eco-Locomotive', category: 'Mainline Locomotives', path: '/solutions' },
    { title: 'MRT2 Driverless Metro (GoA4)', category: 'Urban Rail Transit', path: '/solutions' },
    { title: 'Rasa Mega Manufacturing Complex', category: 'Facilities', path: '/facilities' },
    { title: 'Precision Wheelset & Bogie Center', category: 'Facilities', path: '/facilities' },
    { title: 'Global Track Record & Footprint', category: 'Global Projects', path: '/projects' },
    { title: 'BMSB Sustainability Sukuk & ESG', category: 'Sustainability', path: '/sustainability' },
    { title: 'Corporate Headquarters Kuala Lumpur', category: 'Contact', path: '/contact' },
    { title: 'Fleet RFQ Configurator', category: 'Contact', path: '/contact' }
  ];

  const filteredItems = query.trim() === '' 
    ? [] 
    : searchItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4">
      <div className="bg-white border border-slate-200 w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 flex-1">
            <svg className="w-5 h-5 text-lightBlue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <input 
              autoFocus
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search rolling stock, facilities, countries (e.g. MRT, H10, Wheel, Malaysia)..." 
              className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-sm outline-none"
            />
          </div>
          <button 
            onClick={onClose}
            className="text-xs uppercase font-bold text-slate-500 hover:text-navy-900 px-2 py-1 rounded bg-slate-100"
          >
            ESC
          </button>
        </div>

        {/* Results Box */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="text-xs text-slate-400 text-center py-4">
              Type a query above to quickly jump to any railway solution, plant, or project record.
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-xs text-slate-500 text-center py-4">
              No results found for "<span className="font-bold">{query}</span>". Try searching for "MRT", "Locomotive", or "Rasa".
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => handleSelect(item.path)}
                className="p-3 rounded-xl hover:bg-lightBlue-50 border border-slate-100 hover:border-lightBlue-200 cursor-pointer transition-all flex items-center justify-between"
              >
                <div>
                  <div className="text-sm font-bold text-navy-900">{item.title}</div>
                  <div className="text-xs text-slate-500">{item.category}</div>
                </div>
                <span className="text-xs font-bold text-lightBlue-600">Jump →</span>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}