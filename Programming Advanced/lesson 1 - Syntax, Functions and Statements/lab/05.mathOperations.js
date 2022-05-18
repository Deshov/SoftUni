function mathOperations(a,b,operator) {
    let res;

    switch (operator) {
        case '+':
            res=a+b
            break;
        case '-':
            res=a-b
            break;
        case '*':
            res=a*b
            break;
        case '/':
            res=a/b
            break;
        case '%':
            res=a%b
            break;
        case '**':
            res=a**b
            break;
    
       
    }
    console.log(res);
}

