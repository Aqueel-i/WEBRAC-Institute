import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Users,
  Trophy,
  Star,
  ChevronRight,
  PlayCircle } from
'lucide-react';
import { Link } from 'react-router-dom';
import { newsArticles as newsData } from '../../data/news';
const stats = [
{
  label: 'Success Rate',
  value: '98%',
  icon: Trophy
},
{
  label: 'Active Students',
  value: '12K+',
  icon: Users
},
{
  label: 'Expert Lecturers',
  value: '150+',
  icon: Star
},
{
  label: 'Premium Courses',
  value: '45+',
  icon: BookOpen
}];

const features = [
{
  title: 'Industry-Aligned Curriculum',
  description:
  'Our courses are designed with industry leaders to ensure you learn the most relevant skills.',
  icon: BookOpen,
  color: 'blue'
},
{
  title: 'Expert Faculty',
  description:
  'Learn from experienced professionals who bring real-world knowledge to the classroom.',
  icon: Users,
  color: 'purple'
},
{
  title: 'Modern Campus',
  description:
  'State-of-the-art facilities equipped with the latest technology for an optimal learning experience.',
  icon: Star,
  color: 'cyan'
}];

export const InstituteHome: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dot-pattern opacity-30" />
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-violet-400/20 blur-[120px]" />
          
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-cyan-400/20 blur-[120px]" />
          
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
            
            <span className="flex h-2 w-2 rounded-full bg-violet-600"></span>
            <span className="text-sm font-medium text-slate-600">
              Admissions open for 2026 intake
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
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            
            Shape Your Future with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-500">
              Premium Education
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
            
            Join WEBRAC Institute to access world-class professional education,
            industry-aligned courses, and a pathway to a successful career.
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
              to="/institute/apply"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full hover:opacity-90 transition-all shadow-lg shadow-violet-600/25 hover:shadow-violet-600/40 hover:-translate-y-0.5">
              
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/institute/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-slate-700 bg-white rounded-full border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:-translate-y-0.5">
              
              <PlayCircle className="w-5 h-5 text-slate-400" />
              Explore Courses
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-slate-200/50 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) =>
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
                delay: index * 0.1
              }}
              className="flex flex-col items-center text-center">
              
                <div className="w-12 h-12 rounded-2xl bg-violet-50 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-violet-600" />
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

      {/* Features Section */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose WEBRAC Institute?
            </h2>
            <p className="text-lg text-slate-600">
              We provide a comprehensive learning environment designed to foster
              excellence and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) =>
            <motion.div
              key={feature.title}
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
                delay: index * 0.1
              }}
              className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
              
                <div
                className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center ${feature.color === 'blue' ? 'bg-violet-50 text-violet-600' : feature.color === 'purple' ? 'bg-pink-50 text-pink-600' : 'bg-cyan-50 text-cyan-600'}`}>
                
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <Link
                to="/institute/about"
                className="inline-flex items-center text-sm font-semibold text-violet-600 group-hover:text-violet-700">
                
                  Learn more{' '}
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-slate-50 relative z-10 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Latest from Campus
              </h2>
              <p className="text-lg text-slate-600">
                Stay updated with the latest news, events, and announcements
                from WEBRAC Institute.
              </p>
            </div>
            <Link
              to="/institute/news"
              className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors whitespace-nowrap">
              
              View all news <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsData.slice(0, 3).map((news, index) =>
            <motion.div
              key={news.id}
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
                delay: index * 0.1
              }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col">
              
                <div className="relative h-48 overflow-hidden">
                  <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold text-violet-600 shadow-sm">
                    {news.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-slate-500 mb-3">{news.date}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-violet-600 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-slate-600 mb-6 line-clamp-2 flex-grow">
                    {news.excerpt}
                  </p>
                  <Link
                  to={`/institute/news/${news.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-violet-600 mt-auto">
                  
                    Read article{' '}
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>);

};