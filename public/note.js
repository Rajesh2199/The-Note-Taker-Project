// Dependencies
var http = require("http");

var fs = require("fs");

var express = require('express');

var app = express ();

var PORT = 3000;

var path = require ('path'); // This modules deals with file paths.




// Basic routes that sends user the index and note.html pages.
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});








//app.get('/api/notes', function (req, res){
 // res.readFile('db.json')
//}










//app.get('/', function(req, res){
//res.sendfile (path.join(__dirname,  'index.html')); // res.send sends a response to the website/browser on the port 3000.
//});

//app.get('/', function(req, res){
  //res.sendfile (path.join(__dirname,  'notes.html')); // res.send sends a response to the website/browser on the port 3000.
  //});
  

// API Routes for returning saved notes.

// API Routes for saving notes.
// API Routes for deleting notes.






app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});








