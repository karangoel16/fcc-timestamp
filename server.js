var express= require('express');
var bodyparser=require('body-parser');
var app=express();
var api = require('./api/api.js');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.route('/')
	.get(function(req,res,next)
	{
		res.sendFile(process.cwd() +'/views/index.html');
	});
api(app);
var port = process.env.PORT ||3000;
app.route('/index/:id')
	.get(function(req,res,next)
	{
		console.log("*");
		res.send('Hello World'+req.params.id);
	});

app.listen(port,function(){
	console.log('example listening on port:'+port);
})