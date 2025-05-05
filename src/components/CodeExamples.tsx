
import React, { useState } from 'react';
import Terminal from './Terminal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const CodeExamples: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const examples = {
    basic: `// Variables are immutable by default
count := 5               // Type inference
mut total := 0           // Mutable variable

// Functions are concise but explicit
calculateArea(float width, float height) -> float {
  return width * height
}

// Pattern matching
match status {
  200 -> process(status)
  404 -> retry()
  500 -> log(status.msg)
  _ -> handleUnknown(status)
}`,
    paths: `// Native path type (no string manipulation needed)
path projectRoot = /home/user/projects
path sourceFile = projectRoot + /src/main.mint

// Finding specific files with predicates
[]path largeFiles = projectRoot.FindWhere((File file) -> bool { 
  return file.size > 1_000_000 && 
         file.extension == ".mint" && 
         file.modifiedTime > Time.yesterday()
})`,
    errorHandling: `processHTMLTemplate(FILE file, Body data) -> <string, error> {
  return os.Open(file)?         // Return early if there's an error
    |> ParseTemplate?           // Each step can short-circuit on error
    ||> ExecuteTemplate(data)?  // Methods can also use error propagation
    ||> Minify()                // Final transformation
}`,
    lowLevel: `@unsafe
directMemoryAccess(address uintptr, size int) -> []byte {
  byte *buffer = (byte*)malloc(size)
  if buffer == nil {
    return nil
  }
  
  // Manual memory manipulation
  for i := 0; i < size; i++ {
    buffer[i] = *(address + i)
  }
  
  return buffer
}`
  };

  return (
    <section id="examples" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Code Examples</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Mint provides elegant syntax for both high-level programming and low-level control.
          Explore these examples to get a feel for the language.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="basic">Basic Syntax</TabsTrigger>
              <TabsTrigger value="paths">Path Type</TabsTrigger>
              <TabsTrigger value="errorHandling">Error Handling</TabsTrigger>
              <TabsTrigger value="lowLevel">Low-Level</TabsTrigger>
            </TabsList>
            <TabsContent value="basic">
              <Terminal title="Basic Syntax & Pattern Matching">{examples.basic}</Terminal>
            </TabsContent>
            <TabsContent value="paths">
              <Terminal title="Native Path Type">{examples.paths}</Terminal>
            </TabsContent>
            <TabsContent value="errorHandling">
              <Terminal title="Error Handling & Pipe Operators">{examples.errorHandling}</Terminal>
            </TabsContent>
            <TabsContent value="lowLevel">
              <Terminal title="Low-Level Control">{examples.lowLevel}</Terminal>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CodeExamples;
