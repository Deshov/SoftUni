function foo(sideLength,increment){
    let stoneQty=0;
    let marbleQty=0;
    let lapisLazuliQty=0;
    let goldQty=0;
    
    let floor=1;

    for (let i = sideLength; i >= 0; i-=2) {
        
        if(i>2){
            if(floor%5!=0){
                stoneQty+=Math.pow(i-2,2)*increment
                marbleQty+=(Math.pow(i,2)-Math.pow(i-2,2))*increment
            }else if(floor%5==0){
                stoneQty+=Math.pow(i-2,2)*increment
                lapisLazuliQty+=(Math.pow(i,2)-Math.pow(i-2,2))*increment 
            }
            floor++
        }else{
            goldQty+=Math.pow(i,2)*increment
        }
        
    }

    console.log(`Stone required: ${Math.ceil(stoneQty)}`);
    console.log(`Marble required: ${Math.ceil(marbleQty)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliQty)}`);
    console.log(`Gold required: ${Math.ceil(goldQty)}`);
    console.log(`Final pyramid height: ${Math.floor(floor*increment)}`);
}