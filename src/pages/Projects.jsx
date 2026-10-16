import React, { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      id: 'mrt2',
      category: 'malaysia',
      badge: '🇲🇾 Malaysia',
      type: 'Urban Transit',
      client: 'Client: MRT Corp Malaysia / Hyundai Rotem',
      title: 'MRT Putrajaya Line (MRT2)',
      description: 'Turnkey manufacturing, assembly, and testing of 49 driverless electric trainsets (GoA4 unattended operation) executing daily mass transit across Kuala Lumpur.',
      stat1Label: 'Fleet Size:',
      stat1Val: '49 Trainsets',
      stat2Label: 'Automation:',
      stat2Val: 'GoA4 Driverless',
      footerText: 'Commissioned & In Full Revenue Service',
      img: '/src/assets/mrt2.jpg',
    },
    {
      id: 'h10-export',
      category: 'africa',
      badge: '🌍 Global Export',
      type: 'Mainline Haul',
      client: 'Export: Cross-Continental Rail Freight',
      title: 'H10 Series 3,300 HP Eco-Locomotives',
      description: 'Design, fabrication, and export of heavy-haul diesel-electric locomotives engineered to handle extreme tropical temperatures, steep gradients, and heavy mineral cargo.',
      stat1Label: 'Power Rating:',
      stat1Val: '3,300 HP',
      stat2Label: 'Fuel Savings:',
      stat2Val: 'Up to 22% Cut',
      footerText: 'Built to EPA Tier 3 Standards',
      img: '/src/assets/g10-loco.jpg',
    },
    {
      id: 'tazara',
      category: 'africa',
      badge: '🇹🇿 🇿🇲 Tanzania & Zambia',
      type: 'MRO Life Extension',
      client: 'Client: TAZARA Railway Authority',
      title: 'Mainline Locomotives Remanufacturing',
      description: 'Comprehensive turnkey remanufacturing of heavy diesel-electric mainline locomotives connecting the port of Dar es Salaam with Zambia’s Copperbelt mining region.',
      stat1Label: 'Corridor:',
      stat1Val: '1,860 km Track',
      stat2Label: 'Life Added:',
      stat2Val: '+15 Years',
      footerText: 'Revitalized Regional Trade',
      img: '/src/assets/mainline.jpg',
    },
    {
      id: 'mrt1',
      category: 'malaysia',
      badge: '🇲🇾 Malaysia',
      type: 'Urban Transit',
      client: 'Client: MRT Corp Malaysia',
      title: 'MRT Kajang Line (MRT1) Trainsets',
      description: 'Turnkey local assembly of 58 four-car electric trainsets (Siemens Inspiro platform). Proved local Malaysian engineering capability to execute world-class driverless trains.',
      stat1Label: 'Trainsets:',
      stat1Val: '58 Units',
      stat2Label: 'Local Assembly:',
      stat2Val: '100% Rasa Plant',
      footerText: 'Pinnacle Urban Rail Milestone',
      img: '/src/assets/urban.jpg',
    },
    {
      id: 'europe',
      category: 'europe',
      badge: '🇩🇪 Germany',
      type: 'Precision Engineering',
      client: 'European Railway Logistics Collaboration',
      title: 'Mainline Locomotive Remanufacture',
      description: 'Execution of critical locomotive structural remanufacturing and bogie components adhering to stringent European TSI (Technical Specifications for Interoperability).',
      stat1Label: 'Welding Tier:',
      stat1Val: 'EN 15085-2 CL1',
      stat2Label: 'Standard:',
      stat2Val: 'European TSI',
      footerText: 'High Precision European Standards',
      img: '/src/assets/wheel.jpg',
    },
    {
      id: 'thailand',
      category: 'asean',
      badge: '🇹🇭 Thailand',
      type: 'Freight & Parts',
      client: 'State Railway of Thailand Supply Chain',
      title: 'Metre-Gauge Cross-Border Logistics',
      description: 'Supply of heavy-duty freight wagon bogies, automated wheel reprofiling support, and locomotive overhaul parts ensuring interoperable cross-border traffic between Malaysia and Thailand.',
      stat1Label: 'Track Gauge:',
      stat1Val: '1,000 mm Metre',
      stat2Label: 'Focus:',
      stat2Val: 'Wheelsets & Bogies',
      footerText: 'ASEAN Interoperability',
      img: '/src/assets/freight.jpg',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased">
      
      {/* Banner */}
      <section className="py-20 relative bg-gradient-to-b from-lightBlue-50 via-white to-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lightBlue-100 border border-lightBlue-200 text-lightBlue-700 text-xs font-bold uppercase tracking-wider">
            Proven Track Record
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-navy-900 tracking-tight">
            A PROVEN TRACK RECORD OF SUCCESS
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Over 40 years of delivering mission-critical rolling stock across domestic megaprojects and international export corridors in Asia, Africa, and Europe.
          </p>
        </div>
      </section>

      {/* Interactive Filter Bar */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold text-navy-900">Filter By Region:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeFilter === 'all' ? 'bg-lightBlue-600 text-white shadow-sm' : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-lightBlue-500'}`}
            >
              All Projects ({projectsData.length})
            </button>
            <button 
              onClick={() => setActiveFilter('malaysia')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeFilter === 'malaysia' ? 'bg-lightBlue-600 text-white shadow-sm' : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-lightBlue-500'}`}
            >
              Malaysia
            </button>
            <button 
              onClick={() => setActiveFilter('africa')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeFilter === 'africa' ? 'bg-lightBlue-600 text-white shadow-sm' : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-lightBlue-500'}`}
            >
              Africa (Tanzania & Zambia)
            </button>
            <button 
              onClick={() => setActiveFilter('europe')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeFilter === 'europe' ? 'bg-lightBlue-600 text-white shadow-sm' : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-lightBlue-500'}`}
            >
              Europe (Germany)
            </button>
            <button 
              onClick={() => setActiveFilter('asean')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeFilter === 'asean' ? 'bg-lightBlue-600 text-white shadow-sm' : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-lightBlue-500'}`}
            >
              ASEAN & India
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl overflow-hidden group flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div className="h-56 relative overflow-hidden bg-slate-100">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Project+View'; }}
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold bg-navy-900/90 text-lightBlue-300 border border-lightBlue-500/30 uppercase tracking-wider">
                      {project.badge}
                    </span>
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase bg-navy-900/90 text-white px-2.5 py-1 rounded">
                      {project.type}
                    </span>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="text-xs uppercase text-slate-500 font-semibold">{project.client}</div>
                    <h3 className="font-heading text-2xl font-bold text-navy-900 group-hover:text-lightBlue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-slate-100">
                      <div><span className="text-slate-500">{project.stat1Label}</span> <span className="font-bold text-navy-900">{project.stat1Val}</span></div>
                      <div><span className="text-slate-500">{project.stat2Label}</span> <span className="font-bold text-lightBlue-600">{project.stat2Val}</span></div>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <span className="text-[11px] text-lightBlue-700 font-semibold block bg-lightBlue-50 p-2 rounded border border-lightBlue-200 text-center">
                    {project.footerText}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}