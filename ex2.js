var answer = prompt("Do you want to play?");
var string = "";

if (answer.toLowerCase() == "no".toLowerCase()) {
  console.log("Well fine then.")
} else {

  do {

    var word = prompt("Enter a word");
    answer = prompt("Do you want to play again?");
    string += " " + word;

  } while (answer.toLowerCase() == "yes".toLowerCase());

  ;
}

console.log(string);
