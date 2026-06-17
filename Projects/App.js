const fs = require('fs');
const Note = require("./Notes");

// WRITE NEW NOTES
Note.AddNote("coding" , "C++ language");

//READ NOTES
Note.LoadNotes();

//DELETE NOTES
Note.DeleteNotes("gym");

//SHOW ALL NOTES
Note.ShowNotes();