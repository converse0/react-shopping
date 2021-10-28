import React from 'react';

import { Menu as MenuBase } from 'semantic-ui-react';

const Menu = () => {
  return (
    <MenuBase>
      <MenuBase.Item name="browse">Магазин Книг</MenuBase.Item>

      <MenuBase.Menu position="right">
        <MenuBase.Item name="signup">
          Итого: &nbsp;<b>0</b> руб.
        </MenuBase.Item>

        <MenuBase.Item name="help">
          Корзина: &nbsp;(<b>0</b>)
        </MenuBase.Item>
      </MenuBase.Menu>
    </MenuBase>
  );
};

export default Menu;
