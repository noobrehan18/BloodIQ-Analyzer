import React from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqData = [
    {
      question: 'Is my data secure?',
      answer: 'Yes, your data is encrypted and protected with industry-standard security protocols.',
    },
    {
      question: 'What file types are supported?',
      answer: 'We support PDF, JPG, PNG, and TXT files.',
    },
    {
      question: 'How long does the analysis take?',
      answer: 'Most reports are analyzed in under 30 seconds.',
    },
    {
      question: 'Can I analyze multiple files at once?',
      answer: 'Yes, our tool allows batch analysis for multiple files simultaneously.',
    },
    {
      question: 'Is there a limit on file size?',
      answer: 'Files up to 100MB are supported for analysis.',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-center text-gray-800 mb-8"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
      whileHover={{ scale: 1.01 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-800">{question}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gray-600 text-xl"
        >
          ⌄
        </motion.span>
      </div>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.4 }}
          className="mt-2 text-sm text-gray-600"
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

export default FAQ;
