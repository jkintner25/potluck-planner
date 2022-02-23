// ADVANCED ARRAY METHODS

// FOR EACH /////////////////////////////

// let arr = [1, 2, 3];

// arr.forEach(function(ele, i, arr) {
//     console.log(ele);
// });

// let twoD = [
//     [1, 2],
//     [3, 4]
// ];

// twoD.forEach(function(subArr, i, twoD) {
//     console.log(subArr, i, twoD)
//     subArr.forEach(function(ele, j, subArr) {
//         console.log(ele, j, subArr);
//     })
// });

// MAP /////////////////////////////
// for (let i = 0; i < arr.length; i++) {
//     let ele = arr[i];
//     ele *= 2;
//     newArr.push(ele);
// }

// let doubler = function(ele, i, arr) {
//     return ele * 2;
// };

// let arr = [1,2,3];
// let newArr = arr.map(doubler);

// console.log(arr);
// console.log(newArr);

// FILTER /////////////////////////////
// let arr = [1, 3, 4, 6, 13, 16, 21, 24, 32];

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];

//     if (num % 2 === 0) newArr.push(num);
// }

// let newArr = arr.filter(function(ele, i, arr) {
//     return ele % 2 === 0;
// });

// console.log(arr);
// console.log(newArr);

// REDUCE ///////////////////////////////

// let arr = [1, 2, 3, 4];

// let sum = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     let ele = arr[i];
//     sum += ele;
// }
// console.log(sum);

// let sum = arr.reduce(function(accum, ele, i, arr) {
//     return accum + ele;
// });

// console.log(sum);

// let arr = [1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     let ele = arr[i];
//     sum += ele;
// }
// console.log(sum);

// let sum = arr.reduce(function(accum, ele, i, arr) {
//     console.log('Accum: ' + accum);
//     console.log('Ele: ' + ele);
//     return accum + ele;
// });

// console.log(sum);

// let names = ['jeff', 'caleb', 'wes', 'colton', 'jojo'];

// "Names: name1, name2, name3"

// let str = "Names: "

// for (let i = 0; i <names.length; i++) {
//     let name = names[i];
//     str = str + name + ", ";
// }

// console.log(str);

// let str = names.reduce(function(accum, name) {
//     return accum + name + ", ";
// }, "Names: ");
// console.log(str);

// let arr = [1,2,3];
// console.log(arr[0]);

// OBJECTS /////////////////////////////////
// KEY & VALUE PAIRS

// let person = {
//     name: "jeff",// "name" is the KEY. "jeff" is the VALUE
//     age: 26,
//     game: "Arceus"
// }
// console.log(person["name"]);
