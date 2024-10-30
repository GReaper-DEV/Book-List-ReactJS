import BookShow from "./BookShow";

function BookList({books}) {

    const booksList = books.map((book) => {
        return <BookShow key={book.id} book={book}/>
    })
    return <div>
        <h3 style={{fontSize: '25px', fontWeight: 'bold', maxWidth: '1024px', margin: 'auto'}}>Reading List</h3>
        <div className="book-list">{booksList}</div>
    </div>;

}

export default BookList;