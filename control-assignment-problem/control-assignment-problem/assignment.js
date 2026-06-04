const num1 = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const num2 = Math.random(); 

console.log(`Num 1 is ${num1}`);
console.log(`Num 2 is ${num2}`);

if(num1>0.7){
  alert("NUM 1 is greater than 0.7");
}

let arr = [1,2,3,4,5,6,7,8,9];
console.log("Pass 1");
for(let num of arr){
  console.log(num);
}
console.log("pass2");
for(let i=arr.length-1;i>=0;i--){
  console.log(arr[i]);
}

if((num1 >0.7 && num2 >0.7) || num1<0.2 || num2<0.2){
  console.log("alert2");
}


