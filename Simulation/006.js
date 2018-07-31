function countDistanceLetterRecursive(sentence, letter) {
  if (sentence.length === 0) return 0
  var count = 0
  if (sentence[0] !== letter) {
    return 1 + countDistanceLetterRecursive(sentence.slice(1), letter)
  }
  return 1;
}

console.log(countDistanceLetterRecursive('12104123', '1')); // 1
console.log(countDistanceLetterRecursive('the quick brown fox', 'o')); // 13
console.log(countDistanceLetterRecursive('hahaha', 'a')); // 2
