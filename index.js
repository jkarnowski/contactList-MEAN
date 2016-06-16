var express = require('express');
var app = express()

// when you get an HTTP GET, call this function
app.get('/', function(req, res){
	res.send('hello world!')
})

app.listen(3000)