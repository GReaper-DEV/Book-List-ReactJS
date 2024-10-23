import {useState} from "react";

function BookCreate({onCreate}) {

    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(title);
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