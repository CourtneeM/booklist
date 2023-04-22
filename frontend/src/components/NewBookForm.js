import { useState } from 'react';

const NewBookForm = ({dispatch}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = () => {
    dispatch({
      type: 'ADD_BOOK',
      book: {title, author, id: crypto.randomUUID()}
    });
  }

  return (
    <div className="new-book-container">
      <h2>Add a New Book</h2>
      
      <form>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Author</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </form>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default NewBookForm;