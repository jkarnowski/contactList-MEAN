var express = require('express');
var app = express()

var fs = require('fs')
var _ = require('lodash')
var users = []

fs.readFile('users.json', {encoding: 'utf8'}, function(error, data){
	if (error) throw error

		JSON.parse(data).forEach(function(user){
			user.name.full = _.startCase(user.name.first + ' ' + user.name.last)
			users.push(user)
		})
})

// when you get an HTTP GET, call this function
app.get('/', function(req, res){
	// res.send('ola world!')
	// what are these arguments?
	res.send(JSON.stringify(users, null, 2))
})

app.get('/yo', function(req, res){
	res.send('going to make a change')
})

var server = app.listen(3000, function(){
	console.log('Server is running at http://localhost:' + server.address().port)
})