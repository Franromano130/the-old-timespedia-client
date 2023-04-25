for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("ApplePen")
    } else if (i % 3 === 0) {
      console.log("Pen")
    } else if (i % 5 === 0) {
      console.log("Apple")
    } else {
      console.log(i)
    }
  }
  
  for (let i = 15; i >= 1; i--) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("ApplePen")
    } else if (i % 3 === 0) {
      console.log("Pen")
    } else if (i % 5 === 0) {
      console.log("Apple")
    } else {
      console.log(i)
    }
  }