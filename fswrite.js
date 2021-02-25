var fs = require('fs')

fs.writeFile('file.js','console.log("done")',function(err){
    console.log("data saved")
})