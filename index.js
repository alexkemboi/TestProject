'use strict';

function add(a,b){
   const sum = a+b;
   console.log('Sum',sum);
   return sum;
}
function subtract(a,b){
   const sub=a-b;
   console.log('sub',sub);
   return sub;
}
function divide(a,b){
    const d = (a/b).toFixed(2);
   //  console.log('Divide', d);
}
function multiply(a,b){
   const product=a*b;
   console.log('product',product);
   return product;
}
function modulus(a,b){
   const mod=a%b;
   console.log(mod);
   return mod;
}
function greaterThanFiveArray(arr){
  const newArr = arr.filter((a) => {
      return a > 5;
   });
   console.log('New Array', newArr);
  return newArr;
}

const arr=[
  1,2,3,4,5
]


function doubleArray(arr){
  const dbl =arr.map((i)=>{
     return i*2;
  });
  console.log("dbl",dbl);
}
add(3,4);
subtract(5,3);
divide(10,2);
multiply(10,2);
 modulus(5,3);
greaterThanFiveArray([3,4,5,6,7,8]);
 doubleArray(arr);