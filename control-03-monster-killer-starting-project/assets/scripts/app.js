const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 15;
const STRONG_ATTACK_VALUE = 15;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let MAX;

adjustHealthBars(chosenMaxLife);


function attack(mode){
  if(mode==="ATTACK"){
    value=ATTACK_VALUE;
  }
  else if(mode==="STRONG_ATTACK"){
    value=STRONG_ATTACK_VALUE;
  }
  const damage=dealMonsterDamage(value);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -=playerDamage;
  if(currentMonsterHealth<=0 && currentPlayerHealth>0){
    alert("You WON !!");
  }
  if(currentPlayerHealth<=0 && currentMonsterHealth>0){
    alert("You LOST !!");
  }
  if(currentMonsterHealth <0 && currentPlayerHealth<0){
    alert("This is a draw!! ");
  }
}


function attackHandler() {
  attack("ATTACK");
}

function strongAttackHandler(){
  attack("STRONG_ATTACK");
}



attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click' , strongAttackHandler);
