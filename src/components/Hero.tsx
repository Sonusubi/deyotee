'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            className="md:w-1/2 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              Innovative R&D Solutions for Your Business
            </h1>
            <p className="text-xl mb-8">
              We provide cutting-edge research and development services for companies looking to innovate without the overhead of an in-house R&D team.
            </p>
            <motion.button 
              className="btn-secondary bg-white text-primary hover:bg-gray-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-8 md:mt-0 relative h-[400px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/images/hero-image.svg"
              alt="R&D Innovation"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 