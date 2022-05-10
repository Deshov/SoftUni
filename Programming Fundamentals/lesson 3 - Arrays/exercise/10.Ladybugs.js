function foo(arr){
    let fieldsSize=arr.shift();
    let ladyBugsPlaces=arr.shift();
    let ladyBugsArray=ladyBugsPlaces.split(" ")
    
    //създавам си полета
    let fields=[];
    fields.length=fieldsSize
    fields.fill(0)
   
    //попълвам полетата с калинки
    for (let i = 0; i < fields.length; i++) {
         for (let j = 0; j < ladyBugsArray.length; j++) {
              if (i==Number(ladyBugsArray[j])) {
                   fields[i]=1
              }
         }     
    }
   
    //започвам команда по команда да местя калинки
    for(command of arr){
         let ladybugIndex=Number(command.split(" ")[0]);
         let direction=command.split(" ")[1];
         let flyLength=Number(command.split(" ")[2]);

         if(command==''||fields[ladybugIndex]==0||ladybugIndex>fields.length-1||ladybugIndex<0||flyLength<=0){
              continue;
         }else{

              
              fields[ladybugIndex]=0;
              
              if (direction=="right") {
                   for (let i = ladybugIndex+flyLength; i < fields.length; i++) {
                        if(fields[i]==0){
                             fields[i]=1;
                             break;
                        }
                        
                   }
              }else if (direction=="left"){
                   for (let i = ladybugIndex-flyLength; i >= 0; i--) {
                        if(fields[i]==0){
                             fields[i]=1;
                             break;
                        }
                        
                   }
              }
         }
    }

  console.log(fields.join(" "));

}