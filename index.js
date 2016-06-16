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
	var buffer = ''

	users.forEach(function(user){
		buffer += '<a href="/' + user.username + ' ">' + user.name.full + '</a><br>'
	})
	res.send(buffer)
})

app.get(/big.*/, function(req, res, next){
	console.log('BIG USER')
	// this route handler is done, go to the next route
	next()
})


app.get('/:username', function(req, res){
	var username = req.params.username
	res.send(username)
})


var server = app.listen(3000, function(){
	console.log('Server is running at http://localhost:' + server.address().port)
})