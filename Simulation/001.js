/*PSEUDOCODE

STORE a number as function's parameter

CREATE a function to check if number has mod result EQULAS TO 0
STORE an empty string variable 'str'

DO LOOP starts from 2 until before the number
  IF number mod iteration count EQUALS TO 0
    ADD iteration count to 'str'
  END IF
END LOOP

STORE an empty array variable 'arr'

DO LOOP starts from 2 until before the number
  SET variable 'prm' as the result of prime function for iteration count j
    IF length of the result of 'prm' EQUALS TO 0
      PUSH the result in the 'arr' array
    END IF
END LOOP

DISPLAY the function result
*/
function getPrime(num) {
  function modulo(angka) {
    var str = ''
    for (let i=2; i<angka; i++) {
      if (angka % i === 0) {
        str += i
      }
    }
    return str
  }
  var arr = []
  for (let j=2; j<=num; j++) {
    var prm = modulo(j)
    if (prm.length === 0) {
      arr.push(j)
    }
  }
  return arr
}

console.log(getPrime(10)); // [ 2, 3, 5, 7 ]
console.log(getPrime(23)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
console.log(getPrime(44)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
console.log(getPrime(1)); // []
console.log(getPrime(0)); // []
