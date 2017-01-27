console.log('Starting app.js');
// Modules
const fs = require('fs');
const _  = require('lodash');
const yargs = require('yargs');
// My Modules
const notes = require('./notes.js');


var title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}
var body  = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}
const argv = yargs
  .command('add', 'Add a new note', {
    title,
    body
  })
  .command('list', 'List existing notes')
  .command('read', 'Read a note', {
    title
  })
  .command('remove', 'Remove a note', {
    title
  })
  .help()
  .argv;
console.log('Yargs:', argv );


var command = argv._[0];

switch (command) {
  case 'add':
    var note = notes.addNote( argv.title, argv.body );
    if ( note  ) {
      console.log('Note created');
      notes.logNote( note );
    }
    else {
      console.log('Note title taken');
    }
    break;
  case 'remove':
    var message = notes.removeNote( argv.title ) ? 'Removed' : 'Note not found';
    console.log(message);
    break;
  case 'read':
    var note = notes.getNote( argv.title );
    if ( note ) {
      notes.logNote( note );
    }
    else {
      console.log(`Note '${argv.title}' not found`);
    }
    break;
  case 'list':
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note, index) => {
      console.log(`Note -${index + 1 }-`);
      notes.logNote(note);
      console.log('------');
    });
    break;
  default:
  console.log('Comand not recognized');

}
