// In a computer security course you just learned about password decryptions. Your fellow student has created their own password encryption method, and they've asked you to test how secure it is. Your task is to recover the original password given the encrypted password provided.

// At first it seems impossible. But one day after class, your catch a peek of their notebook. It says:

//Given string s, let s[i] represent the ith character in the string s using 0-based indexing.

// 1. initially i = 0
// 2. If s[i] is lowercase and the next character is s[i+1] is uppercase, swap them, add a '*', and move to i+2
// 3. If s[i] is a number, replace it with a 0, place the original number at the start, and move to i+1
// 4. Else, move to i+1
//5. Stop if i is more or equal to the string length. Otherwise go to step 2

//Notes:
// String always contains digits from 1 to 9 and does not contain 0
// Original string always contains only alphanumeric characters

//Sample Inputs
const input = '51Pa*0Lp*0e' // --- output aP1pL5e
const input2 = 'pTo*Ta*0' // -- output poTaTO

// Explanation1:
// 1. We start at the letter a since i =0
// 2. Since a is lowercase and the next character P is uppercase, we swap them, add a '*', and move to the next character (i+2)
// 3. For a number, we replace it with 0, put the original number 1 at the start and continue to the next character i+1
// 4. We're still in the middle of the string (i does not equal the string length) so we repeat the process again.

function decryptPassword(string) {
  let array = string.split('')
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let arrayNums = []
  // console.log(array)
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '*') {
      array.splice(i-2, 3, array[i-1], array[i-2])
    }
    if (array[i] === '0') {
      // array.splice(i, 1, )
    }

  }
  console.log(arrayNums)
}

decryptPassword(input)

