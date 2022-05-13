function foo(arr){
    arr.map(Number)
    let smallest=30-arr.sort((a,b)=>a-b)[0]
    concredeByDays=[]
    for (let j = 0; j < smallest; j++) {
        let currConcrede=0
        for (let i = 0; i < arr.length; i++) {
            if(arr[i]<30){
                arr[i]+=1
                currConcrede+=195
            }
        }
        concredeByDays.push(currConcrede)   
    }

    let pesos=0
    concredeByDays.map(x=>pesos+=x*1900)
    console.log(concredeByDays.join(", "));
    console.log(`${pesos} pesos`);
}