"use strict";

// Task 1

const colors = ['red', 'green', 'blue'];
console.log(colors.length);

// Task 2

const animals = ['monkey', 'dog', 'cat'];
animals[animals.length - 1];

// Task 3

const numbers = [5, 43, 63, 23, 90];
numbers.splice(0, 5);
console.log(numbers);

delete numbers[0, 5];
console.log(numbers);

// Task 4

const students = ['Polina', 'Dasha', 'Masha'];
students.splice(2, 1,  `Borya`);
console.log(students);
students.splice(1, 1, `Andrey`);
console.log(students);

// Task 5 

const cats = ['Gachito', 'Tom', 'Batman'];
for(let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}
console.log(cats);

for(let number of cats) {
    console.log(number);
}
console.log(cats);

// Task 6 

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const allNumbers = evenNumbers.concat(oddNumbers);
console.log(allNumbers);
console.log(allNumbers.indexOf(8));

// Task 7

const binary = [0, 0, 0, 0];
const foo = binary.join(1);
console.log(foo);

