
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-mint-primary rounded-md flex items-center justify-center text-white font-bold">
            M
          </div>
          <span className="font-bold text-lg">Mint</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm hover:text-mint-primary transition-colors">Home</Link>
          <Link to="#features" className="text-sm hover:text-mint-primary transition-colors">Features</Link>
          <Link to="#examples" className="text-sm hover:text-mint-primary transition-colors">Examples</Link>
          <Link to="/docs" className="text-sm hover:text-mint-primary transition-colors">Documentation</Link>
          <Link to="#about" className="text-sm hover:text-mint-primary transition-colors">About</Link>
        </nav>
        
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm">
            <Link to="/docs">Documentation</Link>
          </Button>
          <Button variant="default" size="sm" className="bg-mint-primary hover:bg-mint-secondary">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
