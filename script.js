// Necessary global variables to be used
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
  charToBeUsed = "";
  if (password !== "") {
    finalPassword = "";
  }
  // passwordText.value = "";
  var password = generatePassword();
  // console.log(passWordArray);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText);
}

function generatePassword() {
  // list of prompts to get input from user on what characters they would like in their password creation
  passwordLength = prompt(
    "What would you like the length of your password to be? Must be between 8 & 128 characters."
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert(
      `Password must have minimum of 10 characters and a max of 128, please select again`
    );
    return generatePassword();
  }
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

  // if statements to create pool of characters to be used in creation of password
  if (includeLowercase) {
    charToBeUsed += lowerCaseChar;
  }
  if (includeUppercase) {
    charToBeUsed += upperCaseChar;
  }
  if (includeNumeric) {
    charToBeUsed += numericChar;
  }
  if (includeSpecialChar) {
    charToBeUsed += specialChar;
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
  return finalPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
