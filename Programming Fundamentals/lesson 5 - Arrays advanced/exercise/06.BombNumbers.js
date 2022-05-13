function foo(seq,bomb){
    let specNumb=Number(bomb[0])
    let specPower=bomb[1]
 
    let indexOfBomb=seq.indexOf(specNumb)
    while (indexOfBomb!=-1) {
     for (let i = 0; i < seq.length; i++) {
         if (seq[i]==specNumb) {
             seq.splice(Math.max(0,i-specPower),specPower*2+1)
         }
     }    
     indexOfBomb=seq.indexOf(specNumb)
    }
     
     let sum=0
     seq.map(x=>sum+=x)
     console.log(sum);
 }