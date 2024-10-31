import { useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import useBooksContext from './hooks/use-books-context';


function App() {
    const { books, stableFetchBooks } = useBooksContext();

    useEffect(() => {
        stableFetchBooks();
    }, [stableFetchBooks]);

    return (
        <div className="app">
            <BookList books={books}/>
            <hr/>
            <BookCreate/>
        </div>
    );
}

export default App;