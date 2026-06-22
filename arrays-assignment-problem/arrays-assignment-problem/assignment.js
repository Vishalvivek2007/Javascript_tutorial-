//task 1
let arr = [1,2,3,4,5,6,7,8,9];
const ans1 = arr.filter((num)=>{return num>=5}).map((num)=>{
  return {num:num};
}).reduce((prev,current)=>{return prev*current.num} ,1 );

console.log(`Ans to q1 is ${ans1}`);

//task 2

const findmax = (...arguments)=>{
  let max = -100;
  for(const num of arguments){
    if(num>max){
      max=num;
    }
  }
  return max;
}

const ans2 = findmax(...arr);

console.log(`Ans to q2 is ${ans2}`);


//task3

const findmax2 = (...arguments)=>{
  let max = -100;
  let min=10000;
  for(const num of arguments){
    if(num>max){
      max=num;
    }
    if(num<min){
      min=num;
    }
  }
  return [max ,min];
}

const [ans3_max , ans3_min] = findmax2(...arr);

console.log(`Ans to q3 is ${ans3_max} ${ans3_min}`);

