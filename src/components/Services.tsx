'use client';

import { motion } from 'framer-motion';
import { BeakerIcon, CubeIcon, WrenchScrewdriverIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Hardware R&D',
    description: 'Custom hardware solutions tailored to your specific needs and requirements. From concept to prototype to production.',
    icon: WrenchScrewdriverIcon,
    features: ['Circuit Design', 'PCB Development', 'Prototype Testing']
  },
  {
    title: 'Product Development',
    description: 'End-to-end product development from concept to production-ready designs. We handle the technical complexity.',
    icon: CubeIcon,
    features: ['Concept Design', 'Engineering', 'Manufacturing Support']
  },
  {
    title: 'Technical Consulting',
    description: 'Expert guidance and consulting services for your technical challenges. Let us help you make informed decisions.',
    icon: LightBulbIcon,
    features: ['Technical Analysis', 'Feasibility Studies', 'Expert Advice']
  },
  {
    title: 'Research Services',
    description: 'Cutting-edge research services to keep you ahead of the competition. We explore new technologies and possibilities.',
    icon: BeakerIcon,
    features: ['Market Research', 'Technology Assessment', 'Innovation Strategy']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive R&D solutions to help your business innovate and grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-700">
                        <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 