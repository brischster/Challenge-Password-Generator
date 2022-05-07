// Assignment Code
var generateBtn = document.querySelector("#generate");
var charToBeUsed = "";
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "1234567890";
var specialChar = "!#$%&";
var finalPassword = "";
var passwordLength;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // console.log(passWordArray);

  var passwordText = document.querySelector("#password");

  // for (var i = 0; i < passwordLength; i++) {
  //   var randomCharSelection =
  //     passWordArray[Math.floor(Math.random() * passWordArray.length)];
  //   password = password += passWordArray[randomCharSelection];
  //   console.log("here");
  // }
  passwordText.value = password;
}

function generatePassword() {
  passwordLength = prompt(
    "What would you like the length of your password to be? Must be between 8 & 128 characters."
  );
  console.log(passwordLength);
  var includeLowercase = confirm(
    "Would you like to include lowercase letters in your password?"
  );
  var includeUppercase = confirm(
    "Would you like to include uppercase letters in your password?"
  );
  var includeNumeric = confirm(
    "Would you like to include numberic characters in your password?"
  );
  var includeSpecialChar = confirm(
    "Would you like to include special characters in your password?"
  );

  if (includeLowercase) {
    charToBeUsed = charToBeUsed + lowerCaseChar;
  }
  if (includeUppercase) {
    charToBeUsed = charToBeUsed + upperCaseChar;
  }
  if (includeNumeric) {
    charToBeUsed = charToBeUsed + numericChar;
  }
  if (includeSpecialChar) {
    charToBeUsed = charToBeUsed + specialChar;
  }
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecialChar
  ) {
    alert(
      "Must select at least one set of characters to inlude in your password."
    );
  }
  var passWordArray = charToBeUsed.split("");

  // For loop used to make the random selections based off user input of what type of characters they would like included
  for (var i = 0; i < passwordLength; i++) {
    var randomCharSelection =
      passWordArray[Math.floor(Math.random() * passWordArray.length)];
    finalPassword += randomCharSelection;
  }
  console.log(password);
  return finalPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/* Click on generate password - *create click action
Upon click  - Create prompt saying “What would you like the length of the password to be?  “In text box, “Must be between 8 & 128 characters”
Store that in a var = passwordLength

Prompt - What characters would you like to include in your generated password? - maybe

Create confirm - “Would you like to use  lowercase letters (Boolean var includeLowercase = true/false
Create confirm - Would you like to include Uppercase letters (Boolean var includeUppercase = true/false
Create confirm - Would you like to include numeric characters (boolean var includeNumeric = true/false
Create confirm - Would you like to include special characters (Boolean var includeSpecialChar = true/false

Create function to create random password using the variables the user has provided
Function generatePassword () {
Needs to return password
}

Create content to display generated password to the page in box


Prompt will set desired length on passwordLength;

Function for characters to be used:
Function charSelection() {
Var charToBeUsed;
If (confirm(“ Would you like to use  lowercase letters in your generated password?”)) {
charToBeUsed = `${includeLowercase}`
} else if (confirm(“Would you like to use uppercase letters in your generated password?”)) {
charToBeUsed = `${includeLowercase}${includeUppercase}`
} else if (confirm(


Necessary Variables:

Var passwordLength = number;
var includeLowercase = true/false 
var includeUppercase = true/false
var includeNumeric = true/false
var includeSpecialChar = true/false

Var lowerCaseChar = ‘abcdefghijklmnopqrstuvwxyz’
Var upperCaseChar = ‘ABCDEFGHIJKLMNOPQRSTUVWXYZ’
Var numericChar = ‘1234567890’
Var specialChar = ‘!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~’
Var charToBeUsed; */
