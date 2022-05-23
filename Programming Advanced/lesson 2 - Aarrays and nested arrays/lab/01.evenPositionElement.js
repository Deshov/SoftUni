function evenPosElement(arr) {
    arr=arr.filter((el,index)=>{if(index%2==0) return el})
    console.log(arr.join(" "));
}

evenPosElement(['20', '30', '40', '50', '60'])