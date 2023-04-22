const BookCard = ({book, dispatch}) => {
  const { title, author } = book;

  return (
    <div className="book-container" onClick={() => dispatch({type: 'DELETE_BOOK', bookId: book.id})}>
      <p>{title}</p>
      <p>{author}</p>
    </div>
  );
}

export default BookCard;