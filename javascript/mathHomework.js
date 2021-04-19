if (count.length < threshold) {
  count.push(points[i])
} else if (count.length === threshold) {
  break
}


function minNum(threshold, points) {
  let count = []
  const sortedPoints = points.sort(function(a, b) {return a-b})
  console.log("sorted", sortedPoints)
  for (let i = 0; i < sortedPoints.length; i++) {
      let reduce = count.reduce((a, b) => a + b, 0)
      if (count.length < threshold) {
          count.push(points[i])
      } else if (count.length === threshold) {
          break
      }
      console.log('reduce', count.reduce((a, b) => a + b, 0))
  }
  return count.length
  

}