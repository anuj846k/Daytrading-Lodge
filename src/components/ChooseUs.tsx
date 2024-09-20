    // Start of Selection
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
    
      const containerVariants = {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      };
    
      const headingVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      };
    
      const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };
    
      const hoverVariants = {
        hover: {
          scale: 1.05,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          transition: { duration: 0.3, yoyo: Infinity },
        },
      };
    
      return (
        <section className="w-full px-4 py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="mb-16 text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-[#2866C4]"
              variants={headingVariants}
              initial="hidden"
              animate="visible"
            >
              Why Choose Us?
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg cursor-pointer border border-gray-200"
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                  initial="hidden"
                  animate="visible"
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  
                >
                  <motion.div 
                    className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-tr from-[#2866C4] to-blue-400 text-white text-4xl shadow-md"
                    variants={hoverVariants}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="mb-4 text-2xl font-bold text-[#ca1c2b]">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      );
    };
    
    export default ChooseUs;