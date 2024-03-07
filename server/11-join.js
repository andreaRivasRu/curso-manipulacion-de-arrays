//Join
const elements = ['Fire', 'Air', 'Water', 'Earth'];

const separator = ', ';
let resultWithFor = '';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    if (index === elements.length - 1) {
        resultWithFor = resultWithFor + element;
    } else {
        resultWithFor = resultWithFor + element + separator;
    }
    
}

const resultWithJoin = elements.join(', ');

console.log({resultWithFor, resultWithJoin});

//Convertir un titulo de un articulo en una url
const title = 'Curso de manipulacion de arrays';

const ulr = title.split(' ').join('-').toLocaleLowerCase();

console.log(ulr);


