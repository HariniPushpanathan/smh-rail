import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Facilities() {
  const navigate = useNavigate();

  const handleOfficeRedirect = (e) => {
    e.preventDefault();
    navigate('/contact');
    setTimeout(() => {
      const el = document.getElementById('offices-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased">
      
      {/* Banner */}
      <section className="py-20 relative bg-gradient-to-b from-lightBlue-50 via-white to-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lightBlue-100 border border-lightBlue-200 text-lightBlue-700 text-xs font-bold uppercase tracking-wider">
            Rasa Mega Complex
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-navy-900 tracking-tight">
            WORLD-CLASS RAIL MANUFACTURING HUB
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Spanning over 40 acres in Hulu Selangor, Malaysia, SMH Rail operates Southeast Asia’s most comprehensive railway engineering ecosystem, equipped with dedicated multi-gauge test tracks and automated fabrication lines.
          </p>
        </div>
      </section>

      {/* Facility Aerial & Highlights Strip */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 mb-16 border border-slate-200 shadow-lg">
            <div className="relative h-[380px] sm:h-[500px] rounded-2xl overflow-hidden shadow-md">
              <img 
                src="/assets/facility-aerial.jpg" 
                alt="SMH Rail Rasa Facility Aerial" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x500?text=Rasa+Facility+Aerial'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 text-white">
                <div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold bg-navy-900/80 text-lightBlue-300 border border-lightBlue-500/30 uppercase tracking-widest">
                    State-Of-The-Art Infrastructure
                  </span>
                  <h2 className="font-heading text-2xl sm:text-4xl font-bold mt-1 text-white">Rasa Manufacturing & Overhaul Complex</h2>
                  <p className="text-xs sm:text-sm text-slate-200 max-w-xl mt-1">
                    40+ Acres • Integrated Assembly Lines • Dual-Gauge Dedicated Test Tracks • Automated Wheel Reprofiling
                  </p>
                </div>
                <div className="bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-200 text-right shadow-sm">
                  <div className="text-[10px] uppercase text-lightBlue-600 font-bold">Annual Output Capacity</div>
                  <div className="font-heading text-xl font-bold text-navy-900">200+ Coaches / 150 Locos</div>
                </div>
              </div>
            </div>

            {/* Metric Badges Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs text-slate-500 uppercase font-bold">Total Footprint</div>
                <div className="font-heading text-2xl font-bold text-navy-900 mt-1">40+ Acres</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Heavy industrial rail zoning</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs text-slate-500 uppercase font-bold">Dedicated Test Track</div>
                <div className="font-heading text-2xl font-bold text-lightBlue-600 mt-1">1.5 km Dual-Gauge</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Standard & Metre gauge testing</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs text-slate-500 uppercase font-bold">Hydraulic Lifting</div>
                <div className="font-heading text-2xl font-bold text-navy-900 mt-1">500-Tonne Press</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Automated wheelset pressing</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs text-slate-500 uppercase font-bold">Quality Standards</div>
                <div className="font-heading text-2xl font-bold text-emerald-600 mt-1">IRIS & EN 15085</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Highest European welding tier</div>
              </div>
            </div>

          </div>

          {/* Specialized Plant Wings & Workshops */}
          <div className="space-y-16">
            
            {/* Workshop 1: Electric Train & Metro Assembly Plant */}
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="inline-flex items-center px-3 py-1 rounded text-xs font-bold bg-lightBlue-600/10 text-lightBlue-700 border border-lightBlue-300">
                  Plant Wing A
                </span>
                <h3 className="font-heading text-3xl font-bold text-navy-900">ELECTRIC TRAIN & METRO ASSEMBLY PLANT</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Purpose-built for modern mass rapid transit vehicles, this wing hosts clean assembly bays with overhead bridge cranes, pneumatic carbody jacks, and precision laser alignment jigs. It is here that the 49 driverless trainsets for the MRT Putrajaya Line were fitted, wired, and static-tested.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> Multiple synchronous assembly lines for simultaneous trainset production</li>
                  <li className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> Integrated rain/water-tightness testing booth simulating extreme monsoon precipitation</li>
                  <li className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> Comprehensive static commissioning bays equipped with 750V DC power feeds</li>
                </ul>
              </div>
              <div className="lg:col-span-6">
                <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
                  <img 
                    src="/assets/mrt2.jpg" 
                    alt="Electric Train Assembly Line" 
                    className="rounded-xl w-full h-[320px] object-cover"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Assembly+Plant'; }}
                  />
                </div>
              </div>
            </div>

            {/* Workshop 2: Locomotive & Freight Fabrication Plant */}
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
                  <img 
                    src="/assets/g10-loco.jpg" 
                    alt="Locomotive Manufacturing Plant" 
                    className="rounded-xl w-full h-[320px] object-cover"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Locomotive+Plant'; }}
                  />
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                <span className="inline-flex items-center px-3 py-1 rounded text-xs font-bold bg-lightBlue-600/10 text-lightBlue-700 border border-lightBlue-300">
                  Plant Wing B
                </span>
                <h3 className="font-heading text-3xl font-bold text-navy-900">LOCOMOTIVE & FREIGHT WAGON MANUFACTURING</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Equipped for heavy mechanical fabrication, this plant handles structural underframes, locomotive superstructure cabs, and heavy haul freight car bodies. Our welders are certified to EN 15085-2 CL1, executing submerged arc and robotic MIG welding.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> Heavy duty CNC plasma and laser plate cutting beds</li>
                  <li className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> Climate-controlled blast and paint booths accommodating full 25m carbodies</li>
                  <li className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> Full engine drop and driveline integration rigs for 3,300+ HP powerplants</li>
                </ul>
              </div>
            </div>

            {/* Workshop 3: Automated Wheelset Maintenance Center */}
            <div id="wheel-center" className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="inline-flex items-center px-3 py-1 rounded text-xs font-bold bg-lightBlue-600/10 text-lightBlue-700 border border-lightBlue-300">
                  Plant Wing C
                </span>
                <h3 className="font-heading text-3xl font-bold text-navy-900">AUTOMATED WHEELSET & AXLE CENTER</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Precision is everything when steel meets steel. Our automated wheel maintenance facility executes high-speed wheel reprofiling, disc brake servicing, and complete axle overhaul using CNC portal machines with sub-millimeter tolerances.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> Automated CNC portal wheel lathes restoring exact UIC/AAR tread profiles</li>
                  <li className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> 500-Tonne computerized hydraulic wheel press with tonnage-displacement logging</li>
                  <li className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> Phased-array ultrasound and magnetic particle non-destructive testing (NDT)</li>
                </ul>
              </div>
              <div className="lg:col-span-6">
                <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
                  <img 
                    src="/assets/wheel.jpg" 
                    alt="Automated Wheel Lathe Center" 
                    className="rounded-xl w-full h-[320px] object-cover"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Wheel+Center'; }}
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      
      {/* Dual-Gauge Test Track Highlight */}
      <section className="py-16 bg-navy-900 text-white border-y border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded text-xs font-bold bg-lightBlue-500/20 text-lightBlue-300 border border-lightBlue-500/30">
            Quality Assurance
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white">
            DEDICATED DUAL-GAUGE TESTING TRACK
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Every trainset and locomotive produced at Rasa undergoes exhaustive dynamic testing on our private 1.5 km dual-gauge track before customer handover.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 pt-6 max-w-4xl mx-auto text-left">
            <div className="p-5 rounded-xl bg-navy-800/80 border border-navy-700 shadow-md">
              <div className="text-lightBlue-400 font-heading text-lg font-bold">Dual Gauge Flexibility</div>
              <p className="text-xs mt-1 text-slate-300 leading-relaxed">Interleaved 1,435 mm (Standard Gauge) and 1,000 mm (Metre Gauge) tracks to test both domestic and export fleets.</p>
            </div>

            <div className="p-5 rounded-xl bg-navy-800/80 border border-navy-700 shadow-md">
              <div className="text-lightBlue-400 font-heading text-lg font-bold">Electrification Simulation</div>
              <p className="text-xs mt-1 text-slate-300 leading-relaxed">Equipped with 750V DC third-rail simulation and variable voltage test lines for GoA4 autonomous drive tests.</p>
            </div>

            <div className="p-5 rounded-xl bg-navy-800/80 border border-navy-700 shadow-md">
              <div className="text-lightBlue-400 font-heading text-lg font-bold">Braking & Adhesion Trials</div>
              <p className="text-xs mt-1 text-slate-300 leading-relaxed">Calibrated emergency deceleration testing, slip-slide tests, and automated ATP/ATO signaling validation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Plant Tour CTA */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="font-heading text-3xl font-bold text-navy-900">Tour the Rasa Manufacturing Complex</h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            We welcome delegations from transit authorities, transport ministries, and rail operators to inspect our manufacturing bays and test facilities.
          </p>
          <div className="pt-2">
            <a href="/contact#offices-section" onClick={handleOfficeRedirect} className="inline-flex px-6 py-3 rounded-xl bg-lightBlue-600 hover:bg-lightBlue-700 text-white font-bold text-xs uppercase tracking-wider shadow transition-all hover:scale-105 cursor-pointer">
              Schedule a Technical Delegation Visit
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
