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
// Code below reads the db.json file for any changes.
  fs.readFile('db.json', function (err, data){
    if (err) {
      return console.log (err);
    }
    // Code below changes db.json data into JS objects by parsing
    var newNote = JSON.parse(data);

    newNote.push (req.body);
    // Code below writes into the db.json file by Stringfiying the newNote object.
    fs.writeFile('db.json', JSON.stringify(newNote), function(err,res){
      if (err) {
        return  console.log (err);

      }
      res.JSON(newNote);
    })
  })
  
});


// API Routes for saving notes.
// API Routes for returning saved notes.
// API Routes for deleting notes.

// Need to create a unique ID for each note.
// Anything that is being stored shold have auto id 
// call that id and 







app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});








