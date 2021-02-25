var fs = require('fs')

fs.unlink('newfile.js',function(err){
    console.log("deleted")
})