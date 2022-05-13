function foo(param){
    let wagons=param.shift().split(" ").map(Number)
    
    let maxNumb=Number(param.shift())
    
    for (command of param){
        if(command.split(" ")[0]=="Add"){
            wagons.push(Number(command.split(" ")[1]))
        }else{
            let people=Number(command)
            for (let i = 0; i < wagons.length; i++) {
                if((wagons[i]+people)<=maxNumb){
                    wagons[i]+=people;
                    break;
                }
                
            }
            for(peopleInWagon of wagons){
                if((peopleInWagon+people)<=maxNumb){
                    peopleInWagon+=people;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
 