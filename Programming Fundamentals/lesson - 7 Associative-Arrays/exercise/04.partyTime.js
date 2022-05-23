function foo(param){
    let guestList=param
                    .join(" ")
                    .split(" PARTY ")[0]
                    .split(" ")
                    
    let passwordList=param.join(" ").split(" PARTY ")[1].split(" ")
    
    let guests={}

    for(let guest of guestList){
      guests[guest]=0
    }
    
    for(let guest of passwordList){
       if (guestList.includes(guest)) {
         guests[guest]=1
       }
    }

    let res=Object.entries(guests).sort((a,b)=>a[0].localeCompare(b[0]));
    
    res=res.filter(a=>a[1]==0)
    console.log(res.length);
    res.map(a=>console.log(a[0]))
}