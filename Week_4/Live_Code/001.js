/*
PSEUDOCODE

STORE array in a function reverseOdd

DO increment loop for string from 0 with limit of array's length
  IF index of array mod 2 EQUALS TO 0
    SET variable empty string
    DO increment loop for char from 0 with limit of word's length
      SET char position to the reverse length
      SPLICE output to existing array
  ELSE
    SET as it is
  END IF

DISPLAY result of function
*/

function reverseOdd (arr) {

  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      var output = '';
      for (var j = 0; j <= arr[i].length; j++) {
        output += (arr[i].charAt(arr[i].length-j));
      }
      arr.splice(i,1,output)
    }
  }
  return arr
}
