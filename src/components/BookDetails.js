const BookDetails = ({ book, dispatch }) => {
  return (
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: book.id })}>
      <div className="title">{book.title}</div>
      <div className="author">
        Written by <i>{book.author}</i>
      </div>
    </li>
  );
};

export default BookDetails;
