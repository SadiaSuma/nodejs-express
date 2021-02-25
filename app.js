var http = require('http')


http.createServer(function(req,res){
    res.write("hey!!! this is suma")
    res.end()
}).listen(8080)