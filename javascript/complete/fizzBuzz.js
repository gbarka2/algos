// Given a number n, for each integer i in in the range from 1 to n inclusive, print one value per line as follows:

// if i is a multiple of 3 and 5, print "FizzBuzz"
// if i is a multiple of 3, print "Fizz"
// if i is a multiple of 5, print "Buzz"
// if i is not a mutliple of 3 or 5, print i

function fizzBuzz(n) {
  for (let i = 1; i < n+1; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz")
      } else if (i % 3 === 0) {
          console.log("Fizz")
      } else if (i % 5 === 0) {
          console.log("Buzz")
      } else {
          console.log(i)
      }
  }
}

// fizzBuzz(15)
fizzBuzz(100)
