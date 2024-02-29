const numbers = [1,5,2,10,12,8,7,11,41];

const validation = numbers.every(item => item <= 40);

console.log(validation);

// Challenge: Validate that all the members of the team are younger than 15 years old.
const team = [
    {
        name: 'Nicolas',
        age: 11
    },
    {
        name: 'Veronica',
        age: 14
    },
    {
        name: 'Andreina',
        age: 12
    },
    {
        name: 'Casandra',
        age: 10
    },
    {
        name: 'Jose',
        age: 13
    },
    {
        name: 'Pedro',
        age: 11
    },
    {
        name: 'Amanda',
        age: 12
    }
];

function validatePermission(group) {
    let validation = group.every(person => person.age < 15);
    if(validation === true) {
        console.log(`Congratulations, the team is allowed to play the game!`);
    } else {
        console.log(`I'm sorry but, the team is not allowed to play the game.`);
    }
    return
};

validatePermission(team);
