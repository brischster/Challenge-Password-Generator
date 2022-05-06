// Assignment Code
var generateBtn = document.querySelector("#generate");
var charToBeUsed = "";
var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericChar = "1234567890"
var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var finalPassword = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var passwordLength = prompt("What would you like the length of your password to be? Must be between 8 & 128 characters.");
  var includeLowercase = confirm("Would you like to include lowercase letters in your password?")


//  if (confirm(“ Would you like to use  lowercase letters in your generated password?”)) {
// charToBeUsed = `${includeLowercase}`
// } else if (confirm(“Would you like to use uppercase letters in your generated password?”)) {
// charToBeUsed = `${includeLowercase}${includeUppercase}`
// } else if (confirm( 
  if (includeLowercase) {
charToBeUsed = charToBeUsed + lowerCaseChar
  } if 
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