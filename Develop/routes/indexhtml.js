const express = require('express');

const notesRouter = require('./notes');

const ind = express();

ind.use('/notes', notesRouter);

module.exports = ind;