var fs = require('fs')

fs.readFile('file.js','utf8',function(err,data){
    console.log(data)
})