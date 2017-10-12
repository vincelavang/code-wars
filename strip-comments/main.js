function solution(input, markers) {
  var lines = input.split("\n")
  for (var i = 0; i < lines.length; ++i) {
    for (var j = 0; j < markers.length; ++j) {
      lines[i] = lines[i].split(markers[j])[0].trim()
    }
  }
  return lines.join("\n")
}
