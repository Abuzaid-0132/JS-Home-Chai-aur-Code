function addTwo(num1, num2) {
    return num1 + num2;
}


const result = addTwo(3,2);
console.log(result);

function LoginUserMessage(username) {

    if(username === undefined) {
        console.log("Please write the username");
        return;
    }

        return `${username} just logged In.`
}

console.log(LoginUserMessage("Ahmad"));

function CalculateCartPrice(...Amount) { // Rest Operator used.
    return Amount;
}

console.log(CalculateCartPrice(200,600,900));

function CalculateCartPriceTwo(Amount1, Amount2, ...Amount) { // Rest Operator used.
    // return Amount;
    console.log(Amount1, Amount2, ...Amount);
}

console.log(CalculateCartPriceTwo(200,600,900, 2000,4000, 8000294, 854,9867,482378));

const user =  {
    username: "Zaid Khan",
    Amount: 10000
}

function handleObjects(anyObject) {
    console.log(`Username is ${anyObject.username} and the Amount is ${anyObject.Amount}.`);
}

handleObjects(user);