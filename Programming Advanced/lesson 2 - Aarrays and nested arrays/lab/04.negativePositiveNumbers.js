function negativePositiveNumbers(arr) {
    let result=[]
    for(num of arr){
        if (num<0){
            result.unshift(num)
        }else if (num>=0){
            result.push(num)
        }
    }
    for(let num of result){
        console.log(num);
    }
}