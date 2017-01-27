// var obj = {
//   name: 'Oscar'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof(stringObj));
// console.log(stringObj);


const fs = require('fs');

var originalNote = {
  title: 'Title',
  body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var variableNote = JSON.parse(noteString);

console.log(typeof variableNote);
console.log(variableNote);
