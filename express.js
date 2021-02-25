const express = require('express');
const app = express();

app.get('/suma', function(req,res){
    res.send('welcome back')

});

app.get('/', function(req,res){
    res.send('Hello world')

});
app.listen(9000, function(req,res){
    console.log('running,,,')
});
