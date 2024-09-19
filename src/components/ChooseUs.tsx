import React from 'react';
import { motion } from 'framer-motion';

const ChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Beginner Friendly',
      description: 'Our educational programs are specifically designed for beginners, offering a structured and comprehensive approach to day trading. With interactive courses, one-on-one mentorship, and step-by-step tutorials.',
      icon: '🎓',
    },
    {
      title: 'Structured Learning Path',
      description: 'Our structured learning pathway guides you from basics to advanced strategies with ease. Each module builds on the last, ensuring a thorough understanding of the markets and practical skills for real-world trading.',
      icon: '📚',
    },
    {
      title: 'Proven Strategies',
      description: 'Use our effective trading strategies that have been tested and proven to work. We offer simple, actionable tips to help you trade confidently and make better decisions.',
      icon: '📈',
    },
  ];

  return (
    <section className="w-full px-4 py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="mb-16 text-4xl md:text-6xl lg:text-10xl font-extrabold text-center text-[#2866C4]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-tr from-[#2866C4] to-blue-400 text-white text-4xl shadow-md">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#ca1c2b]">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;