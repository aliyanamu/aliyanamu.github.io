function groupAnimals(animals) {
  animals.sort();
  var whole = []

  for(var i=0; i < animals.length; i++) {
    var firstLetter = animals[i].charAt(0)
    var cat = [];

    for (var j = 0; j < animals.length; j++) {
      if (animals[j][0] === firstLetter) {
        i=i+ cat.length;
        cat.push(animals[j]);
      }
    }
    whole.push(cat);
  }
  return whole
}
