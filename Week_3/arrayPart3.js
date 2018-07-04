var arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

function dataHandling2 () {
  arr.splice(4, 1, "Pria", "SMA Internasional Metro");
  arr.splice(1, 1, "Roman Alamsyah Elsharawy");
  arr.splice(2, 1, "Provinsi Bandar Lampung");
  console.log (arr);

  var cal = arr[3].split('/');
  var date = cal[0];
  var month = cal[1];
  var year = cal[2];

  switch (month) {
    case '01':
      console.log ('Januari');
      break;
    case '02':
      console.log ('Februari');
      break;
    case '03':
      console.log ('Maret');
      break;
    case '04':
      console.log ('April');
      break;
    case '05':
      console.log ('Mei');
      break;
    case '06':
      console.log ('Juni');
      break;
    case '07':
      console.log ('Juli');
      break;
    case '08':
      console.log ('Agustus');
      break;
    case '09':
      console.log ('September');
      break;
    case '10':
      console.log ('Oktober');
      break;
    case '11':
      console.log ('November');
      break;
    case '12':
      console.log ('Desember');
      break;
    default:
      console.log ('');
      break;
  }

  var twist = [];
  for (var i=0; i<=cal.length+1; i++) {
    var serve = cal.pop();
    twist.push(serve);
    twist.sort(function(a, b) { return b - a });
  }
  console.log (twist);

  console.log (date + '-' + month + '-' + year);

  var char15 = arr[1].slice(0,15);
  console.log(char15);
}

dataHandling2();
