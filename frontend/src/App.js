import { useEffect, useReducer } from "react";

// Components
import Bookshelf from "./components/Bookshelf";
import NewBookForm from "./components/NewBookForm";

function App() {
  const bookshelfReducer = (state, action) => {
    switch (action.type) {
      case 'GET_BOOKSHELF':
        if (localStorage.getItem('book')) {
          return JSON.parse(localStorage.getItem('book'));
        }
        return state;
      case 'ADD_BOOK':
        localStorage.setItem('book', JSON.stringify([...state, action.book]))
        return [...state, action.book];
      case 'DELETE_BOOK':
        localStorage.setItem('book', JSON.stringify([...state].filter((book) => book.id !== action.bookId)));
        return [...state].filter((book) => book.id !== action.bookId);
      default:
        return state;
    }
  }

  const [bookshelf, dispatch] = useReducer(bookshelfReducer, []);

  useEffect(() => {
    dispatch({type: 'GET_BOOKSHELF'});
  }, [])

  return (
    <div className="App">
      <Bookshelf bookshelf={bookshelf} dispatch={dispatch} />
      <NewBookForm dispatch={dispatch} />
    </div>
  );
}

export default App;
