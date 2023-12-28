let name = "Zaid"
let age = 22
let isLoggedIn = false
let state;

// Number
// bigint
// String
// boolean
// Null => standalone value, null is a object.
// Undefined => value not assigned
// symbol => unique

// Datatype conversion.
let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof (valueInNumber));
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1;  false => 0

let isLogIn = 1
let booleanisLogIn = Boolean(isLogIn)
console.log(booleanisLogIn);

let num = 48
let str_num = String(num)
console.log(str_num);
console.log(typeof (str_num));

//***************Operations**************
let value = 3
let neg_value = -value
console.log(neg_value);

let str1 = "Hello "
let str2 = "Zaid"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// Premitive data types: call by value:
// string
// Number
// Null
// boolean 
// undefined
// symbol
// bigint

const data = 100
const dataValue = 100.3

const log_in = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const AnotherId = Symbol('123')

console.log(id === AnotherId);


// Non-Premitive data types: call by Reference:
// Array
// Objects
// Functions

const Heros = ["Thor", "Captain", "Stark"]

let myObject = {
    name: "zaid",
    age: 23,
    location: "Bangaluru"

}
