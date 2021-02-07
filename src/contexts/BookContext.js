import { createContext, useState } from "react";
import { v1 as uuid } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "name of the wind", author: "patrick rothfuss", id: uuid() },
    { title: "the final empire", author: "brandon sanderson", id: uuid() },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: uuid() }]);
  };

  const removeBooks = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBooks }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
