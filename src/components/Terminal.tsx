
import React from 'react';
import { cn } from '@/lib/utils';

interface TerminalProps {
  title?: string;
  language?: string;
  children: string;
  className?: string;
}

const Terminal: React.FC<TerminalProps> = ({
  title,
  language = 'mint',
  children,
  className,
}) => {
  return (
    <div className={cn("my-6 rounded-lg overflow-hidden border border-border", className)}>
      <div className="bg-gray-800 text-gray-300 px-4 py-2 flex items-center justify-between">
        <div className="flex gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
        </div>
        {title && <span className="text-sm font-mono">{title}</span>}
        <span className="text-xs uppercase tracking-wide">{language}</span>
      </div>
      
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-x-auto">
        <pre className="p-4">
          <code className="text-sm font-mono whitespace-pre">{children}</code>
        </pre>
      </div>
    </div>
  );
};

export default Terminal;
