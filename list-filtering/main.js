function filter_list(l) {
  var number = []

  for(var i = 0; i < l.length; i++) {
    if(typeof l[i] === 'number') {
      number.push(l[i])
    }
  }
  return number
}

console.log(filter_list([1,2,'a','b']))
console.log(filter_list([1,'a','b',0,15]))
console.log(filter_list([1,2,'aasf','1','123',123]))
