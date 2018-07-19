function changeVocals (str) {
  let word = str.split('');
  let kamus = 'aeiouAEIOU', next = 'bfjpvBFJPV';
  for (let i = 0; i<str.length; i++) {
    for (let j = 0; j<kamus.length; j++) {
      (word[i] === kamus[j]) ? word[i] = next[j] : word[i]
    }
  }
  return word.join('');
}

function reverseWord (str) {
  let reverse = '';
  for (let i = str.length-1; i >= 0; i--) {
    reverse += str[i]
  }
  return reverse
}

function setLowerUpperCase (str) {
  let changeCase = ''
  for (let i = 0; i < str.length; i++) {
    (str[i] === str[i].toLowerCase()) ? changeCase += str[i].toUpperCase() : changeCase += str[i].toLowerCase()
  }
  return changeCase
}

function removeSpaces (str) {
  return str.split(' ').join('')
}

function passwordGenerator (name) {
  if (name.length < 5) { return 'Minimal karakter yang diinputkan adalah 5 karakter'}
  var stepOne = changeVocals(name)
  var stepTwo = reverseWord(stepOne)
  var stepThree = setLowerUpperCase(stepTwo)
  var stepFour = removeSpaces(stepThree)
  return stepFour
}
