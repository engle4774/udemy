var age = Number(prompt("What is your age?"));

//If age is negitive
if(age < 0) {
    console.log("Age Error");
}

//If age is 21
if(age === 21) {
    console.log("Happy 21st Birthday!!");
}

//if age is odd
//(not evenly divisible by two)
if(age % 2 !==0) {
    console.log("Your age is odd");
}

//if age is a perfect square
if(age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square")
}