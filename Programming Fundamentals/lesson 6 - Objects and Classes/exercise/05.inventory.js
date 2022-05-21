function foo(param){
    let heroes=[]
    
    for (const command of param) {
        let tokens=command.split(" / ")
        let name=tokens[0]
        let level=Number(tokens[1])
        let items=tokens[2]

        heroes.push({name,level,items})
    }
    
    heroes.sort((a,b)=>a.level-b.level)
    
    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}