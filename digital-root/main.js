function digital_root(n) {
  if (n < 10) {
    return n
    } else {
      const root = n.toString().split('')
      return digital_root(
        root.reduce(function(acc, val) { 
          return parseInt(acc) + parseInt(val)
        }, 0))
      }
}

console.log(digital_root(16))
