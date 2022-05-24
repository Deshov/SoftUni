function diagonalSum(matrix) {
   let diagonalSum1=0 
   let diagonalSum2=0
   
   for (let i = 0; i < matrix.length; i++) {
    let b=matrix[i].length;
    for (let j = 0; i < b; i++) {
        diagonalSum1+=matrix[i][j+i]
        let a=matrix[i].length
        
        diagonalSum2+=matrix[i][a-1-i]
        
    }
   }
   console.log(diagonalSum1,diagonalSum2);
}
