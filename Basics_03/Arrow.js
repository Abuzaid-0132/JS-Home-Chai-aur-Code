const user = {
    username: "Zaid Khan",
    price: 1000,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website.`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Sameer"
user.welcomeMessage()

console.log(this);

function Chai() {

    let username = "Zaid"
    console.log(this.username);
}

Chai()

function Person(name) {
    this.name = name;
}

let person1 = new Person('John');
console.log(person1.name); // Outputs: John

const Arrow = () => {
    let username = "Jaadu"
    console.log(this);
}

Arrow()

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4));

const returnObj = (num1, num2) => ({username: "Zaid", Amount: "1000", id: 2457})
console.log(returnObj(3, 4));


