import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const navLinks = [
{
  name: 'Home',
  path: '/school'
},
{
  name: 'About',
  path: '/school/about'
},
{
  name: 'Programs',
  path: '/school/programs'
},
{
  name: 'Admissions',
  path: '/school/admissions'
},
{
  name: 'Gallery',
  path: '/school/gallery'
},
{
  name: 'Contact',
  path: '/school/contact'
}];

export const SchoolNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md border-b border-slate-200/50 shadow-sm py-3' : 'bg-transparent py-5'}`}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/school" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-yellow-400 flex items-center justify-center shadow-md group-hover:shadow-pink-500/25 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
                WEBRAC <span className="text-pink-600 font-medium">School</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-pink-600 ${isActive ? 'text-pink-600' : 'text-slate-600'}`}>
                    
                    {link.name}
                  </Link>);

              })}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/school/admissions"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full hover:opacity-90 transition-all shadow-sm hover:shadow-pink-500/25">
                
                Enroll Now
              </Link>
            </div>

            <button
              className="md:hidden p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu">
              
              {isMobileMenuOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: -20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -20
          }}
          className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 pb-6 px-4 md:hidden flex flex-col">
          
            <nav className="flex flex-col gap-2 flex-grow">
              {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-4 rounded-2xl text-lg font-medium transition-colors ${isActive ? 'bg-pink-50 text-pink-600' : 'text-slate-900 hover:bg-slate-50'}`}>
                  
                    {link.name}
                    <ChevronRight
                    className={`w-5 h-5 ${isActive ? 'text-pink-600' : 'text-slate-400'}`} />
                  
                  </Link>);

            })}
            </nav>
            <Link
            to="/school/admissions"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full py-4 text-center text-white font-medium rounded-2xl bg-gradient-to-r from-pink-500 to-yellow-400 shadow-lg shadow-pink-500/20">
            
              Enroll Now
            </Link>
          </motion.div>
        }
      </AnimatePresence>
    </>);

};