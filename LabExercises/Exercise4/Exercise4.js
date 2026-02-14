function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10)); // Output: 15

function subtract(a, b) {
    return a - b;
}
console.log(subtract(10, 5)); // Output: 5

function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 10)); // Output: 50

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}
console.log(divide(10, 5)); // Output: 2
console.log(divide(0, 5)); // Output: 0
console.log(divide(10, 0)); // Output: "Cannot divide by zero"  

function greet(greeting, name) {
    return greeting + " ," + name + "!";
}
console.log(greet("Hello", "Noriko")); // Output: "Hello, Noriko!"
console.log(greet("Kia ora", "Noriko")); // Output: "Hi, John!"