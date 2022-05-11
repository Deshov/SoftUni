function foo(param){
    let arr=param.shift().split(" ")
    
    for(command of param){
        let action=command.split(" ")[0];
        let element=command.split(" ")[1];
        
        switch (action) {
            case 'Add':
                arr.push(element)
                break;
            case 'Remove':
                arr=arr.filter(x=>x!=element)
                break;
            case 'RemoveAt':
                arr=arr.filter((x,i)=>i!=element)
                break;
            case 'Insert':
                let index=command.split(" ")[2];
                arr.splice(index,0,element)
                break;
        
        }
    }
    console.log(arr.join(" "));
}