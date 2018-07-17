//TEST CASE 1
var data1 = [
  [
    [1000, 1500, 2000, 1500, 2500, 3000, 3000, 2500, 1000, 2000, 1000, 4000], //Income
    [500, 700, 700, 700, 1000, 1300, 1300, 1000, 500, 1000, 500, 2200] //Outcome
  ],
  [
    [1000, 2500, 2000, 2000, 1500, 2000, 1000, 1000, 2000, 2500, 2000, 3000], //Income
    [700, 1000, 700, 1000, 700, 1000, 500, 500, 500, 1000, 1200, 1700] //Outcome
  ],
  [
    [2000, 1500, 1000, 1000, 1500, 2000, 2000, 2500, 2000, 2500, 2000, 4000], //Income
    [500, 600, 500, 700, 1000, 1000, 1000, 1500, 1000, 1500, 1000, 2200] //Outcome
  ]
]

function printBranch(branches) {
  var month = ['jan', 'feb', 'march', 'april', 'mei', 'jun', 'jul', 'augst', 'sept', 'oct', 'nov', 'dec']
  var arr = data1; //ganti data1 dengan data2

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      if (j % 2 == 0) {
        var income = []
        for (var k = 0; k < arr[i][j].length; k++) {
          var inC = arr[i][j][k]
        }
        var res = '| Branch-' + (j+1) + ' IN:' + inC
        console.log(res)
      } else {
        var outcome = []
        for (var k = 0; k < arr[i][j].length; k++) {
          var outC = arr[i][j][k]
        }
      }
    }
  }
  return ''
}
