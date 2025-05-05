
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-mint-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Try Mint?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Start building with a language that grows with your needs - from rapid prototyping 
          to production-ready applications with fine-grained control.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-white text-mint-primary hover:bg-gray-100 hover:text-mint-secondary">
            Get Started
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/20">
            <Link to="/docs">View Documentation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
