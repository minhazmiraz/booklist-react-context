import { createContext, useEffect, useReducer } from "react";
import BookReducer from "../reducers/BookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const books = localStorage.getItem("books");
    return books ? JSON.parse(books) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
