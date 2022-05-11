function foo(param){
    console.log(param.sort((a,b)=>a-b).slice(0,2).join(" "));
}
