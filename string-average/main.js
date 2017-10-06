function averageString(str) {
  const numObj = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  },
  let sum = 0;
  const str = str.split(' ')

  for(var i = 0; i < str.length; i++) {
    if(numObj[str[i]] === undefined) {
      return 'n/a'
    } else {
      sum += numObj[str[i]]
    }
  }
  return Object.keys(numObj)[Math.floor(sum/str.length)]
}
