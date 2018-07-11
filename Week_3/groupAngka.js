function mengelompokkanAngka(arr) {
  var modThree = [], even = [], odd = [];
  for(var i=0; i<arr.length; i++) {
    if (arr[i] % 3 === 0) {
      modThree.push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  modThree.sort();
  even.sort();
  odd.sort();

  var order = [even, odd, modThree]
  return order
}
