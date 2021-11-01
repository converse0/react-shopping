import React from 'react';

import Cart from '../components/Cart';

import { Menu as MenuBase, Popup } from 'semantic-ui-react';

const Menu = ({ cartItems, totalPrice }) => {
  return (
    <MenuBase>
      <MenuBase.Item name="browse">Магазин Книг</MenuBase.Item>

      <MenuBase.Menu position="right">
        <MenuBase.Item name="signup">
          Итого: &nbsp;<b>{cartItems && totalPrice()}</b> руб.
        </MenuBase.Item>

        <Popup
          trigger={
            <MenuBase.Item name="help">
              Корзина: &nbsp;(<b>{cartItems.length}</b>)
            </MenuBase.Item>
          }
          content={cartItems && cartItems.map((item) => <Cart key={item.id} {...item} />)}
          on="click"
          hideOnScroll
        />
      </MenuBase.Menu>
    </MenuBase>
  );
};

export default Menu;
