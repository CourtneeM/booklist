require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

const bookshelfRoute = require('./routes/bookshelfRoute');
app.use('/api/bookshelf', bookshelfRoute);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});