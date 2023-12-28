//***************Dates******************/
let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());

let myCreatedDate = new Date('2023', 0, 1)
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp + " miliseconds");

console.log(Math.floor(Date.now() / 1000) + " seconds");

let newDate = new Date()
newDate.toLocaleString('default',{
    weekday: 'long',
})
