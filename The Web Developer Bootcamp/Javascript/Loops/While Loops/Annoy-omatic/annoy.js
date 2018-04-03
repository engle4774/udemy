// var answer = prompt("are we there yet?")

// while(answer !== "yes" && answer !== "yeah") {
//     var answer = prompt("are we there yet?");
// }

// alert("YAY, WE MADE IT!!!");


//version 2 (allows the words "yeah" and "yes" to be anywhere in a string and it will prompt YAY, WE MADE IT)

var answer = prompt("are we there yet?")

while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1)  {
    var answer = prompt("are we there yet?");
}

alert("YAY, WE MADE IT!!!");


