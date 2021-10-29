import React from 'react';
import { Input, Menu } from 'semantic-ui-react';

const Filter = ({ filterBy, changeFilterBy }) => {
  const handleItemClick = (e, { name }) => changeFilterBy(name);

  return (
    <Menu secondary>
      <Menu.Item name="all" active={filterBy === 'all'} onClick={handleItemClick}>
        Все
      </Menu.Item>
      <Menu.Item name="popular" active={filterBy === 'popular'} onClick={handleItemClick}>
        Популярные
      </Menu.Item>
      <Menu.Item name="price_high" active={filterBy === 'price_high'} onClick={handleItemClick}>
        Цена(дорогие)
      </Menu.Item>
      <Menu.Item name="price_low" active={filterBy === 'price_low'} onClick={handleItemClick}>
        Цена(дешевые)
      </Menu.Item>
      <Menu.Item name="author" active={filterBy === 'author'} onClick={handleItemClick}>
        Автор
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Filter;
