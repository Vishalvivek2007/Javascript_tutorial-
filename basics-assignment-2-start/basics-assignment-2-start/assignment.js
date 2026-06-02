const task3Element = document.getElementById('task-3');

function function1(){
  alert('I am function 1');
}

function function2(name){
  alert('Hello ' + name);
}

function1();
function2('Vishal');

task3Element.addEventListener("click", function1);

function function3(str1, str2, str3){
  return ''+str1 + str2 + str3;
}

alert(function3('This ', 'is ', 'function 3'));