const numbers = [1, 2, 3, 7];

let hasAPair = numbers.some(item => item % 2 === 0);
console.log(hasAPair);

// let rta = false;
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     if (element % 2 === 0) {
//         rta = true;
//         break;
//     }
// }
// console.log(rta);

const orders = [
    {
        customerName: 'Adela',
        total: 60,
        delivered: false
    },
    {
        customerName: 'Mariana',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Adriana',
        total: 180,
        delivered: false
    },
    {
        customerName: 'Jose',
        total: 240,
        delivered: true
    }
];

let someDelivered = orders.some(order => order.delivered);
console.log(someDelivered);

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const newAppointment = {
    startDate: new Date(2021, 1, 1, 19),
    endDate: new Date(2021, 1, 1, 20, 30),
  }

  const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

  const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate}
        )
    })
  }

  console.log(isOverlap(newAppointment));