function matrixTranspose(matriks) {
  var hasil = []
  for (var i = 0; i < matriks[0].length; i++) {
    hasil.push([])
  }
  for (var i = 0; i < matriks.length; i++) {
    for (var j = 0; j < matriks[i].length; j++) {
      hasil[j].push(matriks[i][j])
    }
  }
  return hasil
}
