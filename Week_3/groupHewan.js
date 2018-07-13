function groupAnimals(animals) {
  var kamus = "abcdefghijklmnopqrstuvwxyz"
  var gAnimals = []

  for(var i=0; i<kamus.length; i++) {
    var arr = []
    for(var j=0; j<animals.length; j++) {
      if (kamus[i] === animals[j][0]) {
        arr.push(animals[j]);
      }
    }
    if (arr.length !== 0) {
      gAnimals.push(arr)
    }
  }
  return gAnimals
}
