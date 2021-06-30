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
    console.log('Divide', d);
}
add(3,4);
subtract(5,3);
divide(10,2);
 