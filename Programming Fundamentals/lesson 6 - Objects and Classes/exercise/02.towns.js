function foo(param){
    let towns=[]
    class Town{
        constructor(name,lat,long){
            this.name=name,
            this.lat=lat,
            this.long=long
        }
        print(){
            console.log(`{ town: '${this.name}', latitude: '${Number(this.lat).toFixed(2)}', longitude: '${Number(this.long).toFixed(2)}' }`);
        }
    }

    for(let town of param){
        town=town.split(" | ")
        towns.push(new Town(town[0],town[1],town[2]))
    }

    for(town of towns){
        town.print()
    }
}
 