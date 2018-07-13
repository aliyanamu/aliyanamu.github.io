function deepSum (arr) {
  var sum = 0;

  for(var i=0; i<arr.length; i++) {
    var sumJ = 0;

    for(var j=0; j<arr[i].length; j++) {
      var sumK = 0;

      for(var k=0; k<arr[i][j].length; k++) {
        sumK += arr[i][j][k]
      }
      sumJ += sumK
    }
    sum += sumJ
  }
  return sum
}
