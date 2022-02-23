// let pokemonCreator = require('./pokemons');

// let pokemons = pokemonCreator();

// let displayPokemon = function(pokemons, cb) {
//     if (!cb) return pokemons;
//     let result = cb(pokemons);
//     return result;
// }

// // Print a list of all 1000 pokemons names
// let names = function(pokemons) {
//     return pokemons.map(function(pokemon) {
//         return pokemon.name;
//     })
// }

// // Print a list of all the Fire type pokemon
// let fireTypes = function(pokemons) {
//     return pokemons.filter(function(pokemon) {
//         return pokemon.type === "Fire";
//     });
// }
// // Print the number of pokemon between levels 30 and 50
// let levels = function(pokemons) {
//     return pokemons.reduce(function(count, pokemon) {
//         if (pokemon.level >= 30 && pokemon.level <= 50) {
//             return count + 1;
//         } else return count;
//     }, 0);
// }

// console.log(displayPokemon(pokemons));
// console.log(displayPokemon(pokemons, names));
// console.log(displayPokemon(pokemons, fireTypes));
// console.log(displayPokemon(pokemons, levels));

// let people = ['Jeff', 'Caleb', 'Jojo', 'Wes', 'Colton']

// let myForEach = function(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         let el = arr[i];
//         cb(el, i, arr);
//     }
// }

// let func = function(el, i, arr) {
//     console.log(el + ' is at index ' + i);
// }

// myForEach(people, func)

// let arr = [1,2,3];

// let arrayPush = function(arr, val) {
//     arr[arr.length] = val;
//     return arr;
// }

// console.log(arrayPush(arr, 4));
