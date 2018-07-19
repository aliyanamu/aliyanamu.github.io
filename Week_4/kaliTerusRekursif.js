function kaliTerusRekursif(angka) {
  let numStr = String(angka);
  if (numStr.length === 1) return angka

  let res = parseInt(numStr[0])
  for (let i = 1; i < numStr.length; i++) {
    res *= parseInt(numStr[i])
  }
  return kaliTerusRekursif(res)
}
