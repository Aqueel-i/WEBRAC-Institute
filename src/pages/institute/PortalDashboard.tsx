import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  FileText,
  Bell,
  GraduationCap,
  ClipboardCheck,
  User,
  Search,
  Menu,
  X,
  LogOut,
  TrendingUp,
  Clock,
  MapPin } from
'lucide-react';
const navItems = [
{
  icon: LayoutDashboard,
  label: 'Dashboard',
  active: true
},
{
  icon: BookOpen,
  label: 'My Courses'
},
{
  icon: Calendar,
  label: 'Timetable'
},
{
  icon: FileText,
  label: 'Assignments'
},
{
  icon: Bell,
  label: 'Notices'
},
{
  icon: ClipboardCheck,
  label: 'Results'
},
{
  icon: User,
  label: 'Profile'
}];

const upcomingClasses = [
{
  id: 1,
  course: 'Advanced Web Development',
  time: '10:00 AM - 12:00 PM',
  lecturer: 'Dr. Sarah Jenkins',
  room: 'Lab 402'
},
{
  id: 2,
  course: 'UI/UX Design Principles',
  time: '01:00 PM - 03:00 PM',
  lecturer: 'Prof. Michael Chen',
  room: 'Studio B'
},
{
  id: 3,
  course: 'Database Management',
  time: '03:30 PM - 05:00 PM',
  lecturer: 'Dr. Robert Smith',
  room: 'Lecture Hall 1'
}];

const notifications = [
{
  id: 1,
  title: 'Assignment Due: React Fundamentals',
  time: '2 hours ago',
  type: 'warning'
},
{
  id: 2,
  title: 'Mid-term Results Published',
  time: '5 hours ago',
  type: 'success'
},
{
  id: 3,
  title: 'Campus closed on Friday for maintenance',
  time: '1 day ago',
  type: 'info'
}];

const courseProgress = [
{
  id: 1,
  name: 'Advanced Web Development',
  lecturer: 'Dr. Sarah Jenkins',
  progress: 75,
  color: 'from-violet-500 to-purple-500'
},
{
  id: 2,
  name: 'UI/UX Design Principles',
  lecturer: 'Prof. Michael Chen',
  progress: 45,
  color: 'from-cyan-500 to-blue-500'
},
{
  id: 3,
  name: 'Database Management',
  lecturer: 'Dr. Robert Smith',
  progress: 90,
  color: 'from-pink-500 to-rose-500'
}];

const quickLinks = [
{
  label: 'Library',
  icon: BookOpen,
  color: 'bg-violet-50 text-violet-600'
},
{
  label: 'Pay Fees',
  icon: FileText,
  color: 'bg-cyan-50 text-cyan-600'
},
{
  label: 'Help Desk',
  icon: User,
  color: 'bg-pink-50 text-pink-600'
},
{
  label: 'Resources',
  icon: ClipboardCheck,
  color: 'bg-yellow-50 text-yellow-600'
}];

