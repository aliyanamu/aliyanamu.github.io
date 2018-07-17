function arrSlice ( arr, min, max ) {
  var res = [];
  for (var i = min; i < max; i++) {
    res.push(arr[i]);
  }
  return res
}
