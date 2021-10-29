import React from 'react';
import axios from 'axios';
import orderBy from 'lodash/orderBy';

import { Card, Container } from 'semantic-ui-react';

import Menu from './components/Menu';
import BookCard from './components/BookCard';
import Filter from './components/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from './actions/books';
import { setFilter } from './actions/filter';

function App() {
  const dispatch = useDispatch();
  const books = useSelector(({ books }) => books.items);
  const isReady = useSelector(({ books }) => books.isReady);
  const filterBy = useSelector(({ books }) => books.filterBy);

  React.useEffect(() => {
    axios.get('/books.json').then(({ data }) => dispatch(setBooks(data)));
  }, []);

  const sortBy = (filter) => {
    switch (filter) {
      case 'all':
        return orderBy(books, 'id', 'asc');
      case 'price_high':
        return orderBy(books, 'price', 'desc');
      case 'price_low':
        return orderBy(books, 'price', 'asc');
      case 'author':
        return orderBy(books, 'author', 'asc');
      case 'popular':
        return orderBy(books, 'rating', 'asc');
      default:
        return books;
    }
  };

  const changeFilterBy = (filter) => {
    dispatch(setBooks(sortBy(filter)));
    dispatch(setFilter(filter));
  };

  return (
    <Container>
      <Menu />
      <Filter filterBy={filterBy} changeFilterBy={changeFilterBy} />
      <Card.Group itemsPerRow={4}>
        {!isReady ? 'Загрузка.....' : books.map((book) => <BookCard key={book.id} {...book} />)}
      </Card.Group>
    </Container>
  );
}

export default App;
