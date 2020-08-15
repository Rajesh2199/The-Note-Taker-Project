const router = require("express").Router();
const store = require("../db/store");

router.get ("/notes", function(req,res){
    store.getNotes()
    .then(function(notes){
        res.json(notes) // line 5 6 and 7 - making a express a route that uses functions in store to access database.
    }).catch((err)=>res.status(500).json(err))
})


router.post ("/notes", function(req,res){
    store.addNote(req.body)
    .then(function(note){
        res.json(note) 
    }).catch((err)=>res.status(500).json(err))
})


router.delete ("/notes/:id", function(req,res){
    store.deleteNote(req.params.id) // grabbing the request id .
    .then(function(){
        res.json({ok:true}) 
    }).catch((err)=>res.status(500).json(err))
})


module.exports = router;