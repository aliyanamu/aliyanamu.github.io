function loketPelayan(nomorUrut) {
  // Your codes here.
  if (nomorUrut >= 1 && nomorUrut <= 12) {
    if (nomorUrut % 3 == 1) {
      return 'Layanan Loket A';
    } else if (nomorUrut % 3 == 2) {
      return 'Layanan Loket B';
    } else {
      return 'Layanan Loket C';
    }
  } else {
    return 'Nomor antrian invalid'
  }
}

console.log(loketPelayan(1)); // Layanan Loket A
console.log(loketPelayan(5)); // Layanan Loket B
console.log(loketPelayan(6)); // Layanan Loket C
