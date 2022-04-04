console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

//set up promise to find if user is still there
const watching = new Promise((resolve, reject) => {
let userLeft = Math.round(Math.random()); //added after class to simulate true or false instead of leaving undefined
    if (userLeft == true) {
        reject("User left");
    } else {
        resolve("Thumbs up and subscribe!");
    }
});

watching.then((value) => {
    console.log(value)
}) .catch((error) => {
        console.log(error)
});

