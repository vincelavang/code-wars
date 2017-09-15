function tickets(peopleInLine){
  let money25 = 0
  let money50 = 0
  let money100 = 0

  for(var i =0; i < peopleInLine.length; i++) {
    if(peopleInLine[i] === 25) {
      money25 +=1
    } else if(peopleInLine[i] === 50) {
        if(money25 >= 1) {
          money50 += 1
          money25 -= 1
        } else {
            return 'NO'
          }
      } else if (peopleInLine[i] === 100) {
        if ((money50 >= 1) && (money25 >= 1)){
            money25 -=1
            money50 -=1
            money100 += 1
        } else if (money25 >= 3){
            money25 -=3
            money100 += 1
        } else {
            return "NO"
        }
    }
  }
  return "YES";
}

console.log(tickets([25, 25, 50,50]))
console.log(tickets([25, 100]))
