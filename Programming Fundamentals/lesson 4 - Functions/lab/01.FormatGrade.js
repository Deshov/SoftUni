function foo (grade) {
    let name=''
    let formatted=grade.toFixed(2)
    if (grade<3) {
        name="Fail";
        formatted=Math.floor(grade)
    }else if(grade<3.50){
        name="Poor";
    }else if(grade<4.50){
        name="Good";
    }else if(grade<5.50){
        name="Very good";
    }else{
        name="Excellent";
    }
   
    console.log(`${name} (${formatted})`);
 }
