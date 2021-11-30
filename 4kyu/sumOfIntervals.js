function sumIntervals(intervals){
  let result = []
  let sortedInts = intervals.sort((a,b)=>a[0]-b[0])
  while (sortedInts.length !== 0) {
    if (result.length === 0 || sortedInts[0][0] > result[result.length - 1][1])
      result.push(sortedInts.shift())
    else
      sortedInts[0][1] > result[result.length - 1][1] ? result[result.length - 1][1] = sortedInts.shift()[1] : sortedInts.shift()
  }
  return result.reduce((a, c) => a += c[1] - c[0], 0)
}