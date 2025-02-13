import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => (
  <section className="bg-gray-100 py-16">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What our happy customers have to say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <TestimonialCard name={testimonial.name} feedback={testimonial.feedback} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ name, feedback }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300">
    <p className="text-gray-600 italic mb-6">"{feedback}"</p>
    <div className="text-lg font-bold text-gray-800">{name}</div>
  </div>
);

const testimonialsData = [
  {
    name: 'Dr. John Doe',
    feedback: 'This tool saved me hours of work! The data extraction is incredibly accurate.',
  },
  {
    name: 'Dr. Sarah Smith',
    feedback: 'Highly recommend BloodIQ Analyzer for medical data extraction. Secure and fast!',
  },
  {
    name: 'Dr. Jane Williams',
    feedback: 'An essential tool for our clinic. It simplifies our workflow significantly.',
  },
];

export default Testimonials;
