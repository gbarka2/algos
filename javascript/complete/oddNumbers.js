// print all odd numbers between l and r
// must return array of integers denoting odd numbers between l and r



function oddNumbers(l, r) {
  let arr = []
  while (l <= r) {
      arr.push(l)
      l += 1
  }
  return arr.filter(n => n % 2)
}

oddNumbers(3, 9)
oddNumbers(2, 5)