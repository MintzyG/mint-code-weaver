
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-mint-light/20 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-mint-tertiary/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-0">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-mint-primary to-mint-tertiary rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-lg animate-pulse-light">
            M
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="text-mint-primary">Mint</span> Programming Language
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            A weird (in a good way!) mid-level language that feels high-level
            while giving you the power to go as low as you need.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-mint-primary hover:bg-mint-secondary">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Documentation
            </Button>
          </div>
          
          <div className="mt-12 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 w-full">
            <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre overflow-x-auto">
              <code>
                <span className="text-code-comment">// Start high-level</span>{"\n"}
                <span className="text-code-keyword">calculateArea</span>(<span className="text-code-type">float</span> width, <span className="text-code-type">float</span> height) <span className="text-code-operator">-&gt;</span> <span className="text-code-type">float</span> {"{"}
                {"\n"}{"  "}<span className="text-code-keyword">return</span> width <span className="text-code-operator">*</span> height{"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
