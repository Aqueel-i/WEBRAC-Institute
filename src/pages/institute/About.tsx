import React from 'react';
import { motion } from 'framer-motion';
import {
  Eye,
  Target,
  Heart,
  CheckCircle2,
  Linkedin,
  Twitter
} from
  'lucide-react';
import { lecturers, staff } from '../../data/lecturers';
const timeline = [
  {
    year: '1995',
    title: 'Founded',
    description:
      'WEBRAC Institute was established with a vision to provide quality IT education.'
  },
  {
    year: '2005',
    title: 'Campus Expansion',
    description:
      'Opened our new state-of-the-art campus in the heart of the city.'
  },
  {
    year: '2015',
    title: 'International Accreditation',
    description:
      'Received global recognition and partnered with leading international universities.'
  },
  {
    year: '2020',
    title: 'Digital Campus',
    description:
      'Launched our comprehensive online learning platform and virtual labs.'
  },
  {
    year: '2026',
    title: 'Today',
    description:
      'Leading the way in modern tech education with over 12,000 active students.'
  }];

export const InstituteAbout: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Strip */}
      <section className="relative py-24 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />
          <motion.div
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-violet-600/30 blur-[100px]" />

          <motion.div
            animate={{
              x: [0, -20, 0],
              y: [0, -30, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-cyan-500/30 blur-[100px]" />

        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-5xl font-bold text-white mb-6">

            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              WEBRAC Institute
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
              delay: 0.1
            }}
            className="text-lg text-slate-300 max-w-2xl mx-auto">

            Empowering the next generation of tech leaders through innovative
            education and industry-aligned programs.
          </motion.p>
        </div>
      </section>

      {/* Vision/Mission/Values */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: 'Our Vision',
                desc: 'To be the premier institution for technology education, recognized globally for excellence and innovation.',
                color: 'text-violet-600',
                bg: 'bg-violet-50'
              },
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To provide accessible, high-quality education that equips students with the skills needed to thrive in the digital economy.',
                color: 'text-cyan-600',
                bg: 'bg-cyan-50'
              },
              {
                icon: Heart,
                title: 'Core Values',
                desc: 'Excellence, Innovation, Integrity, Inclusivity, and Lifelong Learning form the foundation of everything we do.',
                color: 'text-pink-600',
                bg: 'bg-pink-50'
              }].
              map((item, i) =>
                <motion.div
                  key={item.title}
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
                    delay: i * 0.1
                  }}
                  className="p-8 rounded-3xl bg-white/70 backdrop-blur-xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">

                  <div
                    className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>

                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              )}
          </div>
        </div>
      </section>

      {/* Why Choose WEBRAC */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why Choose WEBRAC?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We offer a unique blend of academic rigor and practical
              experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Industry-recognized certifications',
              'State-of-the-art computer labs',
              'Experienced faculty from the tech industry',
              'Dedicated career placement assistance',
              'Flexible learning schedules',
              'Modern digital learning platform'].
              map((point, i) =>
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: i * 0.1
                  }}
                  className="flex items-start gap-4 p-4">

                  <CheckCircle2 className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{point}</span>
                </motion.div>
              )}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Journey
            </h2>
          </div>
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-600 via-pink-500 to-cyan-500 rounded-full transform md:-translate-x-1/2 opacity-20" />

            {timeline.map((item, i) =>
              <motion.div
                key={item.year}
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
                className={`relative flex items-center justify-between mb-12 md:mb-24 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-violet-600 shadow-[0_0_15px_rgba(139,92,246,0.6)] transform -translate-x-[6px] md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div
                  className={`ml-12 md:ml-0 w-full md:w-[45%] ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>

                  <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-bold mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-24 bg-slate-900 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 p-1 mb-8">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center border-4 border-slate-900">
              <span className="text-2xl font-bold text-white">WEBRAC</span>
            </div>
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
            "Education is not just about acquiring knowledge; it's about
            developing the capacity to adapt, innovate, and lead in an
            ever-changing digital world."
          </blockquote>
          <div className="text-slate-400">
            <div className="font-bold text-white text-lg">
              Mr. Naveen Dulanjana
            </div>
            <div>Principal & Founder, WEBRAC Institute</div>
          </div>
        </div>
      </section>

      {/* Lecturers Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Expert Team of Lecturers
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Learn from industry veterans and academic experts.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {lecturers.map((lecturer, i) => {
              const initials = lecturer.name.
                split(' ').
                map((n) => n[0]).
                join('').
                substring(0, 2);
              return (
                <motion.div
                  key={lecturer.id}
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
                    delay: i * 0.05
                  }}
                  className="group bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">

                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-violet-100 to-cyan-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold text-violet-700">
                      {initials}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {lecturer.name}
                  </h3>
                  <div className="text-sm text-violet-600 font-medium mb-2">
                    {lecturer.specialization}
                  </div>
                  <div className="text-xs text-slate-500 mb-4">
                    {lecturer.qualification}
                  </div>
                  <div className="flex justify-center gap-3">
                    <a
                      href={lecturer.social.linkedin}
                      className="text-slate-400 hover:text-violet-600 transition-colors">

                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={lecturer.social.twitter}
                      className="text-slate-400 hover:text-cyan-500 transition-colors">

                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Administrative Staff */}
      <section className="py-24 bg-slate-50 relative z-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Administrative Staff
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((member, i) =>
              <motion.div
                key={member.id}
                initial={{
                  opacity: 0,
                  scale: 0.95
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: i * 0.1
                }}
                className="bg-white rounded-2xl p-6 border border-slate-200 text-center">

                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <div className="text-sm text-slate-500 font-medium mb-3">
                  {member.department}
                </div>
                <div className="text-sm text-slate-600">{member.email}</div>
                <div className="text-sm text-slate-600">{member.phone}</div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

};