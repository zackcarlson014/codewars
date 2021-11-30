function middlePermutation(s) {
  let splitS = s.split("").sort();
  let len = splitS.length
  if (splitS.length % 2 === 0) {
    let first = splitS.splice(len/2 - 1, 1)
    splitS = splitS.reverse()
    splitS.forEach(l => first = first.concat(l))
    return first.join("")
  } else {
    let first = splitS.splice(((len - 1)/2), 1)
    let second = splitS.splice(len/2 - 1, 1)
    first = first.concat(second)
    splitS = splitS.reverse()
    splitS.forEach(l => first = first.concat(l))
    return first.join("")
  }
}