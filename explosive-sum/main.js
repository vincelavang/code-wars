function sum(num) {
  if(num<0) {
    return 0
  }
  const arr=[]
  for(let i=0 ; i <= num+1; i++) {
    arr[i]=0
  }
  arr[0]=1
  for(let i=1; i <= num; i++) {
    for(let j=i; j <= num; j++) {
      arr[j] += arr[j-i]
    }
  }
  return arr[num]
}
