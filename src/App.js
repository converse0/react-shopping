import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from './actions/books';

function App() {
  const dispatch = useDispatch();
  const books = useSelector(({ books }) => books.books);

  const addBooks = () => {
    const obj = {
      id: 0,
      title: 'Simple book',
    };
    dispatch(setBooks([obj]));
  };

  return (
    <div>
      <h1>{books[0].title}</h1>
      <button onClick={addBooks}>Button</button>
    </div>
  );
}

export default App;
