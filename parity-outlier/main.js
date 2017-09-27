function findOutlier(integers) {
   var evens = []
   var odds = []

   for (var i = 0; i < integers.length; i++) {
     if ((integers[i] % 2) === 0) {
       evens.push(integers[i])
       }
       else {
         odds.push(integers[i])
       }
   }
   var elen = evens.length
   var olen = odds.length

   if (elen > olen) {
     return odds[0]
   }
   else {
     return evens[0]
   }
  }

console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2,6,8,10,3]), 3)
console.log(findOutlier([0,0,3,0,0]), 3)
console.log(findOutlier([1,1,0,1,1]), 0)
