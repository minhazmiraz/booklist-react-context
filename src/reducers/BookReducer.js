import { v1 as uuid } from "uuid";

const BookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return [
        ...state,
        { title: action.title, author: action.author, id: uuid() },
      ];
      break;

    case "REMOVE_BOOK":
      return state.filter((book) => book.id !== action.id);
      break;

    default:
      return state;
      break;
  }
};

export default BookReducer;
