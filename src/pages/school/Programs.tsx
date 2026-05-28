import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { schoolPrograms } from '../../data/schoolPrograms';
export const SchoolPrograms: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Strip */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-500/20 blur-[120px] rounded-full pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Programs
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            From the first wobbly steps of preschool to the confident stride of
            graduation — a journey designed for every stage.
          </p>
        </div>
      </section>

      {/* Program Sections */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {schoolPrograms.map((program, i) =>
          <motion.div
            key={program.id}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.6
            }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${program.gradient} text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-md`}>
                
                  {program.stage}
                </div>
                <div className="text-sm text-slate-500 font-medium mb-2">
                  {program.ageRange}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {program.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {program.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {program.highlights.map((h) =>
                <li key={h} className="flex items-start gap-3">
                      <div
                    className={`w-6 h-6 rounded-full bg-gradient-to-br ${program.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    
                        <Check
                      className="w-3.5 h-3.5 text-white"
                      strokeWidth={3} />
                    
                      </div>
                      <span className="text-slate-700 font-medium">{h}</span>
                    </li>
                )}
                </ul>
                <Link
                to="/school/admissions"
                className="inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors">
                
                  Enroll in this program <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                  <div
                  className={`absolute inset-0 bg-gradient-to-br ${program.gradient}`} />
                
                  <div className="absolute inset-0 bg-dot-pattern opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <program.icon
                      className="w-16 h-16 text-white"
                      strokeWidth={1.5} />
                    
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                      {program.stage}
                    </div>
                    <div className="text-lg font-bold text-slate-900">
                      {program.title}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>);

};