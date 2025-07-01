'use client';

import { motion } from 'framer-motion';

export default function ContactHero() {
  return (
    <section className="relative py-20 bg-[#27545b] text-[#df865b]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-[#27545b] via-[#604235] to-[#df865b] opacity-10 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="text-xl max-w-3xl mx-auto text-[#ffffff] drop-shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          Get in touch with our expert team for professional consultation and personalized solutions for all your
          financial and legal requirements.
        </motion.p>
      </div>
    </section>
  );
}
