// Strings //

// console.log("boot"[0]);
// console.log("boot"[1]);
// console.log("boot"[2]);
// console.log("boot"[3]);

// console.log("academy".indexOf("x"));

// escape character (escape sequence)

// console.log('What\'s up?');

// LENGTH
// let greeting = "hello";
// console.log(greeting.length);
// console.log("hello".length);
// console.log("".length);

// INDEXING
// The index ALWAYS STARTS AT 0

/*
    length of 4
    C A T S
    0 1 2 3
*/

// let animal = "CATS";
// console.log(animal[0], animal[1], animal[2]);
// console.log(animal[1]);
// console.log(animal[2]);
// console.log(animal[3]);
// console.log(animal[animal.length - 1]);

// INDEX OF
// let playoffs = "playoffs";

// console.log(playoffs.indexOf("y"));
// console.log(playoffs.indexOf("off"), playoffs.indexOf("f"));

// console.log("bootbamp".indexOf("o"));

// let name = "Jeff";
// let teachingPedigree = "best teacher ever!";

// console.log(name + " is the " + teachingPedigree);

// FUNCTIONS

// function averageOfFour(num1, num2, num3, num4) {
//      let sum = num1 + num2 + num3 + num4;
//      let average = sum / 4;
//      return average;
// }

// console.log(averageOfFour(1, 2, 3, 4));

// function helloWorld () {
//     console.log("Hello, world!");
// };

// helloWorld()

// function grevious (name) {
//     console.log("Hello there");
//     console.log(name);
// };

// grevious("General Kenobi");
// grevious("Autumn");

// RETURN does 2 things:
    // 1. Makes the function equal to something
    // 2. Makes the function stop executing immediately

//     function sum (num1, num2) {
//         return num1 + num2;
//     };

// let result = sum(3,4);
// console.log(result);

// CONDITIONALS (if, else)

// let number = "wot".length;
// if (number > 3) {
//     console.log("Number is greater than 3.");
// } else if (number < 3) {
//     console.log("Number is less than 3.");
// } else {
//     console.log("Number is 3!");
// }

// WHILE LOOPS

// let index = 0;

// while (index < 10) {
//     console.log("Hello world!");
//     index ++;
// }

// let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i += 1;
// }

// FOR LOOPS
// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// };

// console.log(i);
// i = i + 1;
// console.log(i);
// i += 12;
// console.log(i);
// i++;
// console.log(i);

// let order = "Order 66";

// for (let i = 0; i < order.length; i++) {
//     let char = order[i];
//     console.log(char);
// }

// ARRAYS
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let stringArray = ["Anakin", "loves", "killing", "younglings"];
// console.log(stringArray);

// let arr2 = [
//     1,
//     true,
//     "I hate the Rams",
//     undefined,
//     [1, 2, 3]
// ];
// console.log(arr2);

// console.log(arr2.length);
// console.log(arr2.indexOf(undefined));

// Concat
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// let arr4 = arr1 + arr2 + arr3; BAD

// console.log(arr1.concat(arr2, arr3, [10, 11, 12]));
// console.log(arr1);

// console.log(typeof 12);
// console.log(typeof [1,2,3]);
// console.log(Array.isArray([1,2,3]));

// console.log('run'['run'.length - 1]);
// console.log('run'[-1]);

// console.log('bootcamp'.indexOf('x'));

// function logBetween(lowNum, highNum) {
//     let i = 0;
//     while (i >= lowNum) {
//         i++;
//         console.log(i);
//     } if (i > highNum) {
//         break;
//     }
// }

// logBetween(4, 6);

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
