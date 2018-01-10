var name = prompt("What is your name?");
var print = prompt("Would you like to print your name?");
var x = ""

while (print.toLowerCase() == "yes".toLowerCase()) {
  console.log("Hello.  My name is " + name + x);
  x = x + "!";
  print = prompt("Would you like to print again?")
}
