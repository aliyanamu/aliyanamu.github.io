function changeMe(arr) {
  for (var i = 0; i < arr.length; i++) {
    var person = (i+1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ':'
    var objPerson = {firstName: arr[i][0], lastName: arr[i][1], gender: arr[i][2], age: (2018-arr[i][3]) || 'Invalid Birth Year'}
    console.log(person)
    console.log(objPerson)
  }
  return ''
}
