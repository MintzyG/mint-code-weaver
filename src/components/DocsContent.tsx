import React from 'react';
import CodeBlock from './CodeBlock';

interface DocsContentProps {
  section?: string;
}

const DocsContent: React.FC<DocsContentProps> = ({ section = 'basics' }) => {
  const content = getContentForSection(section);
  
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {content.description && <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{content.description}</p>}
        
        {content.sections.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
            <p className="mb-4">{section.description}</p>
            
            {section.code && (
              <CodeBlock title={section.codeTitle || section.title}>
                {section.code}
              </CodeBlock>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocsContent;

// Docs content data
const getContentForSection = (section: string) => {
  switch (section) {
    case 'basics':
      return {
        title: 'Basics & Syntax',
        description: 'Learn the fundamental syntax and concepts of the Mint programming language.',
        sections: [
          {
            title: 'Comments and Documentation',
            description: 'Mint provides several ways to write comments in your code.',
            codeTitle: 'Comment Types',
            code: `// Single-line comment

/*
Multi
Line
Comment
*/

!// Single line Doc comment
!/*
  Multiline
  Doc comment
*/`
          },
          {
            title: 'Variables and Constants',
            description: 'Variables in Mint are immutable by default. Use the mut keyword to create mutable variables.',
            codeTitle: 'Variable Declaration',
            code: `// Variables are immutable by default
int x = 10
// x = 11 // ERROR - Cannot modify immutable variable

// Mutable variables with 'mut'
mut int y = 10
y = 11 // Allowed

// Type inference with :=
z := 10 // Type inferred as int
w := "hello" // Type inferred as string

// Constants
const PI = 3.14159
const MAX_USERS = 1000
const APP_NAME = "Mint App"`
          },
          {
            title: 'Basic Operators',
            description: 'Mint provides a rich set of operators for various operations.',
            codeTitle: 'Common Operators',
            code: `// Arithmetic operators
int sum = 10 + 5     // 15
int diff = 10 - 5    // 5
int prod = 10 * 5    // 50
int quot = 10 / 5    // 2
int mod = 10 % 3     // 1

// Comparison operators
bool isEqual = (10 == 10)     // true
bool isGreater = (10 > 5)     // true
bool isLessEqual = (5 <= 10)  // true

// Logical operators
bool andResult = true && false  // false
bool orResult = true || false   // true
bool notTrue = !true            // false`
          }
        ]
      };
      
    case 'data-types':
      return {
        title: 'Data Types',
        description: 'Mint provides a rich set of built-in data types and ways to define custom types.',
        sections: [
          {
            title: 'Primitive Types',
            description: 'Mint includes standard primitive types for numbers, text, and more.',
            codeTitle: 'Basic Types',
            code: `// Integer types
int standardInt = 42        // Default integer type
i8 tinyInt = 127            // 8-bit signed integer
u64 largeUnsigned = 10_000  // 64-bit unsigned integer

// Floating-point types
float standardFloat = 3.14   // Default float type
f64 preciseFloat = 3.141592  // 64-bit float

// Other primitives
bool flag = true             // Boolean
char letter = 'A'            // Single character
string text = "Hello"        // Text string

// Special path type
path configFile = /etc/config.json  // File system path
path homeDir = /home/user           // Directory path`
          },
          {
            title: 'Collections',
            description: 'Mint provides several collection types for working with groups of data.',
            codeTitle: 'Collection Types',
            code: `// Slices (dynamic arrays)
[]int numbers = [1, 2, 3, 4, 5]
[]string names = ["Alice", "Bob"]

// Access and modify
int first = numbers[0]      // 1
numbers.append(6)           // [1, 2, 3, 4, 5, 6]
int length = numbers.len()  // 6

// Maps (key-value pairs)
map[string]int scores = {"Alice": 95, "Bob": 87}
scores["Charlie"] = 90      // Add new entry
int score = scores["Alice"] // 95

// Sets (unique values)
set[int] uniqueNums = {1, 2, 3}
uniqueNums.add(4)           // {1, 2, 3, 4}
uniqueNums.add(1)           // Still {1, 2, 3, 4} (no duplicates)`
          },
          {
            title: 'Structs',
            description: 'Structs allow you to create custom composite data types.',
            codeTitle: 'Struct Definition and Usage',
            code: `// Define a struct
struct User {
  string name
  int age
  bool active
}

// Create instances
User user1 = {"Alice", 30, true}         // Positional initialization
User user2 = {name: "Bob", age: 25, active: false}  // Named fields

// Access fields
string userName = user1.name  // "Alice"
int userAge = user1.age       // 30

// Nested structs
struct Address {
  string street
  string city
}

struct Contact {
  string name
  Address address
}

Contact contact = {
  "Alice",
  {"123 Main St", "Anytown"}
}`
          }
        ]
      };
      
    case 'control-flow':
      return {
        title: 'Control Flow',
        description: 'Control flow statements determine the order in which code executes based on conditions and loops.',
        sections: [
          {
            title: 'Conditional Statements',
            description: 'Conditional statements allow your code to make decisions.',
            codeTitle: 'If, Elif, and Else',
            code: `int x = 10

if x > 10 {
  print("Greater than 10")
} elif x == 10 {
  print("Exactly 10")
} else {
  print("Less than 10")
}

// With initialization
if int y = getValue(); y > 0 {
  print("Positive:", y)
} else {
  print("Non-positive:", y)
}`
          },
          {
            title: 'Loops',
            description: 'Mint provides several ways to create loops.',
            codeTitle: 'Loop Types',
            code: `// For loop with range
for int i = 0; i < 5; i += 1 {
  print(i)  // Prints 0 to 4
}

// For as while loop
int i = 0
for i < 5 {
  print(i)
  i += 1
}

// Infinite loop with break
for {
  if checkCondition() {
    break
  }
}

// Iterating over collections
[]int numbers = [1, 2, 3, 4, 5]
for num in numbers {
  print(num)
}

// While loop
int count = 0
while count < 5 {
  print(count)
  count += 1
}`
          },
          {
            title: 'Pattern Matching',
            description: 'Pattern matching with match provides a powerful way to handle multiple cases.',
            codeTitle: 'Match Statement',
            code: `int status = 404

match status {
  200 -> print("OK")
  404 -> print("Not Found")
  500 -> print("Server Error")
  _ -> print("Unknown status")  // Default case
}

// Matching ranges
int score = 85
match score {
  90..100 -> print("A")
  80..89 -> print("B")
  70..79 -> print("C")
  _ -> print("Below C")
}

// Matching with guards
match score {
  n if n > 90 -> print("Excellent")
  n if n > 80 -> print("Very Good")
  n if n > 70 -> print("Good")
  _ -> print("Needs Improvement")
}`
          }
        ]
      };
      
    case 'functions':
      return {
        title: 'Functions',
        description: 'Functions are the primary way to organize and reuse code in Mint.',
        sections: [
          {
            title: 'Function Declaration',
            description: 'Functions in Mint have a clear and explicit syntax.',
            codeTitle: 'Basic Functions',
            code: `// Function with no return value
greet(string name) {
  print("Hello,", name)
}

// Function with a return value
add(int a, int b) -> int {
  return a + b
}

// Function with multiple parameters
calculate(float price, float tax, bool applyDiscount) -> float {
  mut float total = price * (1 + tax)
  
  if applyDiscount {
    total *= 0.9  // 10% discount
  }
  
  return total
}`
          },
          {
            title: 'Return Values',
            description: 'Functions can return single values, multiple values, or nothing.',
            codeTitle: 'Different Return Patterns',
            code: `// Multiple return values
divideWithRemainder(int dividend, int divisor) -> (int, int) {
  int quotient = dividend / divisor
  int remainder = dividend % divisor
  return quotient, remainder
}

// Usage:
int q, r = divideWithRemainder(10, 3)  // q = 3, r = 1

// Named return values
parseUserInfo(string input) -> (string name, int age, bool active) {
  name = extractName(input)
  age = extractAge(input)
  active = extractStatus(input)
  
  return name, age, active  // Variables already defined
}`
          },
          {
            title: 'Anonymous Functions',
            description: 'Anonymous functions can be assigned to variables or passed as arguments.',
            codeTitle: 'Function Variables and Closures',
            code: `// Anonymous function assigned to a variable
(int, int) -> int multiply = (int a, int b) -> int {
  return a * b
}

// Using the function variable
int result = multiply(4, 5)  // 20

// Function as an argument
processItems([]int items, (int) -> int transformer) -> []int {
  []int results = []
  
  for item in items {
    results.append(transformer(item))
  }
  
  return results
}

// Using with an anonymous function
[]int doubled = processItems([1, 2, 3], (int x) -> int {
  return x * 2
})  // [2, 4, 6]`
          }
        ]
      };
      
    case 'error-handling':
      return {
        title: 'Error Handling',
        description: 'Mint provides robust error handling with result types and the error propagation operator.',
        sections: [
          {
            title: 'Result Types',
            description: 'Result types explicitly handle success and error cases.',
            codeTitle: 'Basic Result Types',
            code: `// Function returning a result type
getValue() -> <int;error> {
  if someCondition {
    return 42  // Success case
  } else {
    return error("Failed to get value")  // Error case
  }
}

// Working with result types
<int;error> result = getValue()

if result is ok {
  print("Success:", result.value)
} else {
  print("Error:", result.error)
}

// Pattern matching with result types
match result {
  ok value -> print("Success:", value)
  err msg -> print("Error:", msg)
}`
          },
          {
            title: 'Error Propagation',
            description: 'The ? operator allows for concise error propagation through function calls.',
            codeTitle: 'Using the ? Operator',
            code: `// Function using error propagation
processFile(path filePath) -> <string;error> {
  // ? unwraps the result or returns the error
  []byte data = readFile(filePath)?
  
  // Only executed if readFile succeeded
  string content = parseData(data)?
  
  // Only executed if both previous calls succeeded
  return processContent(content)
}

// Chaining with pipe operators for elegant error handling
processDocument(path filePath) -> <Document;error> {
  return readFile(filePath)?          // Returns early if error
    |> parseMarkdown()?               // Each step can short-circuit
    ||> validate()?                   // Methods also use error propagation
    ||> transform()                   // Final transformation
}`
          },
          {
            title: 'Early Returns with Conditions',
            description: 'The return if syntax provides concise conditional returns.',
            codeTitle: 'Conditional Returns',
            code: `validate(int x) -> (bool, error) {
  // Early return if x is negative
  return if x < 0 -> false, error("Negative value")
  
  // Early return if x is too large
  return if x > 1000 -> false, error("Value too large")
  
  // Code here only runs if all conditions passed
  return true, nil
}`
          }
        ]
      };
        
    default:
      return {
        title: 'Documentation',
        description: 'Select a section from the sidebar to view documentation.',
        sections: []
      };
  }
};
