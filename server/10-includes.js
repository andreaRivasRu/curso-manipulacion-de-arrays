const pets = ['cat', 'dog', 'bat'];

//Con un ciclo for:

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break
    }
}

const result = pets.includes('dog');

console.log({includeInArray, result});