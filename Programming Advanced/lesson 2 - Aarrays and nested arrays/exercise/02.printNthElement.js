function print(arr,numb) {
    let output=[]
    for (let i = 0; i < arr.length; i+=numb) {
        output.push(arr[i])
    }
    return output;
}