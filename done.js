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
	user = new User(req.body);
	user.save(function(err){
		if (err) res.send(err);
		res.send('ok');
	});
});

// READ a record in the database
app.get('/user/:id', function(req,res){
	// find a record with an id
	User.findById(req.params.id, function(err,user){
		if(err) res.send(err);
		res.send(user);
	});
});

// UPDATE a record in the database
app.put('/user/:id', function(req,res){
	// find a single record and pass it update information
	User.findOneAndUpdate({'_id':req.params.id}, req.body, function(err){
		if (err) res.send(err);
		res.send('ok');
	});
});

// DELETE a record in the database
app.delete('/user/:id', function(req,res){
	// delete a record using its _id
	User.remove({'_id':req.params.id}, function(err){
		if (err) res.send(err);
		res.send('ok');
	});
});

// CREATE a Cat record
app.post('/cat', function(req,res){
	cat = new Cat(req.body);
	cat.save(function(err){
		if (err) res.send(err);
		res.send('ok');
	});
});

// READ a record and perform a Join .populate() method
app.get('/cats/:id', function(req,res){
	// find a populate a user record
	User.findById(req.params.id).populate('cats').exec(function(err,user){
		if(err) res.send(err);
		res.send(user);
	});
});

// READ / QUERY the database
app.get('/ages/:age', function(req,res){
	// replicate this query
	// db.find({ age : { $gt : age } },callback(err,result))
	User.find().where('age').gt(req.params.age).exec(function(err,users){
		if(err) res.send(err);
		res.send(users);
	});
});

app.listen(3000);