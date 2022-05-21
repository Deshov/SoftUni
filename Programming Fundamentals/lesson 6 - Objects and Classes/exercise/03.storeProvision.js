function foo(currentStock,deliveryStock){
    let store={}
    let stockList=[]

    class Stock{
        constructor(name,qty){
            this.name=name,
            this.qty=Number(qty)
        }
    }

    for (let i = 0; i < currentStock.length; i+=2) {
        store[currentStock[i]]=Number(currentStock[i+1])
    }
    
    for (let i = 0; i < deliveryStock.length; i+=2) {
        let currProduct=deliveryStock[i]
        if(!store.hasOwnProperty(currProduct)){
            store[currProduct]=0
        }
        store[currProduct]+=Number(deliveryStock[i+1])
    }
    
    for (const obj in store) {
       console.log(`${obj} -> ${store[obj]}`);
    }
}