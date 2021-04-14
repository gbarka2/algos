
// There are N coins, each showing either heads or tails. We would like all the coins to form a sequence of alternating heads and tails. What is the minimum number of coins that must be reversed to acheive this?

// Given an array A consisting of N integers representing the coins, returns the minmum number of coins that must be reversed. Consecutive elements of array A represent Consecutive coins and contain either a 0 (heads) or a 1 (tails).

let A = [1, 0, 1, 0, 1, 1]
//answer 1
let B = [1, 1, 0, 1, 1]
//answer 2
let C = [0,1,0]
// answer 0
let D = [0,1,1,0]
// answer 2

function solution(A) {

    let numFlips = 0

    for (let i = 0; i < A.length; i++) {
        if (A[i-1] === undefined) {
            continue
        } else if (A[i-1] === 0 && A[i] === 0) {
            A[i-1] = 1
            numFlips++
        } else if (A[i-1] === 1 && A[i] === 1) {
            A[i-1] = 0
            numFlips++
        } else if (A[i-1] === 0 && A[i] === 1 && A[i+1] === 1) {
            A[i+1] = 0
            numFlips++
        } 
    }
    // console.log(numFlips)
    return numFlips
}

//working
solution(A)
solution(B)
solution(C)
solution(D)