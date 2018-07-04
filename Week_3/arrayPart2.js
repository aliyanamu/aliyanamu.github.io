var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

// console.log(input);
var id = [], name = [], home = [], bd = [], hobby = [];

function dataHandling () {
  for (var a = 0; a < input.length; a++) {
    id = input[a][0].split();
    name = input[a][1].split();
    home = input[a][2].split();
    bd = input[a][3].split();
    hobby = input[a][4].split();
    console.log ('Nomor Id: ' + id + '\nNama Lengkap: ' + name + '\nTTL: ' + home + ', ' + bd + '\nHobi: ' + hobby + '\n');
  }
}

dataHandling();
