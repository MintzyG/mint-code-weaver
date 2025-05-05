
import React from 'react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 bg-white/90 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-mint-primary rounded-md flex items-center justify-center text-white font-bold">
            M
          </div>
          <span className="font-bold text-lg">Mint</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm hover:text-mint-primary transition-colors">Features</a>
          <a href="#examples" className="text-sm hover:text-mint-primary transition-colors">Examples</a>
          <a href="#docs" className="text-sm hover:text-mint-primary transition-colors">Documentation</a>
          <a href="#about" className="text-sm hover:text-mint-primary transition-colors">About</a>
        </nav>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Documentation
          </Button>
          <Button variant="default" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
