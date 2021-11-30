function wave(str){
  let splitStr = str.split("")
  return splitStr.map((s, i) => {
    if (s !== " ") {
      return str.slice(0,i) + s.toUpperCase() + str.slice(i + 1)
    } else {
      return " "
    }
  }).filter(s => s !== " ")
}