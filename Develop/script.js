// Assignment Code
let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
let numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let specialCharacters = ['!', '@', '%', '$', '*']

var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword () {
  var password = generatePassword() // goes to line 15
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

/* this will run once the generate button is pressed, prompting the password length question */
function writePassword (number) {
  let pass = true
  let passLength = ''
  while (pass) {
    passLength = prompt(
      'To start, please choose a password length between 8 to 128 characters'
    )
    if (passLength === null) {
      pass = false
    } else if (passLength < 8 || passLength > 128) {
    }
    // checks if passLength is equal to not a number
    //isNaN is a function that will check if the value is a number or not, if a number it will return false, if not a number it will return true
    else if (isNaN(passLength)) {
      alert('This is an invalid number')
    } else {
      pass = false
    }
  }

  if (passLength !== null) {
    let upperC = confirm(
      'Do you want to add uppercase letters to your password?'
    )
    let lowerC = confirm(
      'Do you want to add lowercase letters to your password?'
    )
    let numbLi = confirm('Do you want to add numbers to your password?')
    let symb = confirm('Do you want to add special characters to your password?')
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
