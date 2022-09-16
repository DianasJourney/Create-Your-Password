// Assignment Code
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword () {
  var password = generatePassword() // goes to line 15
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

/* this will run once the generate button is pressed, prompting the password length question */
function generatePassword () {
  let pass = true;
  while (pass) {
    let passLength = prompt(
      'To start, please choose a password length between 8 to 128 characters'
    ) 
    // 
    if (passLength === null){
      pass = false;
    } 
    else if (passLength < 8 || passLength > 128) {
    }
    // checks if passLength is equal to not a number
    //isNaN is a function that will check if the value is a number or not, if a number it will return false, if not a number it will return true
    else if (isNaN(passLength)) {
      alert('This is an invalid number')
    } 
    else {
      pass = false;
    }
  }

  /* prompts up the confirm box after all conditions above are met */
  let containUpperCase = confirm('Do you want to add uppercase letters to your password?');
  let containLowerCase = confirm("Do you want to add lowercase letters to your password?");
  let containNumber = confirm('Do you want to add numbers to your password?');
  let containSpecial = confirm('Do you want to add special characters to your password?');

  upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  specialCharacters = ["!", "@", "%", "$", "*"];
  

}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)

