function sorting(arr) {
    let res=[]
    arr.sort((a,b)=>a-b)
    while(arr.length>0){
        res.push(arr.shift())
        res.push(arr.pop())
    }
    console.log(res);
}

sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])