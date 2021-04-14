// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

let A = [1, 3, 6, 4, 1, 2]
//answer 5
let B = [1, 2, 3, -5]
//answer 4
let C = [-1, -3]
//answer 1

function solution(A) {
  const set = new Set(A);
  let i = 1;
  while (set.has(i)) {
      i++
  }
  console.log(i)
}

//working
solution(A)
solution(B)
solution(C)