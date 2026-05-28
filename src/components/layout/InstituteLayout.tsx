import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from '../Footer';
export const InstituteLayout: React.FC = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] selection:bg-violet-100 selection:text-violet-900">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-cyan-500 z-[60] origin-left"
        style={{
          scaleX: scrollYProgress
        }} />
      
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <div className="bg-white border-t border-slate-200 mt-20">
        <Footer />
      </div>
    </div>);

};