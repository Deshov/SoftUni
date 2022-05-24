function biggerHalf(arr) {
    arr.sort((a,b)=>a-b)
  let half = Math.floor(arr.length/2)
  return arr.splice(half);
}

biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])