import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Clock,
  User,
  Calendar,
  DollarSign,
  ArrowRight } from
'lucide-react';
import { Link } from 'react-router-dom';
import { courses, CourseCategory, CertLevel } from '../../data/courses';
const categories: CourseCategory[] = [
'BIT',
'Certificates'];

const certLevels: (CertLevel | 'All')[] = [
'All',
'Entry Level',
'Intermediate',
'Advanced'];

export const InstituteCourses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CourseCategory>('BIT');
  const [activeCertLevel, setActiveCertLevel] = useState<CertLevel | 'All'>(
    'All'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      if (course.category !== activeTab) return false;
      if (activeTab === 'Certificates' && activeCertLevel !== 'All') {
        if (course.certLevel !== activeCertLevel) return false;
      }
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query));

      }
      return true;
    });
  }, [activeTab, activeCertLevel, searchQuery]);
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Strip */}
      <section className="relative py-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Courses
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Discover our comprehensive range of educational programs designed to
            accelerate your career.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 flex-grow relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) =>
            <button
              key={category}
              onClick={() => {
                setActiveTab(category);
                setSearchQuery('');
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === category ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg shadow-violet-500/25' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
              
                {category}
              </button>
            )}
          </div>

          {/* Certificate Filters (Only visible when Certificates tab is active) */}
          <AnimatePresence>
            {activeTab === 'Certificates' &&
            <motion.div
              initial={{
                opacity: 0,
                height: 0
              }}
              animate={{
                opacity: 1,
                height: 'auto'
              }}
              exit={{
                opacity: 0,
                height: 0
              }}
              className="mb-12 overflow-hidden">
              
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="flex flex-wrap gap-2">
                    {certLevels.map((level) =>
                  <button
                    key={level}
                    onClick={() => setActiveCertLevel(level)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-colors ${activeCertLevel === level ? 'bg-violet-100 text-violet-700' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}>
                    
                        {level}
                      </button>
                  )}
                  </div>
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 rounded-full border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all" />
                  
                  </div>
                </div>
              </motion.div>
            }
          </AnimatePresence>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCourses.length > 0 ?
              filteredCourses.map((course, i) =>
              <motion.div
                layout
                initial={{
                  opacity: 0,
                  scale: 0.9
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9
                }}
                transition={{
                  duration: 0.2,
                  delay: i * 0.05
                }}
                key={course.id}
                className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                
                    <div className="p-6 flex-grow">
                      <div className="flex items-start justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                          <Clock className="w-3.5 h-3.5" />
                          {course.duration}
                        </span>
                        {course.certLevel &&
                    <span className="inline-flex px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-medium">
                            {course.certLevel}
                          </span>
                    }
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-6 line-clamp-2">
                        {course.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-violet-600" />
                          </div>
                          <span className="font-medium">{course.lecturer}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-4 h-4 text-slate-400" />
                          </div>
                          <span>{course.schedule}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                            <DollarSign className="w-4 h-4 text-slate-400" />
                          </div>
                          <span className="font-medium text-slate-900">
                            {course.fees}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 pt-0 mt-auto">
                      <Link
                    to="/institute/apply"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-violet-600 bg-violet-50 rounded-xl group-hover:bg-violet-600 group-hover:text-white transition-colors">
                    
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
              ) :

              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }}
                className="col-span-full py-20 text-center">
                
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                    <Search className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-1">
                    No courses found
                  </h3>
                  <p className="text-slate-500">
                    Try adjusting your search or filters.
                  </p>
                </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>);

};