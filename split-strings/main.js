function solution(str) {
  const result = []
  
  if (str.length % 2 != 0) {
    str = str + '_'
  }
  for (var i=0; i < str.length; i += 2) {
    result.push(str[i] + str[i+1])
  }
  return result
}
