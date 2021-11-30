var maxSequence = function(arr){
  let sum = 0
  arr.forEach((n, i) => {
    let runningSum = n
    let subArr = arr.slice(i + 1)
    subArr.forEach(subN => {
      runningSum += subN
      if (runningSum > sum)
        sum = runningSum
    })
  })
  return sum
}