export const PortalDashboard: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/institute/portal');
  };
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex selection:bg-violet-100 selection:text-violet-900">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 fixed inset-y-0 z-20">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-md">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
              
              <path
                d="M2 17L12 22L22 17"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
              
              <path
                d="M2 12L12 17L22 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round" />
              
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            WEBRAC
          </span>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) =>
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${item.active ? 'bg-gradient-to-r from-violet-500 to-violet-600 text-white shadow-md shadow-violet-500/20' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
            
              <item.icon
              className={`w-5 h-5 ${item.active ? 'text-white' : 'text-slate-400'}`} />
            
              {item.label}
            </a>
          )}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-slate-600 hover:bg-red-50 hover:text-red-600 transition-colors">
            
            <LogOut className="w-5 h-5 text-slate-400 group-hover:text-red-500" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-30 md:hidden" />
          
            <motion.aside
            initial={{
              x: '-100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '-100%'
            }}
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.4
            }}
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-2xl z-40 flex flex-col md:hidden">
            
              <div className="p-6 flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                    <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    
                      <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round" />
                    
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-slate-900">
                    WEBRAC
                  </span>
                </div>
                <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600">
                
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
                {navItems.map((item) =>
              <a
                key={item.label}
                href="#"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium ${item.active ? 'bg-violet-50 text-violet-700' : 'text-slate-600'}`}>
                
                    <item.icon
                  className={`w-5 h-5 ${item.active ? 'text-violet-600' : 'text-slate-400'}`} />
                
                    {item.label}
                  </a>
              )}
              </nav>
              <div className="p-4 border-t border-slate-100">
                <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium text-slate-600">
                
                  <LogOut className="w-5 h-5 text-slate-400" />
                  Sign Out
                </button>
              </div>
            </motion.aside>
          </>
        }
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 -ml-2 text-slate-500 hover:text-slate-700">
              
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden sm:flex items-center relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3" />
              <input
                type="text"
                placeholder="Search courses, notices..."
                className="pl-9 pr-4 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-violet-300 focus:ring-2 focus:ring-violet-200 transition-all w-64" />
              
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-100 to-cyan-100 border border-slate-200 flex items-center justify-center text-sm font-bold text-violet-700">
              AL
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Welcome Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-600 p-8 mb-8 text-white shadow-lg shadow-violet-500/20">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center" />
            <div className="relative z-10">
              <h1 className="text-3xl font-bold mb-2">
                Good morning, Alex! 👋
              </h1>
              <p className="text-violet-100 font-medium">
                Here's what's happening with your courses today,{' '}
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })}
                .
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
            {
              label: 'Upcoming Classes',
              value: '3',
              icon: Calendar,
              color: 'text-violet-600',
              bg: 'bg-violet-50'
            },
            {
              label: 'Pending Assignments',
              value: '5',
              icon: FileText,
              color: 'text-pink-600',
              bg: 'bg-pink-50'
            },
            {
              label: 'Attendance Rate',
              value: '92%',
              icon: User,
              color: 'text-cyan-600',
              bg: 'bg-cyan-50'
            },
            {
              label: 'Current GPA',
              value: '3.7',
              icon: GraduationCap,
              color: 'text-yellow-600',
              bg: 'bg-yellow-50'
            }].
            map((stat, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: i * 0.1
              }}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              
                <div className="flex items-center justify-between mb-4">
                  <div
                  className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center`}>
                  
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-slate-500">
                  {stat.label}
                </p>
              </motion.div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Upcoming Classes */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900">
                  Today's Classes
                </h2>
                <button className="text-sm font-medium text-violet-600 hover:text-violet-700">
                  View Full Timetable
                </button>
              </div>
              <div className="space-y-4">
                {upcomingClasses.map((cls) =>
                <div
                  key={cls.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-violet-100 hover:bg-violet-50/50 transition-colors">
                  
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-slate-50 flex flex-col items-center justify-center border border-slate-100">
                      <span className="text-xs font-bold text-slate-500">
                        {cls.time.split(' ')[0]}
                      </span>
                      <span className="text-xs text-slate-400">
                        {cls.time.split(' ')[1]}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-base font-bold text-slate-900 mb-1">
                        {cls.course}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" /> {cls.lecturer}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {cls.room}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900">Notices</h2>
                <button className="text-sm font-medium text-violet-600 hover:text-violet-700">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {notifications.map((notif) =>
                <div key={notif.id} className="flex gap-4">
                    <div
                    className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${notif.type === 'warning' ? 'bg-yellow-400' : notif.type === 'success' ? 'bg-emerald-400' : 'bg-blue-400'}`} />
                  
                    <div>
                      <p className="text-sm font-medium text-slate-900 mb-1">
                        {notif.title}
                      </p>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {notif.time}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Progress */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-6">
                Course Progress
              </h2>
              <div className="space-y-6">
                {courseProgress.map((course) =>
                <div key={course.id}>
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">
                          {course.name}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {course.lecturer}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-slate-700">
                        {course.progress}%
                      </span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                      initial={{
                        width: 0
                      }}
                      whileInView={{
                        width: `${course.progress}%`
                      }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        duration: 1,
                        ease: 'easeOut'
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${course.color}`} />
                    
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-slate-900 mb-6">
                Quick Links
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, i) =>
                <button
                  key={i}
                  className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all group">
                  
                    <div
                    className={`w-10 h-10 rounded-xl ${link.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                    
                      <link.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-slate-700">
                      {link.label}
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>);

};