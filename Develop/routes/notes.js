const nt = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/utils');

nt.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

nt.post('/', (req, res) => {
    
    const { noteTitle, noteText } = req.body;
  
    if (noteTitle && noteText) {
      
      const newNote = {
        noteTitle,
        noteText,
        note_id: uuidv4(),
      };
  
      readAndAppend(newNote, './db/db.json');
  
      const response = {
        status: 'success',
        body: newNote,
      };
  
      res.json(response);
    } else {
      res.json('Error in posting note');
    }
  });

  module.exports = nt;