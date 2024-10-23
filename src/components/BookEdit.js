import {useState} from "react";

function BookEdit({book, onSubmit}) {

    const [title, setTitle] = useState(book.title);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(book.id, title);
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