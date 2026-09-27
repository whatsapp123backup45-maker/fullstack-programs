// a. Check whether a number is Even or Odd

let num = 15;

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}


// b. Display numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// c. Find the sum of first 10 natural numbers

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum of first ten natural numbers = " + sum);