// Task 1: Arrow Function
const sayHello = (name) => {
    console.log('Hi ' + name);
};

sayHello('Vishal');


// Task 2: Different Arrow Function Syntaxes

// Two arguments
const greetUser = (greeting, name) => {
    console.log(greeting + ' ' + name);
};

greetUser('Hello', 'Vishal');


// No arguments
const greetWithoutArgs = () => {
    console.log('Hello Vishal');
};

greetWithoutArgs();


// One returned value
const greetWithReturn = (name) => 'Hello ' + name;

console.log(greetWithReturn('Vishal'));


// Task 3: Default Argument
const sayHelloDefault = (name = 'Stranger') => {
    console.log('Hi ' + name);
};

sayHelloDefault();
sayHelloDefault('Vishal');


// Task 4: Unlimited strings + callback
const checkInput = (cb, ...strings) => {
   for(const str of strings){
    if(str===""){
      return;
    }
   }
   cb();
};


// Test
checkInput(
    () => {
        console.log('All inputs are valid!');
    },
    'Vishal',
    'JavaScript',
    'Functions'
);

checkInput(
    () => {
        console.log('You should not see this');
    },
    'Vishal',
    '',
    'Functions'
);