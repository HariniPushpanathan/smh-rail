import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeTrainTab, setActiveTrainTab] = useState('h10');
  const [activeHotspot, setActiveHotspot] = useState(null);

  // Carbon Calculator State
  const [fleetSize, setFleetSize] = useState(10);
  const [annualKm, setAnnualKm] = useState(120000);

  // Overhaul Comparison Slider State
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // Global Footprint State
  const [activeCountry, setActiveCountry] = useState('malaysia');

  // Calculations for Carbon Calculator
  const fuelSavedLiters = Math.round(fleetSize * annualKm * 0.92);
  const co2AvoidedTonnes = Math.round(fuelSavedLiters * 0.00268);
  const treesEquivalent = Math.round(co2AvoidedTonnes * 45.5);
  const costSavingsUsd = Math.round(fuelSavedLiters * 1.15).toLocaleString();

  // Train viewer data
  const trainData = {
    h10: {
      category: 'Mainline Freight & Passenger',
      title: 'H10 Series Eco-Locomotive',
      tagline: 'Heavy-Duty Diesel Electric Mainline Workhorse with Low-Emission Architecture',
      img: '/src/assets/g10-loco.jpg',
      specs: [
        { label: 'Engine Rating', val: '3,300 HP (2,460 kW) Turbocharged' },
        { label: 'Tractive Effort', val: '450 kN Starting / 360 kN Continuous' },
        { label: 'Maximum Speed', val: '120 km/h (Mainline Freight & Passenger)' },
        { label: 'Track Gauge', val: '1,000 mm (Metre) / 1,067 mm (Cape) / 1,435 mm (Standard)' },
        { label: 'Axle Load', val: '16 - 20 Tonnes per Axle' },
        { label: 'Emissions Compliance', val: 'EPA Tier 3 / EU Stage IIIA Low Emissions' },
        { label: 'Fuel Efficiency', val: 'Up to 22% Reduction vs Legacy Locomotives' }
      ],
      hotspots: [
        { id: 1, top: '38%', left: '35%', title: 'Eco-Diesel Power Unit', desc: 'Advanced electronic fuel injection with dual turbocharging, reducing particulate emissions by 30% and optimizing fuel consumption across heavy haul gradients.' },
        { id: 2, top: '28%', left: '78%', title: 'Crashworthy Ergonomic Cab', desc: 'AAR S-580 compliant crashworthy driver cabin featuring HVAC climate control, dual digitized diagnostics screens, and CCTV perimeter monitoring.'},
        { id: 3, top: '65%', left: '60%', title: 'Microprocessor Traction Control', desc: 'Individual AC traction motor control with real-time wheel slip/slide protection maximizing drawbar pull in wet and monsoon track conditions.' }
      ]
    },
    mrt2: {
      category: 'Urban Mass Transit',
      title: 'MRT2 Driverless Metro (GoA4)',
      tagline: 'High-Capacity Rapid Transit Electric Multiple Unit for Urban Networks',
      img: '/src/assets/mrt2.jpg',
      specs: [
        { label: 'Configuration', val: '4-Car Driverless Electric Multiple Unit (EMU)' },
        { label: 'Passenger Capacity', val: '1,200 Passengers' },
        { label: 'Max Speed', val: '100 km/h (Commercial Operation 80 km/h)' },
        { label: 'Supply Voltage', val: '750 V DC Third Rail Bottom Contact' },
        { label: 'Automation Level', val: 'Grade of Automation 4 (GoA4) Fully Unattended' },
        { label: 'Carbody Material', val: 'High-Strength Lightweight Stainless Steel' },
        { label: 'Energy Recovery', val: 'Regenerative Braking returning ~28% power to grid' }
      ],
      hotspots: [
        { id: 1, top: '35%', left: '82%', title: 'GoA4 Driverless Automation', desc: 'Redundant Communications-Based Train Control (CBTC) enabling automated dispatch, obstacle detection, platform screen door sync, and safe headway control.' },
        { id: 2, top: '40%', left: '48%', title: 'High-Capacity Passenger Saloon', desc: 'Wide gangways, dynamic LED route maps, priority seating zones, wheelchair accessibility, and high-volume automated HVAC ventilation.' },
        { id: 3, top: '78%', left: '28%', title: 'Air-Suspension Metro Bogie', desc: 'Pneumatic secondary air springs provide smooth ride comfort, automatic leveling, and integrated disc brakes with wheel noise dampers.' },
        { id: 4, top: '72%', left: '92%', title: 'Automatic Transit Coupler', desc: 'Fully automatic mechanical and electrical couplers allowing rapid coupling/uncoupling with integrated emergency anti-climber crash energy absorption.' }
      ]
    },
    freight: {
      category: 'Heavy Logistics',
      title: 'High-Payload Rail Freight Wagon',
      tagline: 'Cor-Ten Steel Structural Wagons for Bulk Mineral and Container Transport',
      img: '/src/assets/freight.jpg',
      specs: [
        { label: 'Payload Capacity', val: 'Up to 65 Tonnes per Wagon' },
        { label: 'Gross Rail Load', val: '80 - 100 Tonnes' },
        { label: 'Body Construction', val: 'Cor-Ten Weather-Resistant Atmospheric Steel' },
        { label: 'Discharge Mechanism', val: 'Pneumatic / Manual 3-Way Center & Side Chutes' },
        { label: 'Coupler Type', val: 'AAR Type E / F Tightlock Couplers with draft gear' },
        { label: 'Brake System', val: 'Dual-Pipe Air Brake with Automated Empty/Load Detector' }
      ],
      hotspots: [
        { id: 1, top: '45%', left: '50%', title: 'Dual Hopper Chute Discharge', desc: 'Precision flow control gates allow metered ballast distribution along track shoulders while moving at controlled 5-8 km/h track maintenance speeds.' },
        { id: 2, top: '75%', left: '22%', title: 'Cast Steel Ride-Control Bogie', desc: 'Heavy-duty 3-piece cast bogies with elastomeric side bearings engineered to absorb high impact shocks on mineral transport corridors.' },
        { id: 3, top: '70%', left: '88%', title: 'Shock-Absorbing Draft Gear', desc: 'High-capacity friction-rubber draft gear designed to withstand heavy train slack actions in 40+ wagon heavy haul train formations.' }
      ]
    },
    mro: {
      category: 'MRO & Precision Engineering',
      title: 'Precision Wheelset & Overhaul Hub',
      tagline: 'Certified ISO & IRIS Overhaul Center Delivering Complete Zero-Hour Fleet Life Extension',
      img: '/src/assets/wheel.jpg',
      specs: [
        { label: 'Facility Capability', val: 'Overhaul, Reprofiling & Complete Wheel Assembly' },
        { label: 'CNC Tolerance', val: 'Sub-millimeter ±0.05 mm Diametrical Accuracy' },
        { label: 'Non-Destructive Testing', val: 'Magnetic Particle & Ultrasound Flaw Detection' },
        { label: 'Axle Press Capacity', val: 'Up to 500-Tonne Hydraulic Automated Wheel Press' },
        { label: 'Quality Certification', val: 'IRIS ISO/TS 22163 & EN 15085-2 Welding Quality' },
        { label: 'Life Extension', val: 'Adds 15 to 20 Years to Operating Lifespan of Fleets' }
      ],
      hotspots: [
        { id: 1, top: '45%', left: '40%', title: 'CNC Wheel Reprofiling', desc: 'High-precision portal lathe machines restore tread profiles to exact railway UIC/AAR geometry, reducing wheel-rail contact wear and track damage.' },
        { id: 2, top: '50%', left: '68%', title: 'Ultrasonic Flaw Inspection', desc: 'High-frequency ultrasonic probes scan the entire depth of the axle journal and wheel rim to detect micro-cracks before they compromise service safety.' },
        { id: 3, top: '65%', left: '55%', title: 'Sealed Cartridge Bearing Unit', desc: 'Zero-maintenance pre-greased and sealed tapered roller bearing units pressed to exact micro-tolerances with digital tonnage recording.' } 
      ]
    }
  };

 const GLOBAL_PROJECTS = {
    malaysia: {
      country: "Malaysia",
      role: "Global Headquarters & Manufacturing Hub",
      flag: "🇲🇾",
      coords: { x: "78.5%", y: "59%" }, // Calibrated to map.jpg
      stats: "100+ Metro Trains Assembled & Mainline Fleets",
      client: "MRT Corp, KTMB (Keretapi Tanah Melayu), Prasarana",
      scope: "Design, turnkey assembly, and supply of 49 driverless trainsets for MRT Line-2 Putrajaya, 58 trainsets for MRT Line-1 Kajang, and complete locomotive remanufacturing programs.",
      highlights: [
        "40+ Acre Rasa Mega Manufacturing Facility",
        "Full local testing track and climatic testing facilities",
        "IRIS and EN 15085 certified quality management"
      ]
    },
    germany: {
      country: "Germany",
      role: "European Engineering & Precision Overhaul Partnership",
      flag: "🇩🇪",
      coords: { x: "51.5%", y: "26%" }, // Calibrated to map.jpg
      stats: "Critical Locomotive Subsystems & Remanufacturing",
      client: "European Rail Logistics & Engineering Partners",
      scope: "Remanufacturing of heavy mainline diesel locomotives and delivery of customized railway engineering assemblies compliant with strict European TSI standards.",
      highlights: [
        "Precision German bogie engineering tolerances",
        "Joint technological R&D initiatives",
        "European standard homologation"
      ]
    },
    tanzania: {
      country: "Tanzania",
      role: "East African Freight Overhaul Operations",
      flag: "🇹🇿",
      coords: { x: "57.5%", y: "66%" }, // Calibrated to map.jpg
      stats: "Heavy Freight Diesel Locomotives Remanufactured",
      client: "TAZARA (Tanzania-Zambia Railway Authority)",
      scope: "Life extension and turnkey modernization of aging mainline diesel-electric freight locomotives connecting Dar es Salaam port to the African Copperbelt.",
      highlights: [
        "On-site technical support and heavy field overhauls",
        "Local technician upskilling and skills transfer",
        "Restoration of critical regional trade corridors"
      ]
    },
    zambia: {
      country: "Zambia",
      role: "Cross-Border Southern African Rail Infrastructure",
      flag: "🇿🇲",
      coords: { x: "55.5%", y: "73%" }, // Calibrated to map.jpg
      stats: "Mainline Haulage Fleet Revitalization",
      client: "Zambia Railways / TAZARA Southern Division",
      scope: "Comprehensive engine, traction motor, and bogie overhauls extending service lifetime by an additional 15 years in extreme African climatic conditions.",
      highlights: [
        "Reliability upgrade for heavy mineral transport",
        "Overhauled wheelsets and brake rigging assemblies",
        "Continuous fleet health monitoring"
      ]
    },
    thailand: {
      country: "Thailand",
      role: "ASEAN Regional Corridor Services",
      flag: "🇹🇭",
      coords: { x: "75.5%", y: "51%" }, // Calibrated to map.jpg
      stats: "Passenger & Freight Locomotives Modernized",
      client: "State Railway of Thailand (SRT) Supply Chain",
      scope: "Supply of high-efficiency locomotive components, wheel reprofiling support, and technical collaboration for cross-border freight interoperability.",
      highlights: [
        "Metre-gauge locomotive compatibility",
        "Rapid turnaround component logistics",
        "ASEAN rail interoperability compliance"
      ]
    },
    myanmar: {
      country: "Myanmar",
      role: "Turnkey Locomotives & Wagon Maintenance",
      flag: "🇲🇲",
      coords: { x: "73.5%", y: "49%" }, // Calibrated to map.jpg
      stats: "Locomotive Supply & Remanufacturing",
      client: "Myanma Railways",
      scope: "Delivery and remanufacture of diesel-electric locomotives to bolster passenger transportation across primary intercity routes.",
      highlights: [
        "Rugged tropical terrain customization",
        "Operator training and depot tooling setup",
        "Fuel-saving electronic governor retrofits"
      ]
    },
    india: {
      country: "India",
      role: "Advanced Wheel & Component Manufacturing",
      flag: "🇮🇳",
      coords: { x: "68.5%", y: "45%" }, // Calibrated to map.jpg
      stats: "Wheel India Facility Partnership",
      client: "Precision Railway Wheel & Axle Programs",
      scope: "Co-development and specialized maintenance facility for heavy rail wheelsets, traction gearing, and axle assembly programs.",
      highlights: [
        "Specialized automated wheel machining centers",
        "Dynamic wheel balancing and ultrasonic testing",
        "High volume freight supply capacity"
      ]
    },
    singapore: {
      country: "Singapore",
      role: "Cross-Border Transit Support",
      flag: "🇸🇬",
      coords: { x: "79.3%", y: "61.5%" }, // Calibrated right next to Malaysia
      stats: "Inter-City Rail Maintenance Collaboration",
      client: "Cross-Border Logistics & Regional Linkages",
      scope: "Technical support and spare parts supply for cross-border rail connections between Johor and Singapore.",
      highlights: [
        "Just-in-time component fulfillment",
        "High-reliability passenger services support"
      ]
    }
  };

  const currentTrain = trainData[activeTrainTab];
  const currentProject = GLOBAL_PROJECTS[activeCountry];

  // Overhaul slider handlers
  const handleSliderMove = (clientX, rect) => {
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    const percentage = (offsetX / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const container = document.getElementById('overhaul-comparison');
    if (container) {
      handleSliderMove(e.clientX, container.getBoundingClientRect());
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const container = document.getElementById('overhaul-comparison');
    if (container && e.touches.length > 0) {
      handleSliderMove(e.touches[0].clientX, container.getBoundingClientRect());
    }
  };

  return (
    <div 
      className="bg-[#f8fafc] text-slate-800 antialiased"
      onMouseMove={handleMouseMove}
      onMouseUp={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setIsDragging(false)}
    >
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-12 pb-20 bg-gradient-to-b from-lightBlue-50 via-white to-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lightBlue-100 border border-lightBlue-200 text-lightBlue-700 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-lightBlue-600 animate-ping"></span>
                Next-Generation Rail Engineering
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-navy-900 leading-[1.08]">
                EXTENDING LIFE. <br />
                <span className="text-lightBlue-600">PIONEERING MOBILITY.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                As Southeast Asia's foremost rolling stock manufacturer and turnkey mobility provider, SMH Rail delivers advanced driverless metro trainsets, heavy-haul eco-diesel locomotives, and certified MRO life-extension programs for global rail networks.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a href="#interactive-viewer" className="px-7 py-3.5 rounded-xl bg-lightBlue-600 hover:bg-lightBlue-700 text-white font-bold text-sm uppercase tracking-wider shadow-md transition-all hover:scale-105 flex items-center gap-2">
                  <span>Explore Rolling Stock</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </a>
                <Link to="/contact" className="px-7 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-lightBlue-500 text-navy-900 font-bold text-sm uppercase tracking-wider shadow-sm transition-all flex items-center gap-2">
                  <span>Fleet Configurator</span>
                  <svg className="w-4 h-4 text-lightBlue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </div>

              <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
                <div>
                  <div className="text-xs uppercase text-slate-500 font-semibold">Quality Benchmark</div>
                  <div className="text-sm font-bold text-navy-900 font-heading mt-0.5">IRIS ISO/TS 22163</div>
                </div>
                <div>
                  <div className="text-xs uppercase text-slate-500 font-semibold">Welding Standard</div>
                  <div className="text-sm font-bold text-navy-900 font-heading mt-0.5">EN 15085-2 CL1</div>
                </div>
                <div>
                  <div className="text-xs uppercase text-slate-500 font-semibold">Flagship Metro</div>
                  <div className="text-sm font-bold text-lightBlue-600 font-heading mt-0.5">MRT2 Putrajaya Line</div>
                </div>
                <div>
                  <div className="text-xs uppercase text-slate-500 font-semibold">Flagship Loco</div>
                  <div className="text-sm font-bold text-lightBlue-600 font-heading mt-0.5">H10 Eco-Series</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="bg-white rounded-2xl p-4 sm:p-5 relative group border border-slate-200 shadow-xl">
                <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden bg-slate-100">
                  <img 
                    src="/assets/g10-loco.jpg" 
                    alt="SMH Rail H10 Eco-Locomotive" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=H10+Locomotive'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold bg-navy-900/90 text-lightBlue-300 border border-lightBlue-500/30 uppercase tracking-wider">H10 Series Eco-Loco</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs text-lightBlue-300 uppercase tracking-wider font-semibold">Flagship Heavy Haul</div>
                    <div className="text-lg font-bold font-heading">3,300 HP Diesel-Electric Mainline</div>
                    <div className="text-xs text-slate-200 mt-1 flex items-center gap-3">
                      <span>⚡ 22% Fuel Reduction</span>
                      <span>•</span>
                      <span>🛡️ Tier 3 Emissions</span>
                      <span>•</span>
                      <span>🌍 Exported Globally</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                    <div className="text-[10px] uppercase text-slate-500 font-bold">MRT Assembled</div>
                    <div className="text-base font-bold text-navy-900 font-heading">100+ Trains</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                    <div className="text-[10px] uppercase text-slate-500 font-bold">Plant Footprint</div>
                    <div className="text-base font-bold text-navy-900 font-heading">40+ Acres</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                    <div className="text-[10px] uppercase text-slate-500 font-bold">Operating Life</div>
                    <div className="text-base font-bold text-lightBlue-600 font-heading">+25 Years</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Live KPI Metrics Counter Strip */}
      <section className="border-b border-slate-200 bg-white py-12 relative shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-5xl font-bold font-heading text-navy-900">40+</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-lightBlue-600 font-bold mt-1">Years Rail Heritage</div>
              <p className="text-xs text-slate-500 mt-1">Pioneering rolling stock solutions since 1983</p>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-5xl font-bold font-heading text-navy-900">1,000+</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-lightBlue-600 font-bold mt-1">Vehicles Manufactured & Overhauled</div>
              <p className="text-xs text-slate-500 mt-1">Metros, locomotives & heavy freight wagons</p>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-5xl font-bold font-heading text-navy-900">8+</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-lightBlue-600 font-bold mt-1">Global Export Markets</div>
              <p className="text-xs text-slate-500 mt-1">ASEAN, Africa, Europe & the Indian Subcontinent</p>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-5xl font-bold font-heading text-navy-900">40+</div>
              <div className="text-xs sm:text-sm uppercase tracking-wider text-lightBlue-600 font-bold mt-1">Acres Rasa Mega-Complex</div>
              <p className="text-xs text-slate-500 mt-1">Dual-gauge testing track & automated wheel plant</p>
            </div>
          </div>
        </div>
      </section>


      {/* Interactive Rolling Stock Showcase */}
      <section id="interactive-viewer" className="py-20 relative bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lightBlue-100 border border-lightBlue-200 text-lightBlue-700 text-xs font-bold uppercase tracking-wider">Engaging Tech Explorer</span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-navy-900 tracking-tight">INTERACTIVE ROLLING STOCK SHOWCASE</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Click across our vehicle models and interact with the engineering hotspots to inspect critical subsystems, propulsion units, and crashworthy structures.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <button 
              onClick={() => { setActiveTrainTab('h10'); setActiveHotspot(null); }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${activeTrainTab === 'h10' ? 'bg-lightBlue-600 text-white shadow-md shadow-lightBlue-600/30' : 'bg-white text-navy-900 border border-slate-300 hover:border-lightBlue-500'}`}
            >
              🚂 H10 Eco-Locomotive
            </button>
            <button 
              onClick={() => { setActiveTrainTab('mrt2'); setActiveHotspot(null); }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${activeTrainTab === 'mrt2' ? 'bg-lightBlue-600 text-white shadow-md shadow-lightBlue-600/30' : 'bg-white text-navy-900 border border-slate-300 hover:border-lightBlue-500'}`}
            >
              🚇 MRT2 Driverless Metro
            </button>
            <button 
              onClick={() => { setActiveTrainTab('freight'); setActiveHotspot(null); }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${activeTrainTab === 'freight' ? 'bg-lightBlue-600 text-white shadow-md shadow-lightBlue-600/30' : 'bg-white text-navy-900 border border-slate-300 hover:border-lightBlue-500'}`}
            >
              📦 Heavy Freight Wagon
            </button>
            <button 
              onClick={() => { setActiveTrainTab('mro'); setActiveHotspot(null); }}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${activeTrainTab === 'mro' ? 'bg-lightBlue-600 text-white shadow-md shadow-lightBlue-600/30' : 'bg-white text-navy-900 border border-slate-300 hover:border-lightBlue-500'}`}
            >
              ⚙️ Precision Wheelset & Bogie
            </button>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 relative border border-slate-200 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs uppercase text-lightBlue-600 font-bold tracking-wider">{currentTrain.category}</span>
                <h3 className="font-heading text-2xl sm:text-4xl font-bold text-navy-900 mt-1">{currentTrain.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">{currentTrain.tagline}</p>
              </div>
              <span className="text-xs text-navy-900 flex items-center gap-1.5 bg-lightBlue-50 px-3 py-1.5 rounded-lg border border-lightBlue-200 font-semibold">
                <span className="w-2 h-2 rounded-full bg-lightBlue-600 animate-ping"></span>
                Click hotspots for specs
              </span>
            </div>

            <div className="relative w-full h-[360px] sm:h-[480px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 flex items-center justify-center">
              <img 
                src={currentTrain.img} 
                alt={currentTrain.title} 
                className="w-full h-full object-cover transition-all duration-500"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/800x500?text=Rolling+Stock'; }}
              />

              <div className="absolute inset-0">
                {currentTrain.hotspots.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setActiveHotspot(h)}
                    style={{ top: h.top, left: h.left }}
                    className="absolute w-8 h-8 rounded-full bg-lightBlue-600 text-white font-bold flex items-center justify-center shadow-lg hover:scale-125 transition-transform animate-pulse border-2 border-white"
                  >
                    +
                  </button>
                ))}
              </div>

              {activeHotspot && (
                <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-md bg-white border border-lightBlue-300 rounded-2xl p-5 shadow-2xl z-30">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-lightBlue-600"></span>
                      <h4 className="font-heading text-lg font-bold text-navy-900">{activeHotspot.title}</h4>
                    </div>
                    <button onClick={() => setActiveHotspot(null)} className="text-slate-400 hover:text-navy-900 p-1 font-bold">✕</button>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">{activeHotspot.desc}</p>
                </div>
              )}
            </div>

            <div className="mt-8">
              <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">
                Verified Technical Specifications
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {currentTrain.specs.map((s, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block uppercase text-[10px] font-bold">{s.label}</span>
                    <span className="font-bold text-navy-900 text-sm font-heading mt-0.5 block">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Before & After Locomotive Overhaul Slider Section */}
      <section className="py-20 bg-white border-y border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-bold text-lightBlue-600 tracking-wider">MRO & Remanufacturing</span>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-navy-900 leading-tight">
                EXTENDING LIFE: <br />
                <span className="text-lightBlue-600">FROM WEARY TO ZERO-HOUR</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Rather than discarding aging rail assets at high capital and environmental costs, SMH Rail's turnkey remanufacturing transforms 25+ year-old rolling stock into high-efficiency, digitally monitored vehicles with an additional 15–20 years of operating life.
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-lightBlue-100 text-lightBlue-700 flex items-center justify-center font-bold text-xs">✓</span>
                  <span><strong>50–60% Capital Cost Savings</strong> compared to buying new rolling stock</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-lightBlue-100 text-lightBlue-700 flex items-center justify-center font-bold text-xs">✓</span>
                  <span><strong>Circular Economy & ESG</strong>: Preserves high-grade structural steel</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-lightBlue-100 text-lightBlue-700 flex items-center justify-center font-bold text-xs">✓</span>
                  <span><strong>Modernized Electronics</strong>: Microprocessor control & diagnostics</span>
                </li>
              </ul>
              <div>
                <Link to="/solutions" className="inline-flex items-center gap-2 text-lightBlue-600 font-bold hover:text-lightBlue-700 text-sm">
                  <span>Learn More About Our Overhaul Capabilities &rarr;</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-4">
                <div className="text-xs text-slate-500 font-semibold mb-2 flex items-center justify-between">
                  <span>DRAG SLIDER TO REVEAL REMANUFACTURING TRANSFORMATION</span>
                  <span className="text-lightBlue-600 font-bold">Interactive</span>
                </div>

                {/* Overhaul Comparison Container */}
                <div 
                  id="overhaul-comparison"
                  className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden select-none cursor-pointer shadow-lg border border-slate-200"
                  onClick={(e) => handleSliderMove(e.clientX, e.currentTarget.getBoundingClientRect())}
                >
                  {/* After Image (Background Layer) */}
                  <img 
                    src="/src/assets/mainline.jpg" 
                    alt="After Overhaul" 
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
                  />
                  <div className="absolute bottom-4 left-4 bg-lightBlue-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider pointer-events-none z-10 shadow">
                    AFTER: ZERO-HOUR COMMISSIONING
                  </div>

                  {/* Before Image (Overlay Layer with dynamic width) */}
                  <div 
                    className="comparison-before absolute top-0 left-0 h-full overflow-hidden pointer-events-none"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img 
                      src="/src/assets/mro.jpg" 
                      alt="Before Overhaul" 
                      className="absolute top-0 left-0 h-full max-w-none object-cover" 
                      style={{ width: '100%', minWidth: '600px' }}
                    />
                    <div className="absolute bottom-4 left-4 bg-navy-950/80 px-3 py-1 rounded text-xs font-bold text-white uppercase tracking-wider pointer-events-none z-10 shadow">
                      BEFORE: HEAVY OVERHAUL BAY
                    </div>
                  </div>

                  {/* Draggable Handle */}
                  <div 
                    className="comparison-handle absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                    style={{ left: `${sliderPosition}%` }}
                    onMouseDown={(e) => { e.stopPropagation(); setIsDragging(true); }}
                    onTouchStart={(e) => { e.stopPropagation(); setIsDragging(true); }}
                  >
                    <div className="w-8 h-8 rounded-full bg-lightBlue-500 text-white flex items-center justify-center shadow-lg border-2 border-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-4 3 4 3m8-6l4 3-4 3"></path>
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Carbon Calculator Section */}
      <section className="py-20 relative bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs uppercase font-bold text-lightBlue-600 tracking-wider">Green Rail & ESG Impact</span>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-navy-900 leading-tight">
                ESTIMATE YOUR <br />
                <span className="text-lightBlue-600">FLEET CARBON SAVINGS</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                SMH Rail's H10 Eco-Locomotives integrate electronic common-rail fuel systems and auto-engine stop/start management, curbing up to 22% of diesel fuel and carbon emissions compared to legacy fleets.
              </p>
              <div>
                <Link to="/sustainability" className="inline-flex items-center gap-2 text-lightBlue-600 font-bold hover:text-lightBlue-700 text-sm">
                  <span>Read Our Full ESG & Sukuk Framework</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-8 border border-slate-200 shadow-xl">
                
                <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
                  <h3 className="font-heading text-2xl font-bold text-navy-900">Interactive Emissions Simulator</h3>
                  <span className="text-xs text-lightBlue-700 font-semibold px-2.5 py-1 rounded bg-lightBlue-100 border border-lightBlue-200">Real-Time Model</span>
                </div>

                {/* Slider 1: Fleet Size */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <label htmlFor="calc-fleet-size" className="text-slate-700">Locomotive Fleet Size</label>
                    <span className="text-lightBlue-600 font-heading text-lg font-bold">{fleetSize} Locomotives</span>
                  </div>
                  <input 
                    id="calc-fleet-size" 
                    type="range" 
                    min="2" 
                    max="50" 
                    value={fleetSize} 
                    onChange={(e) => setFleetSize(parseInt(e.target.value, 10))}
                    step="1" 
                    className="w-full accent-lightBlue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>2 Units</span>
                    <span>25 Units</span>
                    <span>50 Units</span>
                  </div>
                </div>

                {/* Slider 2: Annual Kilometers */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <label htmlFor="calc-annual-km" className="text-slate-700">Annual Kilometers per Unit</label>
                    <span className="text-lightBlue-600 font-heading text-lg font-bold">{annualKm.toLocaleString()} km / year</span>
                  </div>
                  <input 
                    id="calc-annual-km" 
                    type="range" 
                    min="40000" 
                    max="200000" 
                    value={annualKm} 
                    onChange={(e) => setAnnualKm(parseInt(e.target.value, 10))}
                    step="10000" 
                    className="w-full accent-lightBlue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>40,000 km</span>
                    <span>120,000 km</span>
                    <span>200,000 km</span>
                  </div>
                </div>

                {/* Calculation Output Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-[10px] uppercase text-slate-500 font-bold">Diesel Fuel Saved</div>
                    <div className="font-heading text-lg sm:text-xl font-bold text-navy-900 mt-1">{fuelSavedLiters.toLocaleString()} L</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Per annum</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-[10px] uppercase text-slate-500 font-bold">CO2 Avoided</div>
                    <div className="font-heading text-lg sm:text-xl font-bold text-emerald-600 mt-1">{co2AvoidedTonnes.toLocaleString()} Tonnes</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Emissions cut</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-[10px] uppercase text-slate-500 font-bold">Tree Equivalent</div>
                    <div className="font-heading text-lg sm:text-xl font-bold text-emerald-600 mt-1">{treesEquivalent.toLocaleString()} Trees</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Carbon offset</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                    <div className="text-[10px] uppercase text-slate-500 font-bold">Fuel Cost Saved</div>
                    <div className="font-heading text-lg sm:text-xl font-bold text-lightBlue-600 mt-1">${costSavingsUsd} USD</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">OPEX reduction</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Footprint & Country Dossier Section */}
      <section className="py-20 bg-white border-t border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lightBlue-100 border border-lightBlue-200 text-lightBlue-700 text-xs font-bold uppercase tracking-wider">
              Worldwide Deployment
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-navy-900 tracking-tight">
              TRACK OUR GLOBAL FOOTPRINT
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              From Malaysia to Germany and the African Copperbelt, discover where SMH Rail rolling stock is driving passenger and freight economies.
            </p>

            {/* Country Selector Pills */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {Object.keys(GLOBAL_PROJECTS).map((key) => {
                const item = GLOBAL_PROJECTS[key];
                const isActive = activeCountry === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCountry(key)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-lightBlue-50 border-lightBlue-300 text-lightBlue-700 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {item.country} {key === 'malaysia' && '(HQ)'}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive World Map & Dossier Container */}
          <div className="bg-[#f8fafc] rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Map Area with Background Image & Pins */}
            <div className="lg:col-span-7 relative h-[320px] sm:h-[420px] bg-slate-900 rounded-2xl overflow-hidden border border-slate-300 flex items-center justify-center">
              
              {/* World Map Background Image */}
              <img 
                src="/assets/world-map.png" 
                alt="World Map" 
                className="absolute inset-0 w-full h-full object-cover opacity-85 pointer-events-none"
              />

              {/* Render Map Pins */}
              {Object.keys(GLOBAL_PROJECTS).map((key) => {
                const item = GLOBAL_PROJECTS[key];
                const isActive = activeCountry === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCountry(key)}
                    style={{ left: item.coords.x, top: item.coords.y }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all cursor-pointer flex items-center justify-center group z-10 ${
  isActive 
    ? 'w-6 h-6 bg-amber-400 ring-4 ring-white scale-125 shadow-xl' 
    : 'w-4 h-4 bg-rose-500 hover:scale-125 shadow-md'
}`}
                    title={item.country}
                  >
                    <span className={`absolute rounded-full bg-cyan-400/50 animate-ping pointer-events-none ${isActive ? 'w-10 h-10' : 'w-6 h-6'}`}></span>
                    <span className="sr-only">{item.country}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Country Details Card */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs uppercase font-bold text-lightBlue-600 tracking-wider">Country Dossier</span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900 mt-0.5 flex items-center gap-2">
                    <span>{currentProject.flag}</span> {currentProject.country}
                  </h3>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-lightBlue-50 text-lightBlue-700 border border-lightBlue-200">
                  Active Hub
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-[11px] uppercase text-slate-400 font-bold">Operational Role</div>
                  <div className="text-sm font-bold text-navy-900 font-heading">{currentProject.role}</div>
                </div>

                <div>
                  <div className="text-[11px] uppercase text-slate-400 font-bold">Key Project Scope</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">{currentProject.scope}</p>
                </div>

                <div>
                  <div className="text-[11px] uppercase text-slate-400 font-bold">Key Client / Authority</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">{currentProject.client}</div>
                </div>

                <div className="pt-2">
                  <div className="text-[11px] uppercase text-slate-400 font-bold mb-2">Engineering Highlights</div>
                  <ul className="space-y-1.5">
                    {currentProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-lightBlue-600"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Partners Sliding Infinite Marquee Section */}
      <section className="py-8 bg-white border-b border-slate-200 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Trusted by Global Rail Leaders & Tier-1 OEMs</span>
        </div>
        <div className="w-full overflow-hidden relative flex">
          <div className="animate-marquee flex items-center gap-12 py-2">
            {/* Original Items */}
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-siemens.png" alt="Siemens" className="max-h-7 max-w-full object-contain" />
            </div>
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-hyundai.png" alt="Hyundai Rotem" className="max-h-7 max-w-full object-contain" />
            </div>
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-thales.png" alt="Thales" className="max-h-7 max-w-full object-contain" />
            </div>
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-abb.png" alt="ABB" className="max-h-7 max-w-full object-contain" />
            </div>
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-caterpillar.png" alt="Caterpillar" className="max-h-7 max-w-full object-contain" />
            </div>
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-cummins.png" alt="Cummins" className="max-h-7 max-w-full object-contain" />
            </div>
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-medha.png" alt="Medha" className="max-h-7 max-w-full object-contain" />
            </div>
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-wabtec.jpg" alt="Wabtec" className="max-h-7 max-w-full object-contain" />
            </div>
            
            {/* Duplicate Set for Seamless Infinite Sliding */}
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-siemens.png" alt="Siemens" className="max-h-7 max-w-full object-contain" />
            </div>
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-hyundai.png" alt="Hyundai Rotem" className="max-h-7 max-w-full object-contain" />
            </div>
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-thales.png" alt="Thales" className="max-h-7 max-w-full object-contain" />
            </div>
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-abb.png" alt="ABB" className="max-h-7 max-w-full object-contain" />
            </div>
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-caterpillar.png" alt="Caterpillar" className="max-h-7 max-w-full object-contain" />
            </div>
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-cummins.png" alt="Cummins" className="max-h-7 max-w-full object-contain" />
            </div>
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-medha.png" alt="Medha" className="max-h-7 max-w-full object-contain" />
            </div>
            <div className="h-12 w-36 px-3 py-1 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src="/src/assets/partner-wabtec.jpg" alt="Wabtec" className="max-h-7 max-w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Fast Track Commercial Inquiries Section */}
      <section className="py-20 bg-gradient-to-b from-[#f8fafc] to-white border-t border-slate-200 relative text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-lightBlue-100 border border-lightBlue-200 text-lightBlue-700 text-xs font-bold uppercase tracking-wider">
            Fast Track Commercial Inquiries
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-navy-900 tracking-tight leading-tight">
            READY TO MODERNIZE OR EXPAND YOUR RAIL FLEET?
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Use our interactive Fleet Configurator to specify gauge, passenger or freight requirements, and MRO service levels for an immediate technical summary.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a 
              href="contact#offices-section" 
              className="px-7 py-3.5 rounded-xl bg-lightBlue-600 hover:bg-lightBlue-700 text-white font-bold text-sm uppercase tracking-wider shadow-md transition-all hover:scale-105"
            >
              Launch Fleet Configurator
            </a>
            <a 
              href="contact#rfq-form" 
              className="px-7 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-lightBlue-500 text-navy-900 font-bold text-sm uppercase tracking-wider shadow-sm transition-all"
            >
              Connect With Engineering Sales
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
