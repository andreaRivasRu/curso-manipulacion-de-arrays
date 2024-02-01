const orders = [
    {
        customerName: 'Octavio',
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

const totalOrders = orders.map(item => item.total)
const customerNameOrders = orders.map(item => item.customerName)

// modificando la referencia en memoria del array original
// const addingTaxesToOrders = orders.map(item => {
//     item.tax = .19
//    return item
// })

// sin modificar la referencia en memoria del array original
const addingTaxesToOrders = orders.map(item => {
    return {
        ...item,
        tax: .19
    }
})

console.log({orders, totalOrders, customerNameOrders, addingTaxesToOrders});