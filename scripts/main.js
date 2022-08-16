"use strict";

// Task 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
fibonacci.forEach((item, index) => {
   console.log(item);
})

function printValue(item, index) {
    console.log(item);
}
fibonacci.forEach(printValue);

// Task 2 

function numerateMembers(item, index) {
    return 'member ' + (index + 1) + ': ' + item
}
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const allUsers = users.map(numerateMembers);
console.log(allUsers);

const allUserss = users.map((item, index) => {
    return `member ${index + 1}: ${item}`;
});
console.log(allUserss);

// Task 3

const numbers = [7, -4, 32, -90, 54, 32, -21];
const positiveNumbers = numbers.filter((item, index) => {
    return item >= 0;
});
console.log(positiveNumbers);

function isPositiveNumbers(item, index) {
    return item >= 0;
}
const positiveNumberss = numbers.filter(isPositiveNumbers);
console.log(positiveNumberss);

// Task 4 

const fibonaccii = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
const sumFibonaccii = fibonacci.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
});
console.log(sumFibonaccii);

function getSumFibonaccii(previousValue, currentValue) {
    return previousValue + currentValue;
}
const sumFibonacciii = fibonacci.reduce(getSumFibonaccii);
console.log(sumFibonacciii);

// Task 5

const numberss = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
const evenNumber = numberss.find((item) => item >= 0);
console.log(evenNumber);

function getEvenNumber(item, index) {
    if (item >= 0) {
        return item;
    } else {
        return undefined;
    }
}
const evenNumbers = numberss.find(getEvenNumber);
console.log(evenNumbers);