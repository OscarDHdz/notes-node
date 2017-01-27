console.log('Starting notes.js');

const fs = require('fs');


var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(notesString);
  }
  catch ( e ) {
    return [];
  }
};
var saveNotes = ( notes ) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = ( title, body ) => {
  console.log('Creating Note', title );

  var notes = fetchNotes();
  var note = {
    title,
    body
  };



  // IF title already exists, it Returns true
  // var duplicateNotes = notes.filter( function (note) {
  //   return note.title === title;
  // });
  // For EC6
  var duplicateNotes = notes.filter((note) => note.title === title );
  debugger;
  if ( duplicateNotes.length === 0 ) {
    notes.push( note );
    saveNotes( notes );
      return note;
  }
  else {
  }




};
var removeNote = ( title ) => {
  var notes = fetchNotes();
  // Save only { note.title !== title }
  var filteredNotes = notes.filter( ( note ) => note.title !== title );
  saveNotes( filteredNotes );
  return filteredNotes.length !== notes.length;
}

var getAll = ( ) => {
  return fetchNotes();
};
var getNote = ( title ) => {
  var notes = fetchNotes();
  var filteredNote = notes.filter( ( note ) => note.title === title )[0];



  return filteredNote;
};
var logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}



module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
