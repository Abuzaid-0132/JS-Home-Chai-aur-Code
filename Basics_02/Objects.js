// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


 const JsUser = {
    name: "Zaid Khan",
    "full name": "Mr. Zaid Khan",
    [mySym]: "myNewkey1",
    age: 18,
    location: "Jaipur",
    email: "zaid@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "zaid@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "zaid@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


 // const tinderUser = new Object(); Singleton Object Created.

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


  console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Zaid",
            lastname: "Khan"
        }
    }
}

 console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {3: "d", 4:"e", 5: "f"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


const course = {
    coursename: "JS Home",
    price: 999,
    courseInstructor: "Zaid Khan"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);

