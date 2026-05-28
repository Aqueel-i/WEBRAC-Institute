import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/Logo.png';

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const Header: React.FC = () => {
  return (
    <motion.header
      className="flex flex-col items-center text-center mb-16 md:mb-24 pt-12 md:pt-20 px-4"
      variants={itemVariants}
    >
      
      {/* Logo Section */}
      <div className="flex items-center gap-3 mb-8">
        
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center shadow-lg shadow-slate-900/20 overflow-hidden">
          
          <img
            src={logo}
            alt="Webrac Logo"
            className="w-20 h-20 object-contain"
          />

        </div>

        <span className="text-xl font-bold tracking-widest text-slate-900 uppercase">
          Webrac
        </span>

      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
        Select Your Institute
      </h1>

      {/* Sub Heading */}
      <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
        Choose your campus to access the learning portal
      </p>

    </motion.header>
  );
};