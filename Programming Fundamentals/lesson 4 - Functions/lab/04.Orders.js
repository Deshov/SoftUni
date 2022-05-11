function foo (product,qty) {
    let price;
     switch (product) {
        case "coffee":
            price=1.50
            break;
        case "coke":
            price=1.40
            break;
        case "water":
            price=1
            break;
        case "snacks":
            price=2
            break;
    
    }
    console.log((price*qty).toFixed(2));
 
 }