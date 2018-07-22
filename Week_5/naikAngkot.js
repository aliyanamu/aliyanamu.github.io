function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var resArr = []

  for (let i = 0; i < arrPenumpang.length; i++) {
    for (let j = 0; j < rute.length; j++) {
      if (arrPenumpang[i][1] == rute[j]) var start = j
      else if (arrPenumpang[i][2] == rute[j]) var end = j
      var price = Math.abs(start-end)*2000
    }
    var resOne = {penumpang: arrPenumpang[i][0], naikDari: arrPenumpang[i][1], tujuan: arrPenumpang[i][2], bayar: price}
    resArr.push(resOne)
  }
  return resArr
}
