function csvToObject (keys, values) {
  if (keys.length === 0) return {}
  var res = {}
  keys = keys.split(',')
  values = values.split(',')
  for (var i = 0; i < keys.length; i++) {
    res[keys[i]] = values[i]
  }
  return res
}
