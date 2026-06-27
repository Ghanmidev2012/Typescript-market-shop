import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to typescript market")
console.log("type your name to start shopping!")

// input code
rl.question('your name plz:', (userInput: string) => {
    console.log(`Hello, ${userInput}!`);
    console.log("Shopping now");
    console.log("fruits:");
    console.log("Apple, orange, lemon, ananas, ");
    console.log("vegetables:");
    console.log("Carrot, potato, tomato");
    rl.question('enter your shopping:', (userShop: string) => {
        console.log(`there is your shopping, ${userShop}!`);
        rl.close();
    });
});