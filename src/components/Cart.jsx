import React from 'react';
import { useDispatch } from 'react-redux';

import { removeFromCart } from '../actions/cart';

import { List, Image, Button } from 'semantic-ui-react';

function Cart({ title, id, image }) {
  const dispatch = useDispatch();

  return (
    <List selection divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          <Button onClick={() => dispatch(removeFromCart(id))} color="red">
            Удалить
          </Button>
        </List.Content>
        <Image avatar src={image} />
        <List.Content>{title}</List.Content>
      </List.Item>
    </List>
  );
}

export default Cart;
