// There is a road consisting of N segments, numbered from 0 to N-1. Segment S[K] of the road may contain a pothole, denoted by a single uppercase "X" character or may be a good segment without any potholes denoted by a single dot "."

// For example, string ".X..X" means that there are two potholes in total in the road: one is located in segment S[1] and one in segment S[4]. All other segments are good.

// The road fixing machine can patch over three consecutive segments at once with asphalt and repair all the potholes located within each of these segments. Good or already repaired segments remain good after patching them.

// Your task is compute the mimimum number of patches to repair all potholes in the road.

let A = ".X..X"
// answer 2
let B = "X.XXXXX.X"
// answer 3
let C = "XX.XXX"
// answer 2
let D = "XXXX"
//answer 2


function solution(S) {    
  let patchCount = 0
  let array = S.split('')
    
  for (let i = 0; i < array.length; i++) {
      // console.log('original', array)
      if (array[i] === 'X' || array[i+1] === 'X' || array[i+2] === 'X') {
          patchCount++
          array.splice(array[i], 3)
      } 
      // console.log('resulting', array)
    }
  console.log(patchCount)
    // return "answer", patchCount
}

//working
solution(A)
solution(B)
solution(C)
//not working
solution(D)


