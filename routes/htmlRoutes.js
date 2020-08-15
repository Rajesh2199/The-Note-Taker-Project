
const path = require("path");
const router = require("express").Router();



// Basic routes that sends user the index.html and note.html pages.

router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });
  
  router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });


  module.exports = router ;  