const express = require('express');
const router = express.Router();

const { bookshelf, createBook, getBook, deleteBook } = require('../controllers/bookshelfController');

router.get('/', bookshelf);
router.post('/', createBook);
router.get('/:id', getBook);
router.delete('/:id', deleteBook);

module.exports = router;