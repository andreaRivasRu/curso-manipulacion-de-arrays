const words = ['spray', 'limit', 'elite', 'exuberant'];

const possiblePasswords = words.filter(word => word.length == 5);

console.log(possiblePasswords);

const orders = [
    {
        customerName: 'Adela',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Mariana',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Adriana',
        total: 180,
        delivered: true
    },
    {
        customerName: 'Jose',
        total: 240,
        delivered: true
    }
];

const deliveredOrders = orders.filter(order => order.delivered && order.total >= 100);
console.log({deliveredOrders, orders});

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    })
}

console.log(search('Ad'));