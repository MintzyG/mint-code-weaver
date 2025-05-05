
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-mint-primary rounded-md flex items-center justify-center text-white font-bold">
              M
            </div>
            <span className="font-bold">Mint Language</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#" className="text-sm text-gray-600 hover:text-mint-primary transition-colors">Documentation</a>
            <a href="#" className="text-sm text-gray-600 hover:text-mint-primary transition-colors">Examples</a>
            <a href="#" className="text-sm text-gray-600 hover:text-mint-primary transition-colors">GitHub</a>
            <a href="#" className="text-sm text-gray-600 hover:text-mint-primary transition-colors">Community</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>The Mint language and its documentation are licensed under the MIT License.</p>
          <p className="mt-2 italic">"Because programming should be both powerful and enjoyable."</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
