import {useState} from "react";
import useBooksContext from '../hooks/use-books-context';

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title);

    const {updateBookById} = useBooksContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        updateBookById(book.id, title);
    }

    const handleInput = (e) => {
        setTitle(e.target.value);
    }

    return <form className="book-edit" onSubmit={handleSubmit}>
                <label htmlFor="book_name">Title</label>
                <input className="input" type="text" value={title} onChange={handleInput} />
            <button className="button is-primary">Save</button>
        </form>;
}

export default BookEdit;