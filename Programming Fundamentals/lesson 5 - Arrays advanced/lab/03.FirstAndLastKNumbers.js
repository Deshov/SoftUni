function foo(param){
    let k=Number(param.shift())
    let firstKelements=param.slice(0,k)
    let lastKelements=param.slice(param.length-k,param.length)

    console.log(firstKelements.join(" "));
    console.log(lastKelements.join(" "));

}