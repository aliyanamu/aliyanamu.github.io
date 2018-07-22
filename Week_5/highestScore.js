function highestScore (students) {
  var classes = [], objClasses = {}
  for (let i = 0; i < students.length; i++) {
    classes.push(students[i].class)
  }
  classes.sort()
  var singleClass = [], single = classes[0]
  singleClass.push(single)
  for (let i = 0; i< classes.length; i++) {
    if (classes[i] !== single)
      singleClass.push(classes[i])
      single = classes[i]
  }
  for (let i = 0; i < singleClass.length; i++) {
    var highScore = 0, highName = ''
    for (let j = 0; j< students.length; j++) {
      if (students[j].class === singleClass[i]) {
        if (students[j].score > highScore) {
          highScore = students[j].score
          highName = students[j].name
        }
      }
    }
    objClasses[singleClass[i]] = {name: highName, score: highScore}
  }
  if (students.length === 0) return {}
  return objClasses
}
