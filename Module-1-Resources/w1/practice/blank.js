/*
    Polya's Method:
    1. Understand the Problem
        a. INPUTS
        b. OUTPUTS
        c. DATA NEEDED
    2. Make a Plan
    3. Carry Out the Plan
    4. Refactor
*/

// let finalValueAfterOperations = function(arr) {
//     let x = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let modifier = arr[i];

//         if (modifier === "--X" || modifier === "X--") {
//             x--;
//         }
//         if (modifier === "++X" || modifier === "X++") {
//             x++;
//         }

//     }
//     return x;
// }

// console.log(finalValueAfterOperations(["X--", "--X", "X--", "X--"]));
// console.log(finalValueAfterOperations(["X++", "++X", "X++", "X++"]));
// console.log(finalValueAfterOperations(["X--", "++X", "X--", "X++"]));
// console.log(finalValueAfterOperations(["X--", "--X", "X--", "X"]));


// function commons(num){
//     let arr = [];

// for (let i = 1; i <= num; i++) {
//     let denom = i;
//     if (i % num === 0) {
//         arr.push(i);
//         }
//     }
//     return arr;
// }

// console.log(commons(50));

// let name = 'jeffrey';

// let properName = name[0].toUpperCase() + name.slice(1);

// console.log(properName);

let hipsterfy = function(sentence) {
	let vowels = 'aeiou';
	let words = sentence.split(' ');
	let newSentence = '';

  	for (let i = 0; i < words.length; i++) {
    	let word = words[i];
      console.log(word);
      for (let j = word.length-1; j >= 0; j--) {
      	let letter = word[i];

        // if (vowels.includes(letter)) {

        	// newSentence = word.slice(0, letter) + word.slice(letter+1, letter.length);
        }
      }
    }
  // return newSentence;
// }


// console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
// console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
// console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
