import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BoxIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export interface PortalCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: BoxIcon;
  theme: 'blue' | 'green';
  href?: string;
}
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};
export const PortalCard: React.FC<PortalCardProps> = ({
  title,
  subtitle,
  description,
  icon: Icon,
  theme,
  href = '#'
}) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  });
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  const isBlue = theme === 'blue';
  // Theme specific classes
  const themeColors = {
    borderHover: isBlue ?
    'group-hover:from-violet-500 group-hover:to-cyan-500' :
    'group-hover:from-pink-500 group-hover:to-yellow-400',
    iconBg: isBlue ? 'bg-violet-50' : 'bg-pink-50',
    iconColor: isBlue ? 'text-violet-600' : 'text-pink-600',
    buttonBg: isBlue ?
    'bg-violet-600 hover:bg-violet-700' :
    'bg-pink-600 hover:bg-pink-700',
    glowColor: isBlue ? 'rgba(139, 92, 246, 0.15)' : 'rgba(236, 72, 153, 0.15)'
  };
  return (
    <motion.div variants={itemVariants} className="w-full h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          y: -8,
          scale: 1.01
        }}
        transition={{
          duration: 0.3,
          ease: 'easeOut'
        }}
        className="group relative block h-full rounded-[2rem] p-[1px] overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#F8FAFC]"
        aria-label={`Enter ${title} portal`}>
        
        <Link
          to={href}
          className="absolute inset-0 z-20"
          aria-label={`Enter ${title} portal`} />
        
        {/* Animated Gradient Border Layer */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-200/50 ${themeColors.borderHover} transition-colors duration-500 ease-out`} />
        

        {/* Inner Card Content */}
        <div className="relative h-full bg-white/80 backdrop-blur-xl rounded-[calc(2rem-1px)] p-8 md:p-10 flex flex-col overflow-hidden">
          {/* Mouse Follow Glow */}
          <div
            className="pointer-events-none absolute -inset-px rounded-[calc(2rem-1px)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${themeColors.glowColor}, transparent 40%)`
            }} />
          

          {/* Content */}
          <div className="relative z-10 flex-grow flex flex-col">
            <div
              className={`w-14 h-14 rounded-2xl ${themeColors.iconBg} flex items-center justify-center mb-8 shadow-sm`}>
              
              <Icon
                className={`w-7 h-7 ${themeColors.iconColor}`}
                strokeWidth={1.5} />
              
            </div>

            <div className="mb-2">
              <span className="text-sm font-semibold tracking-wider text-slate-400 uppercase">
                {subtitle}
              </span>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              {title}
            </h2>

            <p className="text-slate-500 leading-relaxed mb-10 flex-grow">
              {description}
            </p>

            {/* Button */}
            <div className="mt-auto">
              <div
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl ${themeColors.buttonBg} text-white font-medium transition-all duration-300 shadow-sm shadow-slate-200 group-hover:shadow-md`}>
                
                ENTER PORTAL
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>);

};