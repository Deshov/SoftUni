function townPopulation(arr) {
    let result={}
    for(let town of arr){
        let [name,population]=town.split(" <-> ")
        
        if(!result[name]){

            result[name]=Number(population)
        }else{
            result[name]+=Number(population)

        }
       
    }  
    for(let key in result){

        console.log(key,":",result[key]);  
    }
}

