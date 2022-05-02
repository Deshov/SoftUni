function foo(gold){
    let bitcoins=0;
    let money=0;
    let bitcoinPrice=11949.16;
    let goldPrice=67.51;
    let day=0
    for (let i = 0; i < gold.length; i++) {
        if((i+1)%3==0)(
            gold[i]=gold[i]*0.7
        )
        money+=gold[i]*goldPrice
 
        if(money>=bitcoinPrice){
            bitcoins+=Math.floor(money/bitcoinPrice);
            money-=bitcoinPrice*Math.floor(money/bitcoinPrice)
            if(day==0){
                day=i+1
            }
        }
        
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if(bitcoins>0)
    console.log(`Day of the first purchased bitcoin: ${day}`);
    console.log(`Left money: ${money.toFixed(2)} lv.`);
 }
 