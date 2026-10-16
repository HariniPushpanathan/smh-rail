import React from 'react';
import { Link } from 'react-router-dom';

export default function Sustainability() {
  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased">
      
      {/* Banner */}
      <section className="py-20 relative bg-gradient-to-b from-lightBlue-50 via-white to-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lightBlue-100 border border-lightBlue-200 text-lightBlue-700 text-xs font-bold uppercase tracking-wider">
            Decarbonizing Global Transport
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-navy-900 tracking-tight">
            SUSTAINABILITY & ESG COMMITMENT
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Rail is inherently the world's most sustainable mass transport mode. SMH Rail advances this advantage through eco-locomotives, circular economy remanufacturing, and green financial instruments.
          </p>
        </div>
      </section>

      {/* 3 Core Pillars (Clean White Cards) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Pillar 1: Circular Economy */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-200 shadow-sm border-t-4 border-t-lightBlue-600">
              <div className="w-12 h-12 rounded-xl bg-lightBlue-100 text-lightBlue-700 flex items-center justify-center font-bold text-xl">
                ♻️
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy-900">Circular Remanufacturing</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                By rehabilitating and remanufacturing locomotive carbodies and bogies instead of manufacturing virgin steel frames, we save up to <strong>80% in embodied greenhouse gases</strong> per locomotive while adding 15 to 20 years of operational life.
              </p>
              <div className="pt-2 text-xs text-lightBlue-600 font-bold">
                ✓ Avoids 120+ tonnes of virgin steel smelting per locomotive
              </div>
            </div>

            {/* Pillar 2: H10 Eco-Locomotives */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-200 shadow-sm border-t-4 border-t-emerald-500">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">
                ⚡
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy-900">H10 Low-Emission Power</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our flagship H10 locomotive utilizes common-rail fuel injection and automated engine start-stop (AESS) technologies to cut idle fuel waste. Compliant with EPA Tier 3 and EU Stage IIIA standards, it slashes NOx and particulate matter.
              </p>
              <div className="pt-2 text-xs text-emerald-600 font-bold">
                ✓ Up to 22% fuel reduction & bio-fuel compatibility
              </div>
            </div>

            {/* Pillar 3: Regenerative Energy Recovery */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 space-y-4 border border-slate-200 shadow-sm border-t-4 border-t-navy-900">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-navy-900 flex items-center justify-center font-bold text-xl">
                🔋
              </div>
              <h3 className="font-heading text-2xl font-bold text-navy-900">Regenerative Urban Transit</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The driverless electric trainsets assembled for the MRT Putrajaya Line recover kinetic energy during braking, converting it back into electrical current fed directly back into the 750V DC third-rail system to power neighboring accelerating trains.
              </p>
              <div className="pt-2 text-xs text-navy-900 font-bold">
                ✓ Up to 28% electrical energy returned to the grid
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Sukuk Framework Deep Dive */}
      <section id="sukuk" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lightBlue-100 border border-lightBlue-200 text-lightBlue-700 text-xs font-bold uppercase tracking-wider">
                Islamic Green Financing
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-navy-900">
                BERAPIT MOBILITY SUSTAINABILITY SUKUK FRAMEWORK
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                SMH Rail’s subsidiary, <strong>Berapit Mobility Sdn Bhd (BMSB)</strong>, has established a recognized Sustainability Sukuk Framework to mobilize capital for environmentally responsible railway infrastructure and clean transportation assets.
              </p>
              
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Eligible Green Categories</h4>
                  <p className="text-xs text-slate-600 mt-1">Directly funding clean transportation, energy efficiency retrofits in rolling stock, and modern zero-emission maintenance depot tooling.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-navy-900 text-sm">Strict Governance & Transparency</h4>
                  <p className="text-xs text-slate-600 mt-1">Governed in compliance with the ASEAN Green Bond Standards, ASEAN Social Bond Standards, and the SC Malaysia SRI Sukuk Framework.</p>
                </div>
              </div>

              <div className="pt-2">
                <a 
                href="/Berapit-Mobility-Sustainability-Sukuk-Framework-dated-Sept-2024.pdf" 
                download="Berapit-Mobility-Sustainability-Sukuk-Framework-dated-Sept-2024.pdf"
                className="inline-flex items-center gap-2 text-lightBlue-600 font-bold hover:text-lightBlue-700 text-sm mt-4">
                  <span>Get the Full BMSB Sukuk Framework Document</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
              </div>

              <div className="pt-2">
                <a 
                href="/Berapit-Mobility-Sdn-Bhd-Pre-Issuance-Sustainability-Sukuk-Framework-Assessment-20240904.pdf" 
                download="Berapit-Mobility-Sdn-Bhd-Pre-Issuance-Sustainability-Sukuk-Framework-Assessment-20240904.pdf"
                className="inline-flex items-center gap-2 text-lightBlue-600 font-bold hover:text-lightBlue-700 text-sm mt-4">
                  <span>Get the Second Party Opinion (SPO) Document</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 space-y-6 border border-slate-200 shadow-lg">
                <h3 className="font-heading text-2xl font-bold text-navy-900 border-b border-slate-200 pb-3">
                  UN Sustainable Development Goals (SDGs)
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <img 
                      src="/assets/sdg9.jpg" 
                      alt="SDG 9" 
                      className="w-10 h-10 rounded-lg object-cover"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=SDG9'; }}
                    />
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">Industry, Innovation and Infrastructure</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Fostering resilient domestic manufacturing and technology transfer in rolling stock fabrication.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <img 
                      src="/assets/sdg11.jpg" 
                      alt="SDG 11" 
                      className="w-10 h-10 rounded-lg object-cover"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=SDG11'; }}
                    />
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">Sustainable Cities and Communities</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Enabling congestion-free, zero-emission mass transit carrying over 400,000 daily commuters.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <img 
                      src="/assets/sdg13.jpg" 
                      alt="SDG 13" 
                      className="w-10 h-10 rounded-lg object-cover"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=SDG13'; }}
                    />
                    <div>
                      <h4 className="text-sm font-bold text-navy-900">Climate Action</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Replacing thousands of heavy diesel highway trucks with high-efficiency electrified and low-emission rail corridors.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
