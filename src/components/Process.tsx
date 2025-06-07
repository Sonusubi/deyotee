'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your needs, challenges, and goals through in-depth consultation.',
    details: [
      'Initial Consultation',
      'Requirements Gathering',
      'Project Scoping'
    ]
  },
  {
    number: '02',
    title: 'Research',
    description: 'Our team conducts thorough research and analysis to identify the best solutions.',
    details: [
      'Market Analysis',
      'Technical Research',
      'Feasibility Study'
    ]
  },
  {
    number: '03',
    title: 'Development',
    description: 'We develop prototypes and iterate based on testing and feedback.',
    details: [
      'Prototype Creation',
      'Testing & Validation',
      'Design Iteration'
    ]
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Final implementation, documentation, and handover of the complete solution.',
    details: [
      'Final Testing',
      'Documentation',
      'Knowledge Transfer'
    ]
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A systematic approach to turning your ideas into reality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-lg p-6 shadow-lg h-full">
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center text-gray-700">
                      <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process; 