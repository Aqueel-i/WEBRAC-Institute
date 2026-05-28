import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { SchoolNavbar } from './SchoolNavbar';
import { Footer } from '../Footer';
export const SchoolLayout: React.FC = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] selection:bg-pink-100 selection:text-pink-900">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-yellow-400 z-[60] origin-left"
        style={{
          scaleX: scrollYProgress
        }} />
      
      <SchoolNavbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <div className="bg-white border-t border-slate-200 mt-20">
        <Footer />
      </div>
    </div>);

};