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

// The following code will create notes.

app.post('/api/notes', function(req, res){
  var note = {
    text:req.body.text,
  };
}),


// API Routes for saving notes.
// API Routes for returning saved notes.
// API Routes for deleting notes.

// Need to create a unique ID for each note.







app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});








