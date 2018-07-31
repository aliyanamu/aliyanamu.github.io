function trainSeating (penumpang) {
    var obj = {}
    for (let i=0; i<penumpang.length; i++) {
      if (obj[penumpang[i].gerbong] === undefined) {
        obj[penumpang[i].gerbong] = []
      }
    }
    var arr = Object.keys(obj)
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<penumpang.length; j++) {
          if (arr[i] === penumpang[j].gerbong) {
            delete penumpang[j].gerbong
            obj[arr[i]].push(penumpang[j])
          }
        }
    } 
    return obj
  }


  console.log(trainSeating([
    { nama: "Awtian", gerbong: "VVIP", seat: 'A1' },
    { nama: "Klonoa", gerbong: "VIP", seat: 'V1' },
    { nama: "Azizy", gerbong: "VVIP", seat: 'A2' },
    { nama: "Crash", gerbong: "Regular", seat: 'R1' },
    { nama: "Sena", gerbong: "Regular", seat: 'R3' },
    { nama: "Retsu", gerbong: "VIP", seat: 'V2' },
    { nama: "Hiruma", gerbong: "VVIP", seat: 'A666' },
    { nama: "Tsubasa", gerbong: "VIP", seat: 'V6' }
  ]));
  /*
  Output :
  {
    VVIP:
     [ { nama: 'Awtian', seat: 'A1' },
       { nama: 'Azizy', seat: 'A2' },
       { nama: 'Hiruma', seat: 'A666' } ],
    VIP:
     [ { nama: 'Klonoa', seat: 'V1' },
       { nama: 'Retsu', seat: 'V2' },
       { nama: 'Tsubasa', seat: 'V6' } ],
    Regular:
      [ { nama: 'Crash', seat: 'R1' },
        { nama: 'Sena', seat: 'R3' } ]
  }
  */
