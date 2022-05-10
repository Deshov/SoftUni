function foo(roomslist){
    let health=100;
    let coins=0;
    let level=0 
    let isAlive=true
    let roomsArray=roomslist[0].split("|")

    for (room of roomsArray){
      let currentItem=room.split(" ")[0];
      let currentNumber=room.split(" ")[1];
      level++
     
      if(currentItem=="potion"){
           let currPotion=Number(currentNumber)
          
          if (health+currPotion>100) {
               currPotion=100-health
               health=100;
          }else{
               health+=currPotion
          }
          console.log(`You healed for ${currPotion} hp.`);
          console.log(`Current health: ${health} hp.`);
      }else if(currentItem=="chest"){
          coins+=Number(currentNumber)
          console.log(`You found ${currentNumber} coins.`);
      }else{
          health-=currentNumber
          if (health>0) {
               console.log(`You slayed ${currentItem}.`);
          }else{
               isAlive=false;
               console.log(`You died! Killed by ${currentItem}.` );
               console.log(`Best room: ${level}`);
               break
          }
      }
      
    }

    if(isAlive){
         console.log("You've made it!");
         console.log(`Coins: ${coins}`);
         console.log(`Health: ${health}`);
    }
}