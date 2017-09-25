function order(words){
  const arr = words.split(' ')
  const sortedArr = []
  for(i = 0; i <= arr.length; i++) {
    for(j = 0; j < arr.length; j++) {
      if(arr[j].indexOf(i) >= 0) {
        sortedArr.push(arr[j])
      }
    }
  }
  return sortedArr.join(' ')
}

console.log(order("is2 Thi1s T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2", "Fo1r the2 g3ood 4of th5e pe6ople"))
console.log(order("", ""))
