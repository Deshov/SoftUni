function foo(param){
    let employees=[]
    class Empolyer{
        constructor(name){
            this.name=name
        }
    }
    for(name of param){
        employees.push(new Empolyer(name))
    }
    
    for(let empolyer of employees){
        console.log(`Name: ${empolyer.name} -- Personal Number: ${empolyer.name.length}`);
    }
}