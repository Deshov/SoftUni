function aggElements(arr) {
    let sum=0;
    let sum2=0;
    let concat='';
    arr.forEach(element => {
       sum+=element 
       sum2+=1/element
       concat+=''+element 
    });
    console.log(sum);
    console.log(sum2);
    console.log(concat);
}

