function wordUppercase(str) {
    let arr=str.replace(/[.,!?]/g,' ').split(" ")
    arr=arr.filter(x=>x!='')
    
    console.log(arr.join(", ").trim().toUpperCase());
}

wordUppercase('Functions in JS can be nested, i.e. hold other functions')