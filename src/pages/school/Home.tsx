import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Heart,
  Star,
  Users,
  Award,
  Smile,
  ChevronRight } from
'lucide-react';
import { schoolPrograms } from '../../data/schoolPrograms';
const stats = [
{
  label: 'Happy Students',
  value: '2,400+',
  icon: Smile
},
{
  label: 'Dedicated Teachers',
  value: '180+',
  icon: Users
},
{
  label: 'Years of Excellence',
  value: '30',
  icon: Award
},
{
  label: 'Activities & Clubs',
  value: '60+',
  icon: Star
}];

const values = [
{
  title: 'Child-Centered',
  description:
  "Every learner is unique. We tailor our approach to nurture each child's individual potential.",
  icon: Heart,
  color: 'bg-pink-50 text-pink-600'
},
{
  title: 'Joyful Learning',
  description:
  'Education should spark joy. Our classrooms are vibrant places where curiosity thrives.',
  icon: Sparkles,
  color: 'bg-yellow-50 text-yellow-600'
},
{
  title: 'Holistic Growth',
  description:
  'We develop minds, hearts, and bodies through academics, arts, sports, and character.',
  icon: Star,
  color: 'bg-cyan-50 text-cyan-600'
}];

export const SchoolHome: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dot-pattern opacity-30" />
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute top-[-10%] left-[-5%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-pink-400/25 blur-[120px]" />
          
          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, -40, 0]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-yellow-400/25 blur-[120px]" />
          
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center mt-12">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-sm mb-8">
            
            <span className="flex h-2 w-2 rounded-full bg-pink-500"></span>
            <span className="text-sm font-medium text-slate-600">
              Now enrolling for the 2026 academic year
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.05]">
            
            Where young minds <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400">
              find their wings
            </span>
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            
            From early years to graduation, WEBRAC School offers a nurturing,
            world-class education that celebrates every child's unique journey.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.3
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            <Link
              to="/school/admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full hover:opacity-90 transition-all shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-0.5">
              
              Start Application
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/school/programs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-slate-700 bg-white rounded-full border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:-translate-y-0.5">
              
              Explore Programs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-slate-200/50 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) =>
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}
              className="flex flex-col items-center text-center">
              
                <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-pink-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-slate-500">
                  {stat.label}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              A journey for every age
            </h2>
            <p className="text-lg text-slate-600">
              From the first day of preschool to graduation, our programs grow
              with your child.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schoolPrograms.map((program, i) =>
            <motion.div
              key={program.id}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}
              className="group relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              
                <div
                className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${program.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
              
                <div
                className={`relative w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${program.gradient} shadow-lg`}>
                
                  <program.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-xs font-bold tracking-wider text-pink-600 uppercase mb-2">
                  {program.ageRange}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {program.description}
                </p>
                <Link
                to="/school/programs"
                className="inline-flex items-center text-sm font-semibold text-pink-600 group-hover:text-pink-700">
                
                  Learn more{' '}
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our values shape every day
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) =>
            <motion.div
              key={value.title}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.1
              }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
              
                <div
                className={`w-14 h-14 rounded-2xl ${value.color} flex items-center justify-center mb-6`}>
                
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-pink-500 to-yellow-400 p-12 md:p-16 text-center text-white shadow-2xl shadow-pink-500/20">
            <div className="absolute inset-0 bg-dot-pattern opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to give your child the best start?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                Book a campus tour or start your application today. Limited
                seats available for the 2026 intake.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/school/admissions"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-pink-600 bg-white rounded-full hover:bg-slate-50 transition-all shadow-lg hover:-translate-y-0.5">
                  
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/school/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white border border-white/40 rounded-full hover:bg-white/10 transition-all">
                  
                  Book a Tour
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);

};