//find if k is present in array
// return "YES" or "NO"


function findNumber(arr, k) {
  if (arr.includes(k)) {
    return "YES"
  } else {
    return "NO"
}
}

findNumber([3, 2, 3, 1], 5)
findNumber([5, 1, 2, 3, 4, 5], 1)