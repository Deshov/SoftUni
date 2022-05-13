function foo(arr1,arr2){
    let takeNumb=arr2.shift()
    let delNumb=arr2.shift()
    let searchNumb=arr2.shift()

    arr1=arr1.splice(0,takeNumb)
    arr1=arr1.splice(delNumb)

    let count=0

    for(numb of arr1){
        if (numb==searchNumb) {
            count++
            
        }
    }

    console.log(`Number ${searchNumb} occurs ${count} times.`);
}