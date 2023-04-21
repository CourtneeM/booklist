const bookshelf = (req, res) => {
  res.status(200).send('Get bookshelf');
}

const createBook = (req, res) => {
  res.status(200).send('Create book');
}

const getBook = (req, res) => {
  res.status(200).send('Get book');
}

const deleteBook = (req, res) => {
  res.status(200).send('Delete book');
}

module.exports = { bookshelf, createBook, getBook, deleteBook }