// For of loop.
const arr = [1,2,3,4,5,6,7,8,9,10]

for (const num of arr) {
    // console.log(num);
}

// Maps.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('UAE', "United Arab Emirates")

// console.log(map);
for (const [Key, Value] of map) {
    // console.log(Key, "--->", Value);
}

const myObject = {
    Game1 : 'NFS',
    Game2 : 'Spiderman'
}

// for (const [Key, Value] of myObject) {
    //console.log(Key, "-->", Value); Error Found.
// }

const obj = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in obj) {
//    console.log(`${key} shortcut is for ${obj[key]}`);
}

const programming = ['C++', 'Java', 'JavaScript', 'Python', 'Ruby on Rails']
for (const key in programming) {
//    console.log(programming[key]);
}

const coding = ['js', 'ruby', 'java', 'python', 'cpp']
coding.forEach(function (value) {
    // console.log(value);
})

coding.forEach( (item, index, arrayList) => {
    // console.log(item, index, arrayList);
} )

const myCoding = [
    {
        language: "java",
        languageFileName: "java"
    },
    {
        language: "javaScript",
        languageFileName: "js"
    },
    {
        language: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
} )