function foo(arr){
    let num=Number(arr.shift())
    let typeList=arr.pop()
    let songs=[]
   class Song{
       constructor(typeList,name,time){
        this.typeList=typeList,
        this.name=name,
        this.time=time
       }
   }

   for (let i = 0; i < num; i++) {
       let tokens=arr[i].split("_")
       songs.push(new Song(tokens[0],tokens[1],tokens[2]))
       
   }

   for(let song of songs){
        if(song.typeList==typeList||typeList=="all")
            console.log(song.name);
   }

 }