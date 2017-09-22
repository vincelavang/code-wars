function spinWords(string){
 let strArr = string.split(' ')
 
 for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5) {
      strArr[i] = strArr[i].split('').reverse().join('')
    }
  }
  return strArr.join(' ')
}

console.log(spinWords('Hey fellow warriors'))
console.log(spinWords('This is a test'))
console.log(spinWords('This is another test'))
