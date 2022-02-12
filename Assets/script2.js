var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z]",
];
var symbol = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var newPassword = [];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function generatePassword() {
  var posschar = [];
  //asks user to enter # of characters
  chooseCharacter = parseInt(
    prompt("Please choose password length (8-128 characters)")
  );
  //if user does not choose an appropriate amount of characters, alert says no bueno and window reloads
  if (chooseCharacter <= 7 || chooseCharacter >= 129) {
    alert("Please try again. Password must be between 8-128 characters");
    window.location.reload();
    console.log(reload)
  }
  console.log(chooseCharacter);

  //this asks users if they want upper case t/f. If true, upper case [] is added to possChar array
  chooseUpperCase = confirm("Do you want UPPER CASE characters?");
  console.log(chooseUpperCase);
  if (chooseUpperCase == true) {
    posschar = posschar.concat(upperCase);
    console.log(posschar);
  }

  //this asks users if they want lower case t/f. If true, lower case [] is added to possChar array
  chooseLowerCase = confirm("Do you want lower case characters?");
  console.log(chooseLowerCase);
  if (chooseLowerCase == true) {
    posschar = posschar.concat(lowerCase);
    console.log(posschar);
  }

  //this asks users if they want numbers t/f. If true, numers [] is added to possChar array
  chooseNumber = confirm("Do you want numbers?");
  console.log(chooseNumber);
  if (chooseNumber == true) {
    posschar = posschar.concat(number);
    console.log(posschar);
  }
  //this asks users if they want symbols t/f. If true, symbols [] is added to possChar array
  chooseSymbol = confirm("Do you want symbols?");
  console.log(chooseSymbol);
  if (chooseSymbol == true) {
    posschar = posschar.concat(symbol);
    console.log(posschar);
  }

  //this informs users that they picked no for all options and they need to try again. Window reloads
  if (chooseUpperCase == false && chooseLowerCase == false && chooseNumber == false && chooseSymbol == false) {
    alert("You must choose at least one option. Please try again");
    // console.log("hello")
    window.location.reload();
  }

  
  //this alert tells the users what they picked
  confirmation = alert(
    "You chose:" +
      "\nCharacters: " +
      chooseCharacter +
      "\nUPPER case letters: " +
      chooseUpperCase +
      "\nlower case letters: " +
      chooseLowerCase +
      "\nSymbols: " +
      chooseSymbol +
      "\nNumbers: " +
      chooseNumber
  );

  //  As long as newPassword has less characters than the chosen
  //length, continue to add characters to the newPassword from the possChar array
  for (let i = 0; i < 1 + chooseCharacter; i++) {
    newPassword += posschar[Math.floor(Math.random() * posschar.length)]; 
    console.log(newPassword); 
  }
    console.log(newPassword); //console logs the new password
    return newPassword //returns the new password to the writePassword function that puts it in the box

}

