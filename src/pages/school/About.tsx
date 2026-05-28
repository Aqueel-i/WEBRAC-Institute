import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Heart, CheckCircle2 } from 'lucide-react';
import { schoolFaculty } from '../../data/schoolPrograms';
export const SchoolAbout: React.FC = () => {
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
            className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-pink-500/30 blur-[100px]" />
          
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
            className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-yellow-400/30 blur-[100px]" />
          
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-300">
              WEBRAC School
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
            
            Three decades of nurturing curious minds, kind hearts, and confident
            futures.
          </motion.p>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
            {
              icon: Eye,
              title: 'Our Vision',
              desc: 'To be the school where every child discovers their unique strengths and the courage to use them in the world.',
              color: 'text-pink-600',
              bg: 'bg-pink-50'
            },
            {
              icon: Target,
              title: 'Our Mission',
              desc: 'To deliver an internationally benchmarked, holistic education that prepares students for academic excellence and meaningful lives.',
              color: 'text-yellow-600',
              bg: 'bg-yellow-50'
            },
            {
              icon: Heart,
              title: 'Our Promise',
              desc: 'A safe, joyful, and inclusive community where children are known, loved, and challenged to grow every day.',
              color: 'text-cyan-600',
              bg: 'bg-cyan-50'
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

      {/* Why Choose */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why families choose WEBRAC
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A learning community built on care, curiosity, and a belief in
              every child.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
            'Internationally benchmarked Cambridge curriculum',
            'Small class sizes (max 18 students)',
            'On-campus STEM, music, and arts studios',
            'Daily wellbeing and outdoor learning time',
            'University counselling from Grade 9',
            'Inclusive scholarship and bursary programs'].
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
                delay: i * 0.08
              }}
              className="flex items-start gap-4 p-4">
              
                <CheckCircle2 className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{point}</span>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="py-24 bg-slate-900 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 p-1 mb-8">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center border-4 border-slate-900">
              <span className="text-2xl font-bold text-white">EM</span>
            </div>
          </div>
          <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
            "We don't just educate children — we walk alongside them as they
            discover who they are becoming."
          </blockquote>
          <div className="text-slate-400">
            <div className="font-bold text-white text-lg">
              Dr. Eleanor Morgan
            </div>
            <div>Head of School, WEBRAC School</div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Meet our teachers
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Educators who teach with passion and lead with heart.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolFaculty.map((teacher, i) => {
              const initials = teacher.name.
              split(' ').
              map((n) => n[0]).
              join('').
              substring(0, 2);
              return (
                <motion.div
                  key={teacher.id}
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
                  
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-pink-100 to-yellow-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-xl font-bold text-pink-700">
                      {initials}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {teacher.name}
                  </h3>
                  <div className="text-sm text-pink-600 font-medium mb-1">
                    {teacher.role}
                  </div>
                  <div className="text-xs text-slate-500">
                    {teacher.subject}
                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </section>
    </div>);

};