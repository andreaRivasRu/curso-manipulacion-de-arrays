const items = [1,3,2,3,5,6,10,7,2,9,9];

const counter = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(counter);



const data = [
    {
        name: 'Nicolas',
        level: 'low'
    },
    {
        name: 'Veronica',
        level: 'medium'
    },
    {
        name: 'Andreina',
        level: 'hight'
    },
    {
        name: 'Casandra',
        level: 'medium'
    },
    {
        name: 'Jose',
        level: 'low'
    },
    {
        name: 'Pedro',
        level: 'medium'
    },
    {
        name: 'Amanda',
        level: 'hight'
    },
];

const levels = data.map(item => item.level).reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(levels);