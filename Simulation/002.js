/* PSEUDOCODE

STORE two array of number as function's parameter
STORE an empty array 'arr'

DO LOOP as long as one of the array's length
  MULTIPLY both array's value in the same index
  SET the 'multi' variable as the multiplication result
    IF the result is number
      PUSH the result in the 'arr' array
    ELSE
      PUSH 0 in the 'arr' array
    END IF
END LOOP

STORE a number variable 'sum' with 1

DO LOOP of 'arr' to find odd Number
  IF array's value in i index mod 2 EQUALS TO 1
    CALCULATE 'sum' = 'sum' * array's value
  END IF
END LOOP

DISPLAY the function result
*/

function multiplyTheOdds(arrOperand1, arrOperand2) {
  var arr = []
  for (let j=0; j<arrOperand1.length; j++) {
    var multi = arrOperand1[j]*arrOperand2[j]
    if(multi === Number(multi)) arr.push(multi)
    else arr.push(0)
  }
  var sum = 1
  for (let i=0; i<arr.length; i++) {
    if (arr[i] % 2 === 1) {
      sum *= arr[i]
    }
  }
  return sum
}

console.log(multiplyTheOdds([3, 5, 2], [7, 5, 4])); //525
console.log(multiplyTheOdds([1, 2], [1])); //1
console.log(multiplyTheOdds([1, 2, 3, 2], [3, 5])); //3
console.log(multiplyTheOdds([7, 5, 8, 3], [9, 1, 2, 5, 9, 2])); //4725
console.log(multiplyTheOdds([], [])); //0
