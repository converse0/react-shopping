import React from 'react';
import axios from 'axios';

import { Card, Container } from 'semantic-ui-react';

import Menu from './components/Menu';
import BookCard from './components/BookCard';

import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from './actions/books';

function App() {
  const dispatch = useDispatch();
  const books = useSelector(({ books }) => books.items);
  const isReady = useSelector(({ books }) => books.isReady);

  React.useEffect(() => {
    axios.get('/books.json').then(({ data }) => dispatch(setBooks(data)));
  }, []);

  return (
    <Container>
      <Menu />
      <Card.Group itemsPerRow={4}>
        {!isReady ? 'Загрузка.....' : books.map((book) => <BookCard key={book.id} {...book} />)}
      </Card.Group>
    </Container>
  );
}

export default App;
