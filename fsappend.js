var fs = require('fs')

fs.appendFile('module.js','console.log("done")',function(err){
    console.log("data saved")
})