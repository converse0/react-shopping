import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const BookCard = ({ id, title, author, image, price, onAdd, cartItems }) => {
  const handleCartAdd = () => {
    onAdd({ id, title, author, image, price });
  };

  const addedCount = cartItems.reduce((count, obj) => count + (obj.id === id ? 1 : 0), 0);
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a href="/#">
          <Icon name="rub" />
          {price}
        </a>
      </Card.Content>
      <Button onClick={handleCartAdd}>
        Добавить в корзину {addedCount ? `(${addedCount})` : null}
      </Button>
    </Card>
  );
};

export default BookCard;
