/*
PSEUDOCODE
STORE variable array of name and title as two function parameters

DO increment loop to check the given title
  IF the given title's first character is comma
    SUM/CONCAT together string of the name array and the title
    SET output as the result of the sum
  ELSE
    SUM/CONCAT together string of the title with space between and the name array
  END IF

DISPLAY result of function
*/

function titleGivers (targetArr, title) {
  for (var i = 0; i < targetArr.length; i++) {
    if (title[0] === ',') targetArr[i] = targetArr[i] + title
    else targetArr[i] = title + ' ' + targetArr[i]
  }
  return targetArr
} 
