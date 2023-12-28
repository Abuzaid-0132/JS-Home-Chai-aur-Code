// ******************Numbers*********************
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const num = 123.897
console.log(num.toPrecision(4));

const hundreads = 1000000
console.log(hundreads.toLocaleString('en-IN'));

//****************Maths**************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.6));

console.log(Math.floor(4.9));
console.log(Math.ceil(4.2));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
