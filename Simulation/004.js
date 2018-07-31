function initialGroupingDescending(studentsArr) {
  studentsArr.sort(function revs(a,b) {
    return b>a
  })
  for (let i=0; i<studentsArr.length; i++) {
    var cat = []
    for (let j=i+1; j<studentsArr.length; j++) {
      if (studentsArr[i][0] === studentsArr[j][0]) {
        cat.push(studentsArr[i][0], studentsArr[i], studentsArr[j])
        studentsArr.splice(i, 1, cat)
        studentsArr.splice(j, 1)
      }
    }
    if (cat.length === 0) {
      cat.push(studentsArr[i][0], studentsArr[i])
      studentsArr.splice(i, 1, cat)
    }
  }
  return studentsArr
}

console.log(initialGroupingDescending(['Budi', 'Badu', 'Joni', 'Jono']));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(initialGroupingDescending(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
[
  [ 'Y', 'Yusuf' ],
  [ 'M', 'Mickey' ],
  [ 'G', 'Gong' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ]
]
*/

console.log(initialGroupingDescending(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
[
  [ 'S', 'Stone', 'Sticker' ],
  [ 'R', 'Rock', 'Rocker' ],
  [ 'B', 'Brick' ]
]
*/
