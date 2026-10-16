import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    category: 'Mainline Locomotives',
    fleetUnits: '1 - 10 Units',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Fleet RFQ / Inquiry] - ${formData.category} (${formData.company || formData.fullName})`);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Company / Organization: ${formData.company}\n` +
      `Phone: ${formData.phone}\n` +
      `Solution Category: ${formData.category}\n` +
      `Fleet Size / Scope: ${formData.fleetUnits}\n\n` +
      `Inquiry / Technical Requirements:\n${formData.message}`
    );

    window.location.href = `mailto:info@smhrail.com.my?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased">
      
      {/* Banner */}
      <section className="py-20 relative bg-gradient-to-b from-lightBlue-50 via-white to-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lightBlue-100 border border-lightBlue-200 text-lightBlue-700 text-xs font-bold uppercase tracking-wider">
            Connect With Our Engineers
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-navy-900 tracking-tight">
            COMMERCIAL & TECHNICAL INQUIRIES
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Engage with SMH Rail to design, build, or remanufacture your rolling stock. Configure your technical requirements below or reach our corporate headquarters directly.
          </p>
        </div>
      </section>

      {/* Main Content Section with ID target placed cleanly */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          
          {/* Physical Offices & Plant Info Cards with ID Target */}
          <div id="offices-section" className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto scroll-mt-28">
            
            {/* Corporate Headquarters */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded text-[10px] font-bold bg-lightBlue-600/10 text-lightBlue-700 border border-lightBlue-300">
                  Corporate Headquarters
                </span>
                <span className="text-xs text-slate-500 font-medium">Kuala Lumpur, Malaysia</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy-900">SMH Rail Sdn Bhd (HQ)</h3>
              
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <span className="text-lightBlue-600 text-base">📍</span>
                  <div>
                    <strong>Address:</strong><br />
                    A3-01-02, Jalan Dutamas 1, Solaris Dutamas,<br />
                    50480 Kuala Lumpur, Malaysia
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lightBlue-600 text-base">📞</span>
                  <div><strong>Telephone:</strong> +603 6205 3200</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lightBlue-600 text-base">✉️</span>
                  <div><strong>Email:</strong> info@smhrail.com.my</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lightBlue-600 text-base">🕒</span>
                  <div><strong>Operating Hours:</strong> Mon – Fri: 08:30 – 17:30 (MYT)</div>
                </div>
              </div>
            </div>

            {/* Rasa Manufacturing Complex */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded text-[10px] font-bold bg-lightBlue-600/10 text-lightBlue-700 border border-lightBlue-300">
                  Manufacturing Hub
                </span>
                <span className="text-xs text-slate-500 font-medium">Hulu Selangor, Malaysia</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy-900">Rasa Manufacturing & Overhaul Complex</h3>
              
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <span className="text-lightBlue-600 text-base">🏭</span>
                  <div>
                    <strong>Facility Address:</strong><br />
                    Rasa Industrial Park, Hulu Selangor,<br />
                    Selangor Darul Ehsan, Malaysia
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lightBlue-600 text-base">📏</span>
                  <div><strong>Site Area:</strong> 40+ Acres with 1.5 km Dual-Gauge Test Track</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lightBlue-600 text-base">⚙️</span>
                  <div><strong>Divisions:</strong> Metro Assembly, Locomotive Plant, Wheel Center</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lightBlue-600 text-base">🛡️</span>
                  <div><strong>Accreditation:</strong> IRIS ISO/TS 22163 & EN 15085-2 CL1</div>
                </div>
              </div>
            </div>

          </div>

          {/* Scroll Target Anchor with offset to prevent navbar overlap */}
          <div id="rfq-form" className="scroll-mt-28"></div>

          {/* Main Fleet RFQ & Inquiry Form Container */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl max-w-4xl mx-auto">
            <div className="border-b border-slate-200 pb-6 mb-8">
              <span className="text-xs uppercase font-bold text-lightBlue-600 tracking-wider">Direct RFQ Configurator</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900 mt-1">Request a Quote or Technical Consultation</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Fill out your project specifications below. Submitting will securely route your inquiry to <strong className="text-navy-900">info@smhrail.com.my</strong>.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-700">Full Name *</label>
                  <input 
                    required
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Ir. Ahmad bin Razak" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-lightBlue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-700">Corporate Email *</label>
                  <input 
                    required
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. ahmad@railway.org" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-lightBlue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-700">Company / Railway Operator *</label>
                  <input 
                    required
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Keretapi Tanah Melayu Berhad" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-lightBlue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-700">Telephone / Mobile</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +603 2263 8800" 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-lightBlue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-700">Solution Category</label>
                  <select 
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-lightBlue-500 transition-colors cursor-pointer"
                  >
                    <option value="Mainline Locomotives">Mainline Locomotives (H10 Eco-Series)</option>
                    <option value="Urban Rail Transit">Urban Rail Transit (MRT / LRT / Metros)</option>
                    <option value="Airport Rail & APM">Airport Rail & Automated People Movers</option>
                    <option value="MRO & Life Extension">MRO & Life Extension / Heavy Overhaul</option>
                    <option value="Rail Freight Wagons">Rail Freight Wagons & Bogies</option>
                    <option value="General Commercial Inquiry">General Commercial Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-slate-700">Fleet Scope / Size</label>
                  <select 
                    name="fleetUnits"
                    value={formData.fleetUnits}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-lightBlue-500 transition-colors cursor-pointer"
                  >
                    <option value="1 - 10 Units">1 - 10 Units / Component Overhaul</option>
                    <option value="11 - 50 Units">11 - 50 Units Fleet Programme</option>
                    <option value="50+ Units">50+ Units / Turnkey Concession</option>
                    <option value="Advisory / Consultancy">Advisory & Engineering Consultancy</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-700">Technical Requirements & Inquiry Details *</label>
                <textarea 
                  required
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your track gauge, gauge requirements, operational environment, timeframes, or specific tender specifications..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 outline-none focus:border-lightBlue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                <span className="text-[11px] text-slate-400">
                  🔒 Secured transmission to <strong className="text-slate-600">info@smhrail.com.my</strong>
                </span>
                <button 
                  type="submit"
                  className="px-8 py-3.5 rounded-xl bg-lightBlue-600 hover:bg-lightBlue-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 flex items-center gap-2"
                >
                  <span>Send RFQ Message</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}