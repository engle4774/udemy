//create secretNumber
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));

//if guess is correct
if(guess === secretNumber) {
    alert("YOU GOT IT RIGHT");
}

//If guess is to high
else if(guess > secretNumber){
    alert("Sorry that is to high, Please try again");
}

//If guess is to low
else{
    alert("Sorry that is to low, Please try again");
}
