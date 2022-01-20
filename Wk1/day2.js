// fizzBuzz (for loop && while loop)

/* 
Define a function fizzBuzz(max) that takes a number (max) and prints every number 
from 0 to max (not inclusive) that is divisible by either 3 or 5, but not both.


Understand the Problem
Rules: takes in a number
    if number isn't divisible by either 3 or 5, do nothing
    if number is divisible by 3 but not 5, print it
    if number is divisible by 5 but not 3, print it
    if number is divisible by both 3 and 5 do nothing
Sample Input: 20
Sample Output: 3, 5, 6, 9, 10, 12, 18


Make a plan
Steps:
    create a loop that iterates from 0 up to max
    checking if its divisible by 3 but not by 5 using %
    checking if its divisible by 5 but not by 3 using %
    if its divisible by both, don't print
    print any numbers that pass both tests

Code!
*/

function forFizzBuzz(max) {
    for (let i = 0; i < max; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        } 
    }
}

function whileFizzBuzz(max) {
    let i = 0;

    while (i < max) {
        if (i % 3 === 0 && i % 5 !== 0) {
            console.log(i);
        } else if (i % 5 === 0 && i % 3 !== 0) {
            console.log(i);
        }
        i++;
    }
}

forFizzBuzz(20);
whileFizzBuzz(20);

// isPrime (for loop && while loop)

/*
Define a function isPrime(number) that returns true if number is prime. Otherwise,
return false. A number is prime if it is only divisible by 1 and itself.
*/

/*
Understand the Problem
Rules:
Sample Input:
Sample Output:


Make a plan
Steps:


Code!
*/


//choosePrimes
/*
Define a function choosePrimes(array) that takes in an existing array and returns 
a new array of the original array's prime numbers.
*/

/*
Understand the Problem
Rules:
Sample Input:
Sample Output:


Make a plan
Steps:


Code!
*/