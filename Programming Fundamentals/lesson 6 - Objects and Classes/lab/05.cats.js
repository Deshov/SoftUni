function foo(arr){
    let cats=[]
    class Cat{
        constructor(name,age){
            this.name=name,
            this.age=age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        let kitty=arr[i].split(" ")
        cats.push(new Cat(kitty[0],kitty[1]))
        
    }
    for(let cat of cats){
        cat.meow()
    }

 }