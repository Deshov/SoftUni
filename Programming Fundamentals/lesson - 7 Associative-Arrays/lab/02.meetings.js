function foo(param){
    let week={
        
    }

     for(let line of param){
         let [day,name]= line.split(" ")
         if(week.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
         }else{
            week[day]=name
            console.log(`Scheduled for ${day}`);
        }
        
     }
     
     for(let day in week){
        console.log(day,"->",week[day]);
     }
}