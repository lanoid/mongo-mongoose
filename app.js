var express = require('express'),
	http = require('http'),
	app = express(),
	mongoose = require('mongoose'),
	User = require('./user-model'),
	Cat = require('./cat-model');

// expalin how it just connects
mongoose.connect('mongodb://localhost:27017/mongo-mongoose');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.configure(function(){
	app.use(express.json());
	app.use(express.urlencoded());
});

app.server = http.createServer(app);

/* CRUD Create, Read, Update, Delete Interface */

// CREATE a record in the database
app.post('/user', function(req,res){
	// use the save method on a user model

});

// READ a record in the database
app.get('/user/:id', function(req,res){
	// find a record with an id
	
});

// UPDATE a record in the database
app.put('/user/:id', function(req,res){
	// find a single record and pass it update information
	
});

// DELETE a record in the database
app.delete('/user/:id', function(req,res){
	// delete a record using its _id
	
});

// CREATE a Cat record
app.post('/cat', function(req,res){
	
});

// READ a record and perform a Join .populate() method
app.get('/cats/:id', function(req,res){
	// find a populate a user record
	
});

// READ / QUERY the database
app.get('/ages/:age', function(req,res){
	// replicate this query
	// db.find({ age : { $gt : age } },callback(err,result))
	
});

app.listen(3000);