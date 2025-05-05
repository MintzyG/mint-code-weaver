
import React from 'react';
import { Card } from '@/components/ui/card';

const PhilosophySection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">The Mint Philosophy</h2>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700">
          <p className="text-lg mb-6">
            <span className="font-bold text-mint-primary">The philosophy is simple</span>: Start writing code that feels comfortable and familiar, 
            then dial in the performance by going deeper when you need to.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="p-4 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">High-level when you want</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Start with clean, expressive syntax that makes your code readable and maintainable.
                Focus on your app logic, not the implementation details.
              </p>
            </Card>
            
            <Card className="p-4 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold mb-2">Low-level when you need</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Dive down to the metal when performance matters. Access memory directly, 
                control allocation, and optimize critical code paths.
              </p>
            </Card>
          </div>
          
          <p>
            Yes, the code might start to look a bit scary when you venture into the low-level features, 
            but that's the beauty of it - you choose your level of engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
