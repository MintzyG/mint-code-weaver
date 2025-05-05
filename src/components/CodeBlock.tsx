
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeBlockProps {
  language?: string;
  title?: string;
  children: string;
  className?: string;
}

// Define custom Mint language for Prism
const defineMintLanguage = () => {
  if (Prism.languages.mint) return;
  
  Prism.languages.mint = {
    'comment': [
      {
        pattern: /\/\/.*|\/\*[\s\S]*?\*\//,
        greedy: true
      },
      {
        pattern: /!\/{2}.*|!\/{1}\*[\s\S]*?\*\//,
        greedy: true,
        alias: 'doc-comment'
      }
    ],
    'string': {
      pattern: /"(?:\\.|[^\\"\n])*"/,
      greedy: true
    },
    'number': /\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    'keyword': /\b(?:int|float|bool|string|char|path|struct|enum|mut|const|for|if|elif|else|while|match|return|void|static|set|map|type|is|ok|err|nil|true|false|in|_)\b/,
    'type': /\b(?:int|float|bool|string|char|path|User|Color|HttpStatus|Config|Address|Contact)\b/,
    'function': /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/,
    'operator': /(\+|-|\*|\/|%|=|==|!=|>|<|>=|<=|&&|\|\||!|\?|\|>|\|\|>)/,
    'punctuation': /[{}[\];(),.:]/
  };
};

const CodeBlock: React.FC<CodeBlockProps> = ({
  language = 'mint',
  title,
  children,
  className,
}) => {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Define Mint language for Prism
    defineMintLanguage();
    
    // Highlight code with Prism
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [children, language]);

  return (
    <div className={cn("code-container my-6 overflow-hidden", className)}>
      <div className="code-window-header flex justify-between items-center">
        <div className="code-dots">
          <span className="code-dot code-dot-red"></span>
          <span className="code-dot code-dot-yellow"></span>
          <span className="code-dot code-dot-green"></span>
        </div>
        {title && <span className="text-sm font-mono">{title}</span>}
        <span className="text-xs uppercase tracking-wide">{language}</span>
      </div>
      <div className="code-content dark:bg-gray-900 border-t-0">
        <pre className="bg-transparent overflow-x-auto p-4">
          <code 
            ref={codeRef}
            className={`text-sm font-mono language-${language}`}
          >
            {children}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
