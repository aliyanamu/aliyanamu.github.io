function graduates (students) {
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
  for (let i = 0; i< singleClass.length; i++) {
    var allStd = []
    for (let j = 0; j< students.length; j++) {
      if (singleClass[i] === students[j].class && students[j].score > 75) {
        delete students[j].class
        allStd.push(students[j])
      }
    objClasses[singleClass[i]] = allStd
    }
  }
  if (students.length === 0) return {}
  return objClasses
}
