
const ChooseUs = () => {
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
    <div className="w-full  px-4 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="mb-16 text-5xl md:text-7xl lg:text-10xl font-extrabold text-center text-[#2866C4]">
          Why Choose Us?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-amber-50 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-gray-400"
            >
              <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-tr from-[#2866C4] to-blue-400 text-white text-4xl">
                {feature.icon}
              </div>
              <h2 className="mb-4 text-2xl font-bold text-[#ca1c2b]">{feature.title}</h2>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;