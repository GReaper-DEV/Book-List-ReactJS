import {createContext, useCallback, useState} from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}) {

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books/");
        setBooks(response.data);
    }
    const stableFetchBooks = useCallback(
        fetchBooks,
        []
    );

    const createBook = async (title) => {
        const response = await axios
            .post("http://localhost:3001/books/",
                {
                    title: title
                });
        setBooks([...books, response.data]);
    }
    const deleteBookById = async (id) => {
        await axios.delete("http://localhost:3001/books/"+id);

        const updatedBooks = books.filter((book) => {
            return book.id !==id;
        })

        setBooks(updatedBooks);
    }
    const updateBookById = async (id, newTitle) => {
        const response = await axios
            .put("http://localhost:3001/books/"+id,
                {
                    title: newTitle
                });
        const updatedBooks = books.map((book)=> {
            if (book.id === id){
                //secure that when more than one user updates the data the same time,
                //we get all the updated data and also the field we updated.
                return {...book, ...response.data};
            }

            return book;
        });

        setBooks(updatedBooks);

    }

    const share = {
        books,
        fetchBooks,
        createBook,
        deleteBookById,
        updateBookById,
        stableFetchBooks
    }

    return <BooksContext.Provider value={share}>
        {children}
    </BooksContext.Provider>


}
export {Provider};
export default BooksContext;