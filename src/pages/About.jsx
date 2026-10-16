import React from 'react';

export default function About() {
  return (
    <div className="bg-[#f8fafc] text-slate-800 antialiased">
      
      {/* Banner */}
      <section className="py-20 relative bg-gradient-to-b from-lightBlue-50 via-white to-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lightBlue-100 border border-lightBlue-200 text-lightBlue-700 text-xs font-bold uppercase tracking-wider">
            Our Story & Heritage
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold text-navy-900 tracking-tight">
            40+ YEARS EXTENDING LIFE IN RAIL
          </h1>
          <p className="text-slate-600 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            From the first burst of steam to the hum of automated driverless metros today, rail is built on innovation. SMH Rail proudly shapes that legacy with cutting-edge technologies and deep global experience.
          </p>
        </div>
      </section>

      {/* Mission & Vision (Clean White Surface) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lightBlue-100 border border-lightBlue-200 text-lightBlue-700 text-xs font-bold uppercase tracking-wider">
                Pioneering Philosophy
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-bold text-navy-900">
                PIONEERS IN ROLLING STOCK MANUFACTURING
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                SMH Rail is a leading rolling stock manufacturing and maintenance company, shaping industry trends with cutting-edge technologies, value-driven solutions, and a strong talent pool of certified railway engineers.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our passion is reinforced by extensive global experience working with partners in the rail industry to deliver effective turnkey solutions, forward-thinking engineering products, and cost-effective maintenance to customers worldwide.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div>
                  <h4 className="font-heading text-xl font-bold text-lightBlue-600">Our Vision</h4>
                  <p className="text-xs text-slate-600 mt-1">To be the global benchmark in sustainable rolling stock manufacturing and fleet life extension.</p>
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-lightBlue-600">Our Mission</h4>
                  <p className="text-xs text-slate-600 mt-1">Engaging with clients to design, build, and maintain safe, fit-for-purpose mobility solutions that endure.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-200 shadow-lg">
              <h3 className="font-heading text-2xl font-bold text-navy-900 border-b border-slate-200 pb-3">
                Core Pillars of Excellence
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-lightBlue-100 text-lightBlue-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    01
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Uncompromising Safety</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Crashworthiness standards (AAR S-580), automated braking systems, and rigorous non-destructive testing on all load-bearing components.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-lightBlue-100 text-lightBlue-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    02
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Extending Life Ethos</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Engineering maximum longevity into every carbody and component, dramatically lowering our clients' total cost of ownership (TCO).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 rounded-lg bg-lightBlue-100 text-lightBlue-700 flex items-center justify-center font-bold text-sm flex-shrink-0">
                    03
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-navy-900">Turnkey Integration</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      From blank-sheet CAD design and bogie fabrication to final dynamic commissioning on our dedicated dual-gauge test track.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Historical Milestones Timeline (Fully Responsive for Mobile & Desktop) */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lightBlue-100 border border-lightBlue-200 text-lightBlue-700 text-xs font-bold uppercase tracking-wider">
              Journey Through Time
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-navy-900">OUR 40-YEAR JOURNEY</h2>
            <p className="text-slate-600 text-sm">Key milestones that transformed SMH Rail into Southeast Asia’s premier locomotive manufacturer.</p>
          </div>

          <div className="relative border-l-2 border-lightBlue-200 ml-4 sm:ml-8 space-y-12">
            
            {/* Timeline Item 1 */}
            <div className="relative pl-8 sm:pl-10">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-lightBlue-600 ring-4 ring-lightBlue-100"></div>
              <span className="text-lightBlue-600 font-heading text-lg font-bold">1983</span>
              <h4 className="text-base font-bold text-navy-900 mt-1">Foundation of Engineering Excellence</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Established in Malaysia as a specialized railway maintenance and component service provider for national rail fleets.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-8 sm:pl-10">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-lightBlue-600 ring-4 ring-lightBlue-100"></div>
              <span className="text-lightBlue-600 font-heading text-lg font-bold">2005</span>
              <h4 className="text-base font-bold text-navy-900 mt-1">Establishment of Rasa Manufacturing Complex</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Acquired and developed the 40+ acre manufacturing hub in Hulu Selangor, installing heavy fabrication bays and dual-gauge tracks.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-8 sm:pl-10">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-lightBlue-600 ring-4 ring-lightBlue-100"></div>
              <span className="text-lightBlue-600 font-heading text-lg font-bold">2012</span>
              <h4 className="text-base font-bold text-navy-900 mt-1">MRT Line 1 (Kajang Line) Assembly Contract</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Selected to assemble 58 four-car driverless electric trainsets, successfully proving Malaysia's capability to deliver modern metro rolling stock.
              </p>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative pl-8 sm:pl-10">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-lightBlue-600 ring-4 ring-lightBlue-100"></div>
              <span className="text-lightBlue-600 font-heading text-lg font-bold">2018</span>
              <h4 className="text-base font-bold text-navy-900 mt-1">MRT Line 2 (Putrajaya Line) & Global Exports</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Turnkey assembly of 49 GoA4 driverless trainsets in partnership with Hyundai Rotem, and major locomotive overhauls for Africa's TAZARA.
              </p>
            </div>

            {/* Timeline Item 5 */}
            <div className="relative pl-8 sm:pl-10">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-lightBlue-600 ring-4 ring-lightBlue-100"></div>
              <span className="text-lightBlue-600 font-heading text-lg font-bold">2021 – Present</span>
              <h4 className="text-base font-bold text-navy-900 mt-1">Launch of H10 Eco-Series & Sukuk Framework</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                Unveiled the H10 Series 3,300 HP eco-diesel locomotive and established Berapit Mobility's Sustainability Sukuk Framework for green mobility.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* International Quality Accreditations */}
      <section id="certifications" className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lightBlue-100 border border-lightBlue-200 text-lightBlue-700 text-xs font-bold uppercase tracking-wider">
              Audited & Certified
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-bold text-navy-900">
              INTERNATIONAL QUALITY ACCREDITATIONS
            </h2>
            <p className="text-slate-600 text-sm">
              SMH Rail operates under the world's most rigorous railway engineering standards, ensuring safety, structural endurance, and defect-free delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white rounded-2xl p-6 space-y-3 border border-slate-200 shadow-sm">
              <div className="text-lightBlue-600 font-heading text-2xl font-bold">IRIS ISO/TS 22163</div>
              <div className="text-xs uppercase text-slate-500 font-semibold">International Railway Industry Standard</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The global gold standard for railway manufacturers. Validates our end-to-end design, supply chain governance, project management, and life-cycle costing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-3 border border-slate-200 shadow-sm">
              <div className="text-lightBlue-600 font-heading text-2xl font-bold">EN 15085-2 CL1</div>
              <div className="text-xs uppercase text-slate-500 font-semibold">Railway Vehicle Welding Quality</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Highest European certification tier for the welding of railway vehicles and safety-critical structural components like bogie frames, couplers, and underframes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 space-y-3 border border-slate-200 shadow-sm">
              <div className="text-lightBlue-600 font-heading text-2xl font-bold">ISO 9001:2015</div>
              <div className="text-xs uppercase text-slate-500 font-semibold">Quality Management System</div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive quality assurance across all manufacturing stages, non-destructive testing protocols, precision calibration, and customer service delivery.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}