import BookCard from "./BookCard";

const Bookshelf = ({bookshelf, dispatch}) => {
  return (
    <div className="bookshelf-container">
      <h1>BookList</h1>

      { bookshelf.length > 0 && bookshelf.map((book) => (
        <BookCard key={book.id} book={book} dispatch={dispatch} />
      ))

      }
    </div>
  );
}

export default Bookshelf;