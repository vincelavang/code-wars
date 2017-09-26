function duplicateEncode(word) {
  word = word.toLowerCase()
  let str= ''
  for(let i=0;i<word.length;i++) {
    if(word.indexOf(word[i]) === word.lastIndexOf(word[i])) {
      str += "("
    }
    else str += ")"
  }
  return str
}
