function validitiCheck(x1,y1,x2,y2){
    function calcValidity(x1,x2,y1,y2){
        let result=Math.sqrt((x2-x1)**2+(y2-y1)**2)
        
        if(result==Math.floor(result)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        }else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);

        }
        
    }
    calcValidity(x1,y1,0,0)
    calcValidity(x2,y2,0,0)
    calcValidity(x1,y1,x2,y2)
}
// validitiCheck(3,0,0,4)
validitiCheck(2,1,1,1)