function balikString (str) {
  var kata = str.split('');
  var neat = [];

  for (var a = 0; a < str.length; a++) {
    var end = kata.pop();
    neat += end;
  }
  return neat;
}

balikString('hello world!');
