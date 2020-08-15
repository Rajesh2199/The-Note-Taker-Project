const util = require("util");

const fs = require("fs");

const uuidv1 = require("uuid/v1");

const readFileAsync = util.promisify(fs.readFile); //

const writeFileAsync = util.promisify(fs.writeFile);

class Store {
// Read 
read(){
    return readFileAsync ("db/db.json", "utf8")
}
// Write

write(note){
    return writeFileAsync ("db/db.json", JSON.stringify(note)); // might need switch to db.json/
}
// Get notes
getNotes(){
    return this.read().then(function(notes){ // in the store fire the read function and 
        let parsenotes ; // if the read promise was carried thru, concatnate all notes and if there is an error there will be nothing.
        try{
            parsenotes = [].concat(JSON.parse(notes)); // data will be added to the array.
        } catch (err){
            parsenotes = []

        }  
        return parsenotes;
    })
}
// Add note

addNote(note) {
    const { title, text } = note;
    // Add a unique id to the note using uuid package
    const newNote = { title, text, id: uuidv1() };
    // Get all notes, add the new note, write all the updated notes, return the newNote
    return this.getNotes()
     .then((notes) => [...notes, newNote])
     .then((updatedNotes) => this.write(updatedNotes))
     .then(() => newNote);
   }



// Delete note

deleteNote(id){
    return this.getNotes() // get all the notes.
    .then((notes)=>notes.filter((note)=>note.id !== id )) // return all the notes except the one we are looking for the one we want to delete.
    .then((filteredNote)=>this.write(filteredNote)) // and rewrite using all the notes received from line 53. returns all the notes and leaves 1 note.
}

}

module. exports = new Store; //Each time Store is called a new store/note is created.








