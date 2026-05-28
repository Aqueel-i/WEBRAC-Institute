import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap } from 'lucide-react';
import { BackgroundDecor } from '../components/BackgroundDecor';
import { Header } from '../components/Header';
import { PortalCard } from '../components/PortalCard';
import { Footer } from '../components/Footer';
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};
export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative selection:bg-blue-100 selection:text-blue-900">
      <BackgroundDecor />

      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center">
          
          <Header />

          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12">
            <PortalCard
              title="Webrac Institute"
              subtitle="Excellence in Learning"
              description="Professional education and skills development for a successful career. Access advanced courses and industry-leading resources."
              icon={Building2}
              theme="blue"
              href="/institute" />
            

            <PortalCard
              title="Webrac School"
              subtitle="Nurturing Young Minds"
              description="Quality school education for students from primary to higher secondary. Fostering creativity, critical thinking, and growth."
              icon={GraduationCap}
              theme="green"
              href="/school" />
            
          </div>

          <Footer />
        </motion.div>
      </main>
    </div>);

};