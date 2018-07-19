function makanTerusRekursif(waktu) {
  if (waktu < 1) { return 0 }
  return 1 + makanTerusRekursif(waktu-15)
}
