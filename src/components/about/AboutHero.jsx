'use client';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="bg-[#27545b] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-[#df865b]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          About KUMAR Fin. Consultant
        </motion.h1>
        <motion.p
          className="text-xl text-white max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
          Your trusted partner for comprehensive financial and legal consulting services, led by experienced
          professional <span className="text-[#df865b] font-medium">Pappu Kumar Gupta</span>.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
