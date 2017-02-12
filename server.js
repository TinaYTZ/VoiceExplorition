// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: single, undef: true, unused: true, strict: true, trailing: true */
/* global socket:true*/
'use strict';
var express=require('express');
var app = express();
var server= require('http').createServer(app);



server.listen(process.env.PORT || 3000);
console.log('server running...');
app.use(express.static('./'));
app.get('/', function(req,res){
    res.sendFile(__dirname+'/public/index.html');
});

app.get('/game', function(req,res){
    res.sendFile(__dirname+'/public/game.html');
});
