const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
  title: String,
  body: String
});

const noteModel = mongoose.model('Notes', NoteSchema);

module.exports = noteModel;
