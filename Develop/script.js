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

  let upperC
  let lowerC
  let numbLi
  let symb
  if (passLength !== null) {
    upperC = confirm('Do you want to add uppercase letters to your password?')
    lowerC = confirm('Do you want to add lowercase letters to your password?')
    numbLi = confirm('Do you want to add numbers to your password?')
    symb = confirm('Do you want to add special characters to your password?')
  }

  let pool = ''
  if (lowerC === true) {
    pool += lowerCaseLetters
  }
  if (upperC === true) {
    pool += upperCaseLetters
  }
  if (numbLi === true) {
    for (let i = 0; i < numberList.length; i++) {
      pool += numberList[i]
    }
  }
  if (symb === true) {
    for (let i = 0; i < specialCharacters.length; i++) {
      pool += specialCharacters[i]
    }
  }

  let pwd = ''
    for (let i = 0; i < passLength; i++) {
      /* once math.random function generates a random number within the uppercaseletter index it is then stored in the variable randomUpperC;*/
      let randomIndexGen = Math.floor(Math.random() * pool.length)
      /* since we have our number value stored in randomUpperC we can now create a variable that will give us the letter of that index by using upperCaseLetter variable and having [randomUpperC]
      beside it since it is considered an index */
      let randomChar = pool[randomIndexGen];
      /* use the += when you're adding a value into a string */
      pwd += randomChar
    }
    console.log(pwd)

  }
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
