const fs = require("fs");

const Filepath = 'C:/Node.js/Projects/db.json';

//Read Notes Function
function LoadNotes() {
    const data = fs.readFileSync(Filepath, 'utf-8');
    return JSON.parse(data); // Iske Wajah Se ya Function array return kar raha hai
}

//Save Notes Function
function WriteNotes(Notes) {
    fs.writeFileSync(Filepath, JSON.stringify(Notes, null, 2));
}

// Write New Notes Function
function AddNote(title, content) {
    const Notes = LoadNotes(); // Yaha  function Nhi , array mil Raha hai 

    const NewNote = {
        title: title,
        content: content,
    }

    Notes.push(NewNote);
    WriteNotes(Notes);  // Write Function Ya Call Ho Raha Hai

    console.log("Note Add SuccessFully");
}

//Delete Notes Function
function DeleteNotes(title) {
    const Notes = LoadNotes(); // Yaha  function Nhi , array mil Raha hai 

    const filtered = Notes.filter(notes => notes.title !== title);

    WriteNotes(filtered); // Write Function Ya Call Ho Raha Hai

    console.log("Note Delete SuccessFully");
}

// Show Notes Function
function ShowNotes() {
    const Notes = LoadNotes(); // Yaha  function Nhi , array mil Raha hai 

    console.log("All Notes");
    Notes.forEach((note, index) => {
        console.log(`${index + 1} - ${note.title} : ${note.content} `);
    });
}
module.exports = {
    AddNote,  // Write New Notes Function Export
    LoadNotes,   // Read Notes Function Export
    DeleteNotes, // Delete Notes Function Export
    ShowNotes   // Show Notes Function Export
}