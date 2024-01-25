const letters = ['a', 'b', 'c', 'd', 'e'];

// con un ciclo for
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }

// con map
const newArray = letters.map(item => item + '++');

console.log({letters, newArray});