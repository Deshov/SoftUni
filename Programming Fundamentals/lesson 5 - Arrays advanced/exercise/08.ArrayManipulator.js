function foo(arr1,arr2){
    for(command of arr2){
        let tokens=command.split(" ")
        if(tokens[0]=="add"){
            arr1.splice(tokens[1],0,tokens[2])
        }else if(tokens[0]=="addMany"){
            let index=tokens[1]
            let arr=tokens.splice(2)
            arr.reverse().map(x=>arr1.splice(index,0,x))
            
        }else if(tokens[0]=="contains"){
            console.log(arr1.indexOf(Number(tokens[1])));
        }else if(tokens[0]=="remove"){
            arr1.splice(tokens[1],1)
        }else if(tokens[0]=="shift"){
            for (let i = 0; i < tokens[1]; i++) {
                let currNumb=arr1.shift()
                arr1.push(currNumb)
            }
        }else if(tokens[0]=="sumPairs"){
            let sumArr=[]
            for (let i = 0; i < arr1.length; i++) {
                let numb1=Number(arr1[i])
                let numb2=Number(arr1[i+1])
                i++
                if(numb2){
                    sumArr.push(numb1+numb2)   
                }else{
                    sumArr.push(numb1)   
                }
            }
            arr1=sumArr
        }else if(tokens[0]=="print"){
            break;
        }
    }
    
    console.log(`[ ${arr1.join(", ")} ]`);
}
 