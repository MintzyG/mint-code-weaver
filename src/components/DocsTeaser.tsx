
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const DocsTeaser: React.FC = () => {
  const docItems = [
    { title: 'Basics', filename: '1_Basics.mintdoc', description: 'Basic syntax, variables, operators' },
    { title: 'Data Types', filename: '2_DataTypes.mintdoc', description: 'Primitives, collections, structs, enums' },
    { title: 'Control Flow', filename: '3_ControlFlow.mintdoc', description: 'Conditionals, loops, pattern matching' },
    { title: 'Functions', filename: '4_Functions.mintdoc', description: 'Declarations, parameters, methods' },
    { title: 'Error Handling', filename: '5_ErrorHandling.mintdoc', description: 'Error types, results, errorspaces' },
    { title: 'Advanced Features', filename: '6_AdvancedFeatures.mintdoc', description: 'Modules, macros, concurrency, reflection' },
  ];

  return (
    <section id="docs" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Documentation</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Comprehensive documentation to help you master Mint and build amazing software.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {docItems.map((item, index) => (
            <Card key={index} className="p-5 hover:shadow-md transition-shadow">
              <h3 className="font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-mint-primary mb-2">{item.filename}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button className="bg-mint-primary hover:bg-mint-secondary">
            Explore Full Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DocsTeaser;
