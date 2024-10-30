import {useState} from "react";
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {

    const [title, setTitle] = useState('');

    const { createBook } = useBooksContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        createBook(title);
        setTitle('');
    }
    const handleInput = (e) => {
        const targetText = e.target.value;
        setTitle(targetText);
    }

    return <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="new_book_input">Title</label>
            <input id="new_book_input" className="input" value={title} onChange={handleInput} />
            <button className="button" type="submit">Submit</button>
        </form>
    </div>;
}

export default BookCreate;