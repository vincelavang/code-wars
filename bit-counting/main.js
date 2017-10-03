function countBits(num){
  return num.toString(2).split('').reduce((a, b) => Number(a) + Number(b), 0)
}

console.log(countBits(0))
console.log(countBits(4))
console.log(countBits(7))
console.log(countBits(9))
console.log(countBits(10))
