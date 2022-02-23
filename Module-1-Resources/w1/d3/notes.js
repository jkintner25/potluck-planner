// Storing a Function in a Variable

// let sumArr = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         sum += num;
//     }
//     return sum;
// }

// console.log(sumArr([1, 2, 3]));

// MUTABILITY
// let nums = [1, 2, 3];
// console.log(nums);
// nums[1] = 5;
// console.log(nums);

// //  IMMUTABLE
// let name = "Jiff";
// console.log(name);
// name[1] = "e"; // This will not work
// console.log(name);
// name = "Jeff"; // Must reassign to change
// console.log(name);

// ARRAY METHODS
// let arr = [4, 3, 2];

// console.log(arr.length);
// let newLength = arr.push(1, 0);

// console.log(arr, newLength);

// let meds = ["tylenol", "advil"]
// console.log(meds);

// let drugpusher = meds.push("heroin")
// console.log(meds);

// console.log(arr);
// let lastEle = arr.pop();
// console.log(lastEle, arr);

// function pigLatinWord(word) {
//     if (word.startsWith("a") || word.startsWith("e") || word.startsWith("i") || word.startsWith("o") || word.startsWith("u")) {
//         let newWord = word.concat("yay");
//       return newWord;
//     } else {
//         let vowels = "aeiou";
//         for (let i = 0; i < word.length; i++) {
//             let letter = word[i];
//             if (vowels.includes(letter)) {
//                 let firstPart = word.slice(i);
//                 let secondPart = word.slice(0, i)
//                 return firstPart.concat(secondPart, "ay")
//             }
//         }
//     }
// };

// console.log(pigLatinWord("apple")); //=> "appleyay"
// console.log(pigLatinWord("eat")); //=> "eatyay"
// console.log(pigLatinWord("banana")); //=> "ananabay"
// console.log(pigLatinWord("trash")); //=> "ashtray"


// NESTED LOOPS

// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(i, j)
//     }
// }

// let arr = [
//     ["a", "b", "c"],
//     ["d", "e"]
// ];

// // console.log(arr.length) // 2
// for (let i = 0; i < arr.length; i++) {
//     let subArr = arr[i];
//     console.log(subArr);
//     for (let j = 0; j < subArr.length; j++) {
//         let letter = subArr[j];
//         console.log(letter);
//     }
// }

// EOD PROBLEMS **********************

// let doubler = function(numbers) {
//     let arr = [];
//     for (let i = 0; i < numbers.length; i++) {
//         let num = numbers[i];
//         let dub = num * 2;
//         let newArr = arr.push(dub)
//     }
//     return newArr;
// }

// console.log(doubler([1, 2, 3]));


// let isPrime = function(number) {
//     for(let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(2));
// console.log(isPrime(10));
// console.log(isPrime(11));


// function countVowels(word) {
//     let count = 0;
//     let vowels = "aeiou";
//     for (let i = 0; i < word.length; i++) {
//         if (vowels.includes(word[i])) count++
//     }
//     return count;
// }

// console.log(countVowels("bootcamp"));
// console.log(countVowels("apple"));
// console.log(countVowels("pizza"));


function rotateRight(array, num) {
    let front = array.slice(array.length - num)
    let back = array.slice(0, array.length - num);
    return front.concat(back)
}

let array = ["a", "b", "c", "d", "e"]
console.log(rotateRight(array, 2))
