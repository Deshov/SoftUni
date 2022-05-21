function foo(json){
    let person=JSON.parse(json)
    let keys=Object.keys(person)
    for (let key of keys){
        console.log(`${key}: ${person[key]}`);
    }
}