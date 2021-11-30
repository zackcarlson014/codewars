function longestSlideDown (pyramid) {
  let maxIndex = pyramid.length - 1
  let result = pyramid.pop()
  for (let i = maxIndex; i > 0; i--) {
    result = pyramid.pop().map((n,i) => {
      return Math.max(n + result[i], n + result[i + 1])
    })
  }
  return result[0]
}