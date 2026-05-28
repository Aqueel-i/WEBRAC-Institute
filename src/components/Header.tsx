import React from 'react';
import { motion } from 'framer-motion';
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
      variants={itemVariants}>
      
      {/* Logo Mark */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center shadow-lg shadow-slate-900/20">
          <svg
            width="24"
            height="24"
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
        <span className="text-xl font-bold tracking-widest text-slate-900 uppercase">
          Webrac
        </span>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
        Select Your Institute
      </h1>

      <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium">
        Choose your campus to access the learning portal
      </p>
    </motion.header>);

};