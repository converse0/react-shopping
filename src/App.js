import React from 'react';
import axios from 'axios';
import orderBy from 'lodash/orderBy';

import { Card, Container } from 'semantic-ui-react';

import Menu from './components/Menu';
import BookCard from './components/BookCard';
import Filter from './components/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from './actions/books';
import { setFilter, setQuery } from './actions/filter';
import { addToCart } from './actions/cart';

function App() {
  const dispatch = useDispatch();
  const books = useSelector(({ books }) => books.items);
  const isReady = useSelector(({ books }) => books.isReady);
  const filterBy = useSelector(({ filter }) => filter.filterBy);
  const searchQuery = useSelector(({ filter }) => filter.searchQuery);
  const cartItems = useSelector(({ cart }) => cart.items);

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

  const onChangeInput = (string) => {
    dispatch(setQuery(string));
  };

  const totalPrice = () => {
    return cartItems.reduce((prev, obj) => obj.price + prev, 0);
  };

  const onAddToCart = (obj) => {
    dispatch(addToCart(obj));
  };

  const renderItem = () => {
    const filteredItems = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return filteredItems.map((book) => (
      <BookCard key={book.id} onAdd={onAddToCart} cartItems={cartItems} {...book} />
    ));
  };

  return (
    <Container>
      <Menu cartItems={cartItems} totalPrice={totalPrice} />
      <Filter
        filterBy={filterBy}
        changeFilterBy={changeFilterBy}
        searchQuery={searchQuery}
        onChangeInput={onChangeInput}
      />
      <Card.Group itemsPerRow={4}>
        {!isReady ? 'Загрузка.....' : books.length && renderItem()}
      </Card.Group>
    </Container>
  );
}

export default App;
