function biggestElement(matrix) {
    let biggest=-10000000
    for(let array of matrix){
        for(let el of array){
            if (Number(el)>biggest){
                biggest=el
            }
        }
    }
    return biggest;
}

biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   )