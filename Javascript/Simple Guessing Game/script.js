//create secretNumber
var secretNumber = 4;
//ask user for guess
var guess = prompt("What is the Secret Number?");
//check guess

//if guess is correct
if(guess === secretNumber) {
    alert("That is Correct");
}
//If guess is to low
else if(guess < secretNumber) {
    alert("Sorry that is to low, Please try again");
}
//If guess is to high
else(guess > secretNumber) {
    alert("Sorry that is to high, Please try again");
}
