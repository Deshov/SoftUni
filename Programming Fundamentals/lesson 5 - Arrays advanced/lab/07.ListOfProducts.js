function foo(param){
    console.log(param.sort().map((x,i)=>x=`${i+1}.${x}`).join('\n'));
}