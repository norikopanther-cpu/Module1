const fruits = [];
fruits[0] = "Apple";
fruits[1] = "Banana";
fruits[2] = "Cherry";
fruits[3] = "Watermelon";
fruits[4] = "Grapes"; 
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Cherry', 'Watermelon', 'Grapes' ]

temp = fruits[0];
fruits[0] = fruits[3];
fruits[3] = temp;
console.log(fruits); // Output: [ 'Watermelon', 'Banana', 'Cherry', 'Apple', 'Grapes' ]

fruits.unshift("Mango");
console.log(fruits); // Output: [ 'Mango', 'Watermelon', 'Banana', 'Cherry', 'Apple', 'Grapes' ]

fruits.splice(5, 1); 
console.log(fruits); // Output: [ 'Mango', 'Watermelon', 'Banana', 'Cherry', 'Apple' ]