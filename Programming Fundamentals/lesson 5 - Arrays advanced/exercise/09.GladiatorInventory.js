function foo(arr){
    let inventory=arr.shift().split(" ")
    
    for (commands of arr){
        let tokens=commands.split(" ")
        let command=tokens[0]
        let equipment=tokens[1]
        let indexOfEquipment=inventory.indexOf(equipment)
        
        switch (command) {
            case "Buy":
                if(indexOfEquipment==-1)
                    inventory.push(equipment)
                break;

            case "Trash":
                if(indexOfEquipment!=-1)
                    inventory.splice(indexOfEquipment,1)
                break;

            case "Repair":
                if(indexOfEquipment!=-1){
                    inventory.splice(indexOfEquipment,1)
                    inventory.push(equipment)
                }
                
                break;

            case "Upgrade":
                let eq=tokens[1].split("-")
                let index=inventory.indexOf(eq[0])
                if(index!=-1)
                    inventory.splice(index+1,0,`${eq[0]}:${eq[1]}`)
                break;
        
        }
        
    }
    console.log(inventory.join(" "));
}
 