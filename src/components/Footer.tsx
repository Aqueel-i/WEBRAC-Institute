import React from 'react';
import { motion } from 'framer-motion';
const itemVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.4
    }
  }
};
export const Footer: React.FC = () => {
  return (
    <motion.footer
      variants={itemVariants}
      className="py-12 mt-auto text-center">
      
      <p className="text-sm text-slate-400 font-medium">
        © 2026 Webrac Education. All rights reserved.
      </p>
    </motion.footer>);

};