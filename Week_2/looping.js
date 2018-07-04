var num = 20, bil = 20;
var counter = 2, fill = 2;

console.log ('--WHILE--\n');
console.log ('LOOPING PERTAMA\n');
while (counter <= num) {
  console.log (counter + '- I love coding');
  counter+=2;
}

console.log ('\nLOOPING KEDUA\n');
while (bil >= fill) {
  console.log (bil + '- I will become fullstack developer');
  bil-=2;
}

///////////////////////////////////////////

console.log ('\n--FOR--');
console.log ('\nLOOPING PERTAMA\n');
for (counter = 1; counter <= num; counter++) {
  console.log (counter + '- I love coding');
}

console.log ('\nLOOPING KEDUA\n');
for (bil = 20; bil >= fill - 1; bil--) {
  console.log (bil + '- I love coding');
}

///////////////////////////////////////////

var limit = 100;

console.log ('--ANGKA GANJIL DAN GENAP--');
console.log ('\nLOOPING COUNTER - 1\n');
for (a = 1; a <= limit; a++) {
  if (a%2==0) {
    console.log ('GENAP');
  } else {
    console.log ('GANJIL');
  }
}

console.log ('\nLOOPING COUNTER - 2\n');
for (a = 1; a <= limit; a++) {
  if (a%3==0) {
    console.log (a + ' kelipatan 3');
  } else {
    console.log ('');
  }
  a++;
}

console.log ('\nLOOPING COUNTER - 3\n');
for (a = 1; a <= limit; a++) {
  if (a%6==0) {
    console.log (a + ' kelipatan 6');
  } else {
    console.log ('');
  }
  a+=4;
}

console.log ('\nLOOPING COUNTER - 4\n');
for (a = 1; a <= limit; a++) {
  if (a%10==0) {
    console.log (a + ' kelipatan 10');
  } else {
    console.log ('');
  }
  a+=8;
}
