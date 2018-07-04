var shoutOut = function() {
  return 'Halo Function!';
}
console.log(shoutOut()); // Menampilkan "Halo Function!"
console.log('\t');

////////////////////////////////
var num1 = 5;
var num2 = 6;

function calculateMultiply(bil1,bil2) {
  return bil1 * bil2;
}
var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30
console.log('\t');

////////////////////////////////
var num1 = 5;var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence(nama,umur,alamat,hobi) {
  return 'Nama saya '+ nama + ', umur saya ' + umur + ' tahun, alamat saya di ' + alamat + ', dan saya punya hobby yaitu ' + hobi + '!';
}
var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
