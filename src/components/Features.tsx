
import React from 'react';
import FeatureCard from './FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Flexible Abstraction',
      description: 'Write high-level code for convenience, or drop to lower levels when you need performance.',
      icon: '⚡'
    },
    {
      title: 'Modern Syntax',
      description: 'Clean, concise syntax that prioritizes readability while maintaining expressiveness.',
      icon: '📝'
    },
    {
      title: 'First-Class Paths',
      description: 'Native filesystem path handling without string manipulation or path libraries.',
      icon: '🗂️'
    },
    {
      title: 'Error Handling',
      description: 'Built-in Result types and ? propagation operator for elegant error handling.',
      icon: '✅'
    },
    {
      title: 'Multiple Execution Paths',
      description: 'Interpreter for development, compiler for production, and transpilers for integration.',
      icon: '🔄'
    },
    {
      title: 'Pattern Matching',
      description: 'Exhaustive pattern matching with destructuring for elegant control flow.',
      icon: '🧩'
    },
  ];

  return (
    <section id="features" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Feature Highlights</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Mint combines the best ideas from many languages while maintaining a consistent, 
          pragmatic approach to solving real problems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={<span className="text-2xl">{feature.icon}</span>}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
