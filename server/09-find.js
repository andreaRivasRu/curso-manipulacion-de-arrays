const numbers = [1,5,2,10,12,8,7,11,41];

let solution = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 11) {
        solution = element;
        break
    }
}

const solutionWithFind = numbers.find(item => item >= 11);

console.log({solution, solutionWithFind});

// Example with arrays
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const findProduct = products.find(product => product.id === '🥦');


  const findPosition = products.findIndex(product => product.id === '🥦');
  console.log({findProduct, findPosition});