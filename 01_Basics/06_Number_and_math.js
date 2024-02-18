const score = 400;
console.log(score);  //! Output => 400

const balance = new Number(100) //! Explicitly declare that it should be a number only 

console.log(balance); //! Output => [Number: 100]

console.log(balance.toString()); //Convert to string
console.log(balance.toFixed(2)); // Set after point value of 2 100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3))

const otherNumber1 = 1123.8966
console.log(otherNumber1.toPrecision(3)) //=>1.12e+3

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'))

// +++++++++++++++ Maths ++++++++++++

console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.min(2,5,6,7))

console.log(Math.floor((Math.random()*10) + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);//! Give the values in this range only 

