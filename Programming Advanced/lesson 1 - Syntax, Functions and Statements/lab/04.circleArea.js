function circleArea(a){
    if(typeof a=='number'){
        let res=a**2*Math.PI
        console.log(res.toFixed(2));
    }else{
    console.log(`We can not calculate the circle area, because we receive a ${typeof a}.`);
    }
}