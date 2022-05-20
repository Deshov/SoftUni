function coocking(numb,oper1,oper2,oper3,oper4,oper5) {
    numb=Number(numb)
    let operList=[oper1,oper2,oper3,oper4,oper5]
    for(oper of operList){
        if(oper=='chop'){
            numb/=2
            console.log(numb);
        }else if(oper=="dice"){
            numb=Math.sqrt(numb)
            console.log(numb);
        }else if(oper=="spice"){
            numb+=1
            console.log(numb);
        }else if(oper=="bake"){
            numb*=3
            console.log(numb);
        }else if(oper=="fillet"){
            numb*=0.8
            console.log(Math.round(numb*100)/100);
        }
    }
}

