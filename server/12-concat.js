const elements = [1, 2, 3];
const otherElements = [4, 5, 6];

const resultWithFor = [...elements];
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    resultWithFor.push(element);
}

const resultWithConcat = elements.concat(otherElements);

const resultWithSpreadOperator = [ ...elements, ...otherElements ];
console.log({resultWithFor, resultWithConcat, resultWithSpreadOperator});

const fruits = ['🍐', '🍌', '🍎'];
const citrics = ['🍊', '🍋', '🍍'];

fruits.push(...citrics);
console.log({fruits});