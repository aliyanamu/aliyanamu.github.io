function totalDigitRekursif(angka) {
  let numString = String(angka)
  let firstNum = numString.charAt(0)
  let leftNum = numString.substr(1)
  if (numString.length === 0) return 0
  return parseInt(firstNum) + totalDigitRekursif(leftNum)
}
