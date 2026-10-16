import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Solutions() {
  const navigate = useNavigate();

  const handleRfqRedirect = (e) => {
    e.preventDefault();
    navigate('/contact');
    setTimeout(() => {
      const el = document.getElementById('rfq-form');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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
            End-To-End Rail Mobility
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-navy-900 tracking-tight">
            OUR ROLLING STOCK SOLUTIONS
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Engineering, building, and maintaining the world’s most demanding railway fleets. Backed by certified precision manufacturing, dual-gauge test tracks, and complete zero-hour life extension programs.
          </p>
          
          {/* In-Page Anchor Navigation Pills */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            <a href="#urban" className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-lightBlue-500 text-xs font-bold text-navy-900 hover:text-lightBlue-600 transition-all shadow-sm">Urban Metro (MRT)</a>
            <a href="#mainline" className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-lightBlue-500 text-xs font-bold text-navy-900 hover:text-lightBlue-600 transition-all shadow-sm">H10 Mainline Locomotives</a>
            <a href="#airport" className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-lightBlue-500 text-xs font-bold text-navy-900 hover:text-lightBlue-600 transition-all shadow-sm">Airport Rail & APM</a>
            <a href="#mro" className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-lightBlue-500 text-xs font-bold text-navy-900 hover:text-lightBlue-600 transition-all shadow-sm">MRO Life Extension</a>
            <a href="#freight" className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-lightBlue-500 text-xs font-bold text-navy-900 hover:text-lightBlue-600 transition-all shadow-sm">Rail Freight Wagons</a>
            <a href="#components" className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:border-lightBlue-500 text-xs font-bold text-navy-900 hover:text-lightBlue-600 transition-all shadow-sm">Precision Components</a>
          </div>
        </div>
      </section>

      {/* Solution 1: Urban Rail Solutions */}
      <section id="urban" className="py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded text-xs font-bold bg-lightBlue-600/10 text-lightBlue-700 border border-lightBlue-300">
                  Urban Mass Transit
                </span>
                <span className="text-xs text-slate-500 font-semibold">Flagship: MRT Line 1 & Line 2</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-navy-900">
                URBAN RAIL & DRIVERLESS METROS
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                SMH Rail has assembled and tested over 100 high-capacity metro trainsets in partnership with global consortium partners like Hyundai Rotem. Featuring Grade of Automation 4 (GoA4) unattended driverless operations, these trains safely move millions of urban commuters every day.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block uppercase font-medium">Capacity</span>
                  <span className="font-bold text-navy-900 text-sm font-heading">1,200 Pax / 4-Car Trainset</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block uppercase font-medium">Max Operating Speed</span>
                  <span className="font-bold text-lightBlue-600 text-sm font-heading">100 km/h (Commercial 80)</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block uppercase font-medium">Automation Level</span>
                  <span className="font-bold text-navy-900 text-sm font-heading">GoA4 Fully Driverless</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-slate-500 block uppercase font-medium">Power System</span>
                  <span className="font-bold text-navy-900 text-sm font-heading">750V DC Bottom Contact</span>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> High-strength lightweight stainless steel and aluminum crashworthy structure</div>
                <div className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> Regenerative dynamic braking returning up to 28% electrical energy back to third rail</div>
                <div className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> Dual-zone intelligent HVAC climate control optimized for tropical humidity</div>
              </div>

              <div className="pt-2">
                <a href="/contact#rfq-form" onClick={handleRfqRedirect} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-lightBlue-600 hover:bg-lightBlue-500 text-white font-bold text-xs uppercase tracking-wider shadow cursor-pointer">
                  Configure Urban Transit Project
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-4 overflow-hidden border border-slate-200 shadow-lg">
                <img 
                  src="/assets/mrt2.jpg" 
                  alt="MRT Putrajaya Line Train" 
                  className="rounded-2xl w-full h-[400px] object-cover shadow-md"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=MRT+Putrajaya+Line'; }}
                />
                <div className="p-4 bg-slate-50 rounded-xl mt-3 flex items-center justify-between text-xs border border-slate-100">
                  <span className="text-slate-700 font-medium">MRT Putrajaya Line 4-Car Electric Multiple Unit</span>
                  <span className="text-lightBlue-600 font-bold">Rasa Plant Commissioned</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solution 2: Mainline Rail Solutions */}
      <section id="mainline" className="py-20 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-4 overflow-hidden border border-slate-200 shadow-lg">
                <img 
                  src="/assets/g10-loco.jpg" 
                  alt="SMH Rail H10 Eco-Locomotive" 
                  className="rounded-2xl w-full h-[400px] object-cover shadow-md"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=H10+Eco-Locomotive'; }}
                />
                <div className="p-4 bg-slate-50 rounded-xl mt-3 flex items-center justify-between text-xs border border-slate-100">
                  <span className="text-slate-700 font-medium">SMH Rail H10 Series 3,300 HP Diesel-Electric Locomotive</span>
                  <span className="text-lightBlue-600 font-bold">International Export</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded text-xs font-bold bg-lightBlue-600/10 text-lightBlue-700 border border-lightBlue-300">
                  Mainline Haulage
                </span>
                <span className="text-xs text-slate-500 font-semibold">Model: H10 & G10 Series</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-navy-900">
                MAINLINE DIESEL-ELECTRIC LOCOMOTIVES
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Engineered to thrive across demanding cross-continental routes, the H10 Series is SMH Rail's premier mainline heavy-haul workhorse. It combines brute tractive power with a modern eco-conscious propulsion architecture compliant with global emissions benchmarks.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block uppercase font-medium">Engine Power</span>
                  <span className="font-bold text-navy-900 text-sm font-heading">3,300 HP (2,460 kW) Turbo</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block uppercase font-medium">Starting Tractive Effort</span>
                  <span className="font-bold text-lightBlue-600 text-sm font-heading">450 kN High Adhesion</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block uppercase font-medium">Track Gauge Range</span>
                  <span className="font-bold text-navy-900 text-sm font-heading">1,000 mm / 1,067 mm / 1,435 mm</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block uppercase font-medium">Emissions Standard</span>
                  <span className="font-bold text-navy-900 text-sm font-heading">EPA Tier 3 / EU Stage IIIA</span>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> <strong>Fuel Efficiency:</strong> Integrated electronic engine management cuts fuel consumption by ~22%</div>
                <div className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> <strong>Dual-Cab Crashworthiness:</strong> Meets AAR S-580 standards with climate-controlled cabin</div>
                <div className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> <strong>Dynamic Braking:</strong> High capacity grid resistance reduces mechanical brake shoe wear</div>
              </div>

              <div className="pt-2">
                <a href="/contact#rfq-form" onClick={handleRfqRedirect} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-lightBlue-600 hover:bg-lightBlue-500 text-white font-bold text-xs uppercase tracking-wider shadow cursor-pointer">
                  Inquire About H10 Locomotives
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solution 3: MRO & Life Extension Services */}
      <section id="mro" className="py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded text-xs font-bold bg-lightBlue-600/10 text-lightBlue-700 border border-lightBlue-300">
                  Circular Economy & MRO
                </span>
                <span className="text-xs text-slate-500 font-semibold">Extending Life Since 1983</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-navy-900">
                MAINTENANCE, REPAIR & OVERHAUL (MRO)
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our turnkey remanufacturing methodology gives a second operational life to aging locomotives, EMUs, passenger coaches, and freight wagons. At 50% the capital cost of purchasing new equipment, fleets are upgraded with cutting-edge digital controls, new power units, and zero-hour structural integrity.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="text-lightBlue-600 font-bold text-lg font-heading">01</span>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Complete Locomotive Remanufacturing</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Stripping down to base frame, ultrasonic non-destructive testing, corrosion blast, structural reinforcement, and new engine repowering.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="text-lightBlue-600 font-bold text-lg font-heading">02</span>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Bogie Overhaul & Dynamic Testing</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Hydraulic press testing, spring calibration, crack detection, chevron rubber replacement, and brake caliper reconditioning.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="text-lightBlue-600 font-bold text-lg font-heading">03</span>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Electrical & Traction Motor Rewinding</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Vacuum pressure impregnation (VPI), dynamic armature balancing, and digital microprocessor governor upgrades.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a href="/contact#rfq-form" onClick={handleRfqRedirect} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-lightBlue-600 hover:bg-lightBlue-500 text-white font-bold text-xs uppercase tracking-wider shadow cursor-pointer">
                  Request MRO Fleet Assessment
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-4 overflow-hidden border border-slate-200 shadow-lg">
                <img 
                  src="/assets/mro.jpg" 
                  alt="MRO Heavy Workshop" 
                  className="rounded-2xl w-full h-[420px] object-cover shadow-md"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=MRO+Heavy+Workshop'; }}
                />
                <div className="p-4 bg-slate-50 rounded-xl mt-3 flex items-center justify-between text-xs border border-slate-100">
                  <span className="text-slate-700 font-medium">Rasa Locomotive Overhaul & Fabrication Bay</span>
                  <span className="text-lightBlue-600 font-bold">150+ Locos / Year Capacity</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solution 4: Rail Freight Solutions */}
      <section id="freight" className="py-20 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-4 overflow-hidden border border-slate-200 shadow-lg">
                <img 
                  src="/assets/freight.jpg" 
                  alt="Heavy Freight Wagon" 
                  className="rounded-2xl w-full h-[400px] object-cover shadow-md"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Freight+Wagons'; }}
                />
                <div className="p-4 bg-slate-50 rounded-xl mt-3 flex items-center justify-between text-xs border border-slate-100">
                  <span className="text-slate-700 font-medium">Heavy Haul Ballast & Mineral Freight Wagon</span>
                  <span className="text-lightBlue-600 font-bold">AAR Compliant</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded text-xs font-bold bg-lightBlue-600/10 text-lightBlue-700 border border-lightBlue-300">
                  Freight Logistics
                </span>
                <span className="text-xs text-slate-500 font-semibold">Bulk Mineral & Cargo</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-navy-900">
                HIGH-PAYLOAD RAIL FREIGHT WAGONS
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Built from high-tensile weather-resistant Cor-Ten steel, our freight wagons withstand punishing mineral, container, and bulk liquid transport across regional corridors. Each design is optimized for maximum tare-to-payload ratio.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block uppercase font-medium">PAYLOAD RATING</span>
                  <span className="font-bold text-navy-900 text-sm font-heading">Up to 65 Tonnes / Wagon</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block uppercase font-medium">Gross Rail Load</span>
                  <span className="font-bold text-lightBlue-600 text-sm font-heading">80 - 100 Tonnes</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block uppercase font-medium">Structural Steel</span>
                  <span className="font-bold text-navy-900 text-sm font-heading">Cor-Ten Weather Resistant</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block uppercase font-medium">Brake Rigging</span>
                  <span className="font-bold text-navy-900 text-sm font-heading">Dual Pipe Air Brake System</span>
                </div>
              </div>

              <div className="pt-2">
                <a href="/contact#rfq-form" onClick={handleRfqRedirect} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-lightBlue-600 hover:bg-lightBlue-500 text-white font-bold text-xs uppercase tracking-wider shadow cursor-pointer">
                  Configure Freight Wagons
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solution 5: Precision Components & Wheelset Center */}
      <section id="components" className="py-20 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded text-xs font-bold bg-lightBlue-600/10 text-lightBlue-700 border border-lightBlue-300">
                  Precision Engineering
                </span>
                <span className="text-xs text-slate-500 font-semibold">Sub-Millimeter Tolerances</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-navy-900">
                WHEELSETS, BOGIES & COMPONENTS
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                SMH Rail houses Southeast Asia's most sophisticated automated wheel maintenance facility. Utilizing CNC portal underfloor and above-floor lathes, 500-tonne automated hydraulic wheel presses, and phased-array ultrasonic inspection, we guarantee uncompromising track safety.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block uppercase font-medium">Machining Accuracy</span>
                  <span className="font-bold text-lightBlue-600 text-sm font-heading">±0.05 mm Diametrical Precision</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block uppercase font-medium">Hydraulic Press Force</span>
                  <span className="font-bold text-navy-900 text-sm font-heading">500-Tonne Automated Press</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block uppercase font-medium">Quality Certification</span>
                  <span className="font-bold text-navy-900 text-sm font-heading">IRIS ISO/TS 22163</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-slate-500 block uppercase font-medium">Inspection Level</span>
                  <span className="font-bold text-navy-900 text-sm font-heading">Phased-Array Ultrasonic & NDT</span>
                </div>
              </div>

              <div className="pt-2">
                <Link to="/facilities" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-lightBlue-600 hover:bg-lightBlue-500 text-white font-bold text-xs uppercase tracking-wider shadow">
                  Tour Our Wheel Maintenance Center
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-4 overflow-hidden border border-slate-200 shadow-lg">
                <img 
                  src="/assets/wheel.jpg" 
                  alt="Wheel Maintenance Center" 
                  className="rounded-2xl w-full h-[420px] object-cover shadow-md"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Wheel+Maintenance'; }}
                />
                <div className="p-4 bg-slate-50 rounded-xl mt-3 flex items-center justify-between text-xs border border-slate-100">
                  <span className="text-slate-700 font-medium">Automated CNC Wheelset Machining & Press Line</span>
                  <span className="text-lightBlue-600 font-bold">Rasa Mega Plant</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Solution 6: Airport Rail Solutions */}
      <section id="airport" className="py-20 border-b border-slate-200 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="bg-white rounded-3xl p-4 overflow-hidden border border-slate-200 shadow-lg">
                <img 
                  src="/assets/urban.jpg" 
                  alt="Airport People Mover System" 
                  className="rounded-2xl w-full h-[400px] object-cover shadow-md"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Airport+APM'; }}
                />
                <div className="p-4 bg-slate-50 rounded-xl mt-3 flex items-center justify-between text-xs border border-slate-100">
                  <span className="text-slate-700 font-medium">Automated Airport People Mover (APM) System</span>
                  <span className="text-lightBlue-600 font-bold">99.8% On-Time Reliability</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center px-3 py-1 rounded text-xs font-bold bg-lightBlue-600/10 text-lightBlue-700 border border-lightBlue-300">
                  Aviation Transit
                </span>
                <span className="text-xs text-slate-500 font-semibold">Terminal Shuttles & Express</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-navy-900">
                AIRPORT TRAIN & PEOPLE MOVER SOLUTIONS
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Connecting international terminals with seamless, automated shuttles. We deliver high-frequency, driverless people movers and airport express rolling stock engineered for 24/7 uptime and zero passenger delays.
              </p>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> High-frequency automated headway dispatch synchronized with flight banks</div>
                <div className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> Wide doors and level boarding accommodating heavy passenger luggage</div>
                <div className="flex items-center gap-2"><span className="text-lightBlue-600 font-bold">✓</span> Whisper-quiet rubber-tire or steel-wheel bogie configurations</div>
              </div>

              <div className="pt-2">
                <a href="/contact#rfq-form" onClick={handleRfqRedirect} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-lightBlue-600 hover:bg-lightBlue-500 text-white font-bold text-xs uppercase tracking-wider shadow cursor-pointer">
                  Consult on Airport Transit
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-lightBlue-50 via-white to-lightBlue-50 border-t border-b border-lightBlue-200 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lightBlue-100 border border-lightBlue-200 text-lightBlue-700 text-xs font-bold uppercase tracking-wider">
            Custom Engineering Consultation
          </span>
          <h3 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900">Need a Tailored Rolling Stock Solution?</h3>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            Speak directly with our chief rolling stock architects to assess technical feasibility, track gauges, axle loads, and delivery timelines.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a href="/contact#rfq-form" onClick={handleRfqRedirect} className="px-6 py-3 rounded-xl bg-lightBlue-600 hover:bg-lightBlue-700 text-white font-bold text-xs uppercase tracking-wider shadow transition-all hover:scale-105 cursor-pointer">
              Launch RFQ Configurator
            </a>
            <a href="/contact#offices-section" onClick={handleOfficeRedirect} className="px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-lightBlue-500 text-navy-900 font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:scale-105 cursor-pointer">
              Contact Engineering Team
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
