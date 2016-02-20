var fs = require('fs')
var file = process.argv[2] 


function finishedReading(error, contents) {
  if (error) return console.error(error)
  var lines = contents.split('\n').length - 1
  console.log(lines) 
}

fs.readFile(file,"utf8", finishedReading)