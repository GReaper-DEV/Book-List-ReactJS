import BookEdit from "./BookEdit";
import {useState} from "react";
import useBooksContext from "../hooks/use-books-context";

function BookShow({book}) {
    const [showEdit, setShowEdit] = useState(false);

    const { deleteBookById } = useBooksContext();

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    }

    const handleSubmit = () => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>

    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}/>
    }

    return <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/150/200`} alt="book"/>
        {content}
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>
                Edit
            </button>
            <button className="delete" onClick={handleDeleteClick}>
                Delete
            </button>
        </div>
    </div>;
}

export default BookShow;