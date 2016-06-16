var express = require('express');
var app = express()

// when you get an HTTP GET, call this function
app.get('/', function(req, res){
	res.send('ola world!')
})

app.get('/yo', function(req, res){
	res.send('going to make a change')
})

var server = app.listen(3000, function(){
	console.log('Server running at http://localhost:' + server.address().port)
})