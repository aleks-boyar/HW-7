const myArr = [1,2,3,-1,-2,-3,4];

console.log(someFunction(myArr))

function someFunction (arr) {
   const emtyArray = [];
   if(arr.length === 0) {
      return 'some eror';
   }


for (i = 0;i <= arr.length - 1; i++) {
   if(arr[i] >= 0){
     emtyArray.push(arr[i])
   }
}
   if(emtyArray === 0){
      return null;
   } else {
      return emtyArray;
   }
}



