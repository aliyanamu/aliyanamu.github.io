function sorting(arrNumber) {
  for (let i = 0; i < arrNumber.length; i++) {
    for (let j = i+1; j < arrNumber.length; j++) {
      if (arrNumber[i] > arrNumber[j]) {
        let tmp = arrNumber[i]
        arrNumber[i] = arrNumber[j]
        arrNumber[j] = tmp
      }
    }
  }
  return arrNumber
}

function getTotal(arrNumber) {
  let count = 0, last = arrNumber.length-1
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] === arrNumber[last]) {
      count++
    }
  }
  return (arrNumber.length !== 0) ? 'angka paling besar adalah ' + arrNumber[last] +' dan jumlah kemunculan sebanyak ' + count + ' kali' : ''
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}
