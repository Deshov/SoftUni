function rotateArray(arr,numb) {
    for (let i = 0; i < numb; i++) {
        let el=arr.pop()
        arr.unshift(el)
        
    }
    console.log(arr.join(" "));
}

