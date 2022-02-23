// OBJECTS ///////////////////

// let series = {
//     name: "Dark Knight Trilogy",
//     movies: {
//         first: "Batman Begins",
//         second: "The Dark Knight",
//         third: "The Dark Knight Rises",
//     },
//     numberOfRogues: 5,
//     goodTrilogy: false,
//     qualityOrder: [2, 1, 3],
// }

// how to access name //
// console.log(series.name);
// console.log(series.movies.third);
// console.log(series['movies']['first']);

// how to change goodTrilogy to true //
// series.goodTrilogy = true;
// console.log(series);

// increment numberOfRogues to include Talia
// series.numberOfRogues++;
// console.log(series);

// key into the array inside the object //
// console.log(series.qualityOrder[2]);

// add Jeffs favorite line as a new KEY/VALUE pair //
// series.favoriteQuote = "Swear to me.";


// series.firstAndThird = series.movies.first + ' & ' + series.movies.third;
// console.log(series);

// Using VARIABLES /////////////////
// let obj = {
//     school: 'Wisconsin',
//     basketballTeam: 'Pretty decent',
//     location: 'Madison',
// }

// let someVariable = 'school';
// let some = 'basketball';
// let variable = 'Team';
// let place = 'LoCaTiOn';

// console.log(obj[someVariable]);
// console.log(obj[some + variable]);
// console.log(obj[place.toLowerCase()]);

// let show = {
//     name: 'DragonBall',
//     series: ['OG', 'Z', 'GT', 'Super'],
//     characters: {
//         main: 'Goku',
//         son: 'Gohan',
//     },
// }

// for in loop //
// for (let key in show) {
//     console.log(key);
//     console.log(show[key]);
// }

// Getting All of the Keys /////////////
// let valueArray = Object.values(show);
// // console.log(valueArray);

// let keyArray = Object.keys(show);
// // console.log(keyArray);

// let entryArray = Object.entries(show);
// console.log(entryArray);

// PRIMITIVES /////////////////
// let age = 56;
// let newAge = age;
// age = newAge + 1;

// console.log(age, newAge);

// REFERENCE //////////
// let biff = {
//     type: 'cat',
//     age: 16,
// };
// let buster = biff;
// buster.age = 3;

// console.log(biff, buster);

// Destructuring /////////

// let character = {
//     name: 'Ani',
//     homeWorld: 'Tatooine',
//     species: 'Human',
//     lightsaberColer: 'blue',
//     isMaster: false,
//     favoriteThings: {
//         person: 'Padme',
//         activity: 'Killing Younglings',
//     },
// }

// let {name, homeWorld, species, lightsaberColer, isMaster,
// favoriteThings } = character;
// console.log(name, homeWorld, species);

// let { name: aniName, homeWorld: world } = character;
// console.log(aniName, world);

// let { favoriteThings: {person,activity} } = character;
// console.log(person, activity);

// let arr = ['Kristen', 'Jeff', 'Javier'];
// let [first, second, third] = arr;

// console.log(first, second, third);

// console.log(arr);
// [arr[0], arr[1]] = [arr[1], arr[0]];
// console.log(arr);

// let lastName = 'Jeff';
// let firstName = 'Granof';

// [lastName, firstName] = [firstName, lastName];
// console.log(firstName, lastName);

// REST Operator ///////////

// let yeller = function(...words) {
//     let result = words.map(function (word) {
//         return word.toUpperCase();
//     });
//     return result.join(' ') + '!';
// };

// console.log(yeller('i', 'am', 'the', 'senate'))

// SPREAD Operator ////////////

// let arr1 = [1, 2, 3, [4, 5, 6,], 7, [8, 9]];
// let arr2 = [4, 5, 6];
// let arr3 = [0, arr1, arr2];
// console.log(arr3);

// let arr4 = [0, ...arr1, ...arr2];
// console.log(arr4);

// let arr = [...arr1];
// console.log(arr);

// let obj1 = { name: 'Jeff'};
// let obj2 = { animal: 'dog', game: 'Arceus'};
// let obj3 = {obj1, obj2, movie: 'No Way Home'};
// console.log(obj3);

// let obj4 = { ...obj1, ...obj2, ...obj3};
// console.log(obj4);
