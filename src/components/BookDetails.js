const BookDetails = ({ book, removeBook }) => {
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author">
        Written by <i>{book.author}</i>
      </div>
    </li>
  );
};

export default BookDetails;
