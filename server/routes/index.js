const express = require('express');
const noteInstance = require('../schema');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const notes = await noteInstance.find();
    res.send(notes);
  } catch (e) {
    res.send(e);
  }
});

router.post('/', async (req, res) => {
  const note = new noteInstance(req.body);
  try {
    await note.save();
    res.send(note.toJSON());
  } catch (e) {
    res.send(e);
  }
});

router.put('/', async (req, res) => {
  const id = req.query.id;
  const { title, body } = req.body;
  try {
    const updatedNote = await noteInstance.findByIdAndUpdate(id, { title: title, body: body });
    res.send(updatedNote);
  } catch (e) {
    res.send(e);
  }
});

router.delete('/', async (req, res) => {
  const id = req.query.id;
  try {
    await noteInstance.findByIdAndDelete(id);
    res.send({ message: 'Note deleted successfully' });
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
