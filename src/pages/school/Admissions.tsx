import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FileText,
  Calendar,
  ClipboardCheck,
  Users,
  ArrowRight } from
'lucide-react';
const steps = [
{
  num: '01',
  title: 'Inquire',
  description:
  'Submit our online inquiry form and tell us a little about your child.',
  icon: FileText
},
{
  num: '02',
  title: 'Visit',
  description:
  'Book a campus tour to meet our team and see learning in action.',
  icon: Users
},
{
  num: '03',
  title: 'Apply',
  description:
  'Complete the formal application with previous school reports and recommendations.',
  icon: ClipboardCheck
},
{
  num: '04',
  title: 'Welcome',
  description:
  'Receive your offer and join us for orientation before the academic year begins.',
  icon: Calendar
}];

const fees = [
{
  stage: 'Early Years',
  range: '$4,800 / term',
  tag: 'Ages 3-5'
},
{
  stage: 'Primary',
  range: '$5,600 / term',
  tag: 'Ages 6-10'
},
{
  stage: 'Junior Secondary',
  range: '$6,800 / term',
  tag: 'Ages 11-14'
},
{
  stage: 'Senior Secondary',
  range: '$7,400 / term',
  tag: 'Ages 15-18'
}];

export const SchoolAdmissions: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Strip */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
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
              ease: 'easeInOut'
            }}
            className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-pink-500/30 blur-[100px]" />
          
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Admissions
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A clear, simple, and warm process — designed with families in mind.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How to apply
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Four simple steps from first hello to first day of school.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) =>
            <motion.div
              key={step.num}
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
              className="group relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              
                <div className="text-7xl font-bold text-pink-50 absolute top-4 right-4 leading-none">
                  {step.num}
                </div>
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-yellow-400 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/20">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed relative">
                  {step.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-24 bg-white relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Tuition & fees
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Transparent pricing with scholarship and sibling discount
              opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {fees.map((fee, i) =>
            <motion.div
              key={fee.stage}
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
              className="flex items-center justify-between p-6 rounded-2xl border border-slate-200 hover:border-pink-300 hover:bg-pink-50/30 transition-all">
              
                <div>
                  <div className="text-xs font-medium text-slate-500 mb-1">
                    {fee.tag}
                  </div>
                  <div className="text-lg font-bold text-slate-900">
                    {fee.stage}
                  </div>
                </div>
                <div className="text-xl font-bold text-pink-600">
                  {fee.range}
                </div>
              </motion.div>
            )}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/school/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-medium shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:-translate-y-0.5 transition-all">
              
              Request Application Form <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>);

};