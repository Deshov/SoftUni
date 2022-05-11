function foo(arr){
   
    console.log(
       arr.filter((el,i)=>i%2==1).
       map(el=>el*2).
       reverse().
       join(" ")
   );
}
