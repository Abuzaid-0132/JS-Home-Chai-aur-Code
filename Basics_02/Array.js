//*************Arrays*************/
const Arr = [1,2,45,4,8,10]
const myArr = [1,23,4,"Zaid",true]
const Arr2 = new Array(1,2,3,4,5,33,99)

// console.log(Arr);
// console.log(myArr);
// console.log(Arr2);

Arr.unshift(9)
console.log(Arr);

Arr.shift()
console.log(Arr);

const newArr = Arr.join()
console.log(newArr);

const MyNewArr = [1,2,3,4,5,6,7,8,9,10]
console.log("A", MyNewArr);

const myarr1 = MyNewArr.slice(1,3)
console.log(myarr1);

console.log("B", MyNewArr);

const myarr2 = MyNewArr.splice(1,3)
console.log(myarr2);

console.log("C", MyNewArr);

const marvel_heroes = ["Thor", "Iron Man", "Captain"]
const dc_heroes = ["Super man", "Bat man", "Flash"]

marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);

const all_heroes = marvel_heroes.concat(dc_heroes);
console.log(all_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // Using Spread Operator.
console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,8,[9,10,11,12,[13,14,15]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));