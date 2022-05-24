function pieceOfPie(pieFlavoursArr,flav1,flav2) {
    let index1=pieFlavoursArr.indexOf(flav1)
    let index2=pieFlavoursArr.indexOf(flav2)

    console.log(pieFlavoursArr.slice(index1,index2+1));
}

