function minDistanceBetweenGreatest(arr) {
  var high = Math.max(...arr)
  high = String(high)
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === high) {
      var pos = i
    }
  }
  arr = arr.join('')
  var highest = arr.findIndex(high)
  return highest
}

console.log(minDistanceBetweenGreatest([ 3, 5, 2, 3, 5, 3, 5 ])); //2
console.log(minDistanceBetweenGreatest([ 1, 1, 1, 1, 1, 1 ])); //1
console.log(minDistanceBetweenGreatest([ 7, 8, 5, 2, 1, 1 ])); //0
