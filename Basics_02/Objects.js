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