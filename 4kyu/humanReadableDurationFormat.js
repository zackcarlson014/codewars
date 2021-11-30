function formatDuration (seconds) {
  let remainder = seconds
  let times = {
    year: 31536000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  }
  
  if (seconds === 0) {return "now"}
  
  return Object.entries(times).reduce((acc,curr) => {
    if (remainder / curr[1] >= 1) {
      let amount = Math.floor(remainder / curr[1])
      let plural = amount > 1 ? "s" : ""
      if (acc.length !== 0) {
        acc.push(`, ${amount} ${curr[0]+plural}`)
      } else {
        acc.push(`${amount} ${curr[0]+plural}`) 
      }
      remainder %= curr[1]
    }
    return acc
  }, []).join("").replace(/,(?=[^,]*$)/, ' and')
}