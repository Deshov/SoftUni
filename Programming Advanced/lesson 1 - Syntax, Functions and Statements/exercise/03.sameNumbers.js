function sameNumbers(num) {
    let sum=0;
    let input=String(num)
    let isSame=true;

    for (let i = 0; i < input.length; i++) {
        if(input[0]!=input[i]){
            isSame=false;
        }
        sum+=Number(input[i])
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222)