function foo(param){
    let sumEven=0
    let sumOdd=0

    param.toString().split("").forEach(x=>Number(x)%2==0?sumEven+=Number(x):sumOdd+=Number(x))

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
    
    
}