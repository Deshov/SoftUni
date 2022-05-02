function foo(input){
    let username=input.shift();
    let password=username.split('').reverse().join('') 
    let flag=0;
    let counter=1

    for (let i = 0; i < input.length; i++) {
        
        if(input[i]==password){
            flag=1;
            break;
        }else{
            console.log("Incorrect password. Try again.");
        }
        if (counter==3) {
            break;
        } 
        counter++
    }
    if(flag==1){
        console.log(`User ${username} logged in.`);
    }else{
        console.log(`User ${username} blocked!`);
    }
   
   }