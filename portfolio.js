/*
1. **Execution Context**:
   An execution context is like a container that holds all the information about a specific code execution. It includes variables, functions, and the scope they are in. Each time a function is called, a new execution context is created.

2. **Closures**:
   Closures are a combination of a function and the lexical environment within which that function was declared. This allows the function to "remember" its surrounding scope even when it's executed outside that scope.

3. **Scope**:
   Scope refers to the area of your code where a particular variable is accessible. It determines where and how a variable can be accessed in your code.

4. **Lexical Environment**:
   The lexical environment is a data structure that holds variable and function declarations in memory. It's determined by the placement of variables and functions in the code.

5. **Lexical Scope**:
   Lexical scope means that the scope of a variable or function is determined by its position in the source code.

6. **Temporal Dead Zone**:
   The temporal dead zone is the period between entering a scope (such as a function) and a variable being declared. Trying to access a variable during this period will result in an error.

7. **Errors**:
   Errors are issues in the code that prevent it from running correctly. They can include syntax errors, runtime errors, and logical errors.

8. **Block Scope**:
   Block scope is a scope that's limited to a block of code, often within curly braces `{}`. Variables declared in block scope are not accessible outside of that block.

9. **Shadowing**:
   Shadowing occurs when a variable declared in an inner scope has the same name as a variable in an outer scope. The inner variable "shadows" the outer one.

10. **Illegal Shadowing**:
    Illegal shadowing happens when a variable in the same scope is declared again with the same name. This can lead to unexpected behavior.

11. **Call, Apply, Bind Methods**:
    These are methods in JavaScript that allow you to control how a function is executed and what the value of `this` will be.

12. **setTimeout**:
    `setTimeout` is a function that allows you to delay the execution of a piece of code for a specified amount of time.

13. **Function Statement, Function Expression, Function Declaration**:
    These terms refer to different ways of creating functions in JavaScript.

14. **Anonymous Function**:
    An anonymous function is a function without a name. It's often used when the function is only needed in one place.

15. **Named Function**:
    A named function is a function that has a name. It can be useful for better code organization and debugging.

16. **First-Class Function, First-Class Citizens**:
    In programming, first-class functions are treated as first-class citizens, meaning they can be passed around like any other value.

17. **Fat Arrow Function**:
    A concise way to write functions in JavaScript using the `=>` syntax. It also has a lexical `this`.

18. **Callback Function**:
    A function passed as an argument to another function, which will be called when a certain event or condition occurs.

19. **Garbage Collectors**:
    These are mechanisms in programming languages that automatically clean up memory by removing objects that are no longer needed.

20. **Function Currying**:
    Function currying is a technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.

21. **`this` Property**:
    The `this` keyword refers to the current context or object. Its value depends on how a function is called.

22. **Event Loop**:
    The event loop is a mechanism that allows asynchronous operations to be performed in JavaScript, ensuring non-blocking behavior.

23. **Spread Operator**:
    The spread operator (`...`) is used to expand elements of an iterable (like an array or object) into places where multiple elements are expected.


*/
  
console.log("ADVANCED JAVASCRIPT PORTION BLOCK")
// Closures
function outer() {
  const message = "Hello, ";
  function inner(name) {
    return message + name;
  }
  return inner;
}
const greeting = outer();
console.log(greeting("Alice")); // Outputs: "Hello, Alice"

// Block Scope
{
  let x = 10;
}
// console.log(x); // Throws an error because x is not accessible

// setTimeout
console.log("Start");
setTimeout(() => {
  console.log("Delayed");
}, 1000);
console.log("End");

// Callback Function
function doSomething(callback) {
  console.log("Doing something...");
  callback();
}

doSomething(() => {
  console.log("Callback executed.");
});

// Function Currying
function add(x) {
  return function(y) {
    return x + y;
  };
}
const add5 = add(5);
console.log(add5(3)); // Outputs: 8

// Spread Operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // Outputs: [1, 2, 3, 4, 5]


setTimeout(() => {
  console.log("new delayed msg");
}, 2000);