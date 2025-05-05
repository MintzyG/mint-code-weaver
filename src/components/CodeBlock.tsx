
import React from 'react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  language?: string;
  title?: string;
  children: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  language = 'mint',
  title,
  children,
  className,
}) => {
  // Simple syntax highlighting for Mint language
  const highlightSyntax = (code: string) => {
    // Replace keywords
    const keywordRegex = /\b(int|float|bool|string|char|path|struct|enum|mut|const|for|if|elif|else|while|match|return|void|static|set|map|type|is|ok|err|nil|true|false|in|_)\b/g;
    const typeRegex = /\b(int|float|bool|string|char|path|User|Color|HttpStatus|Config|Address|Contact)\b/g;
    const commentRegex = /(\/\/.*)|(!\/\/.*)/g;
    const stringRegex = /"([^"\\]*(\\.[^"\\]*)*)"/g;
    const numberRegex = /\b(\d+(\.\d+)?)\b/g;
    const operatorRegex = /(\+|-|\*|\/|%|=|==|!=|>|<|>=|<=|&&|\|\||!|\?|\|>|\|\|>)/g;
    const functionRegex = /\b([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g;
    
    let highlighted = code
      .replace(commentRegex, '<span class="text-code-comment">$&</span>')
      .replace(stringRegex, '<span class="text-code-string">$&</span>')
      .replace(numberRegex, '<span class="text-code-number">$&</span>')
      .replace(keywordRegex, '<span class="text-code-keyword">$&</span>')
      .replace(typeRegex, '<span class="text-code-type">$&</span>')
      .replace(operatorRegex, '<span class="text-code-operator">$&</span>')
      .replace(functionRegex, '<span class="text-code-function">$1</span>(');
    
    return highlighted;
  };

  return (
    <div className={cn("code-container my-6", className)}>
      <div className="code-window-header">
        <div className="code-dots">
          <span className="code-dot code-dot-red"></span>
          <span className="code-dot code-dot-yellow"></span>
          <span className="code-dot code-dot-green"></span>
        </div>
        {title && <span className="text-sm font-mono">{title}</span>}
        <span className="text-xs uppercase tracking-wide">{language}</span>
      </div>
      <div className="code-content">
        <pre 
          className="bg-transparent" 
          dangerouslySetInnerHTML={{ __html: highlightSyntax(children) }} 
        />
      </div>
    </div>
  );
};

export default CodeBlock;
