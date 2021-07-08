import React from 'react';
import NavigationItem from '../navigation-item/navigation-item';
import {NAVIGATION_ITEMS, NAVIGATION_USER_ITEMS} from '../../const';

const MainNavigation = () => {
  return (
    <nav className="header__nav main-nav">
      <ul className="main-nav__list main-nav__list--site">
        {NAVIGATION_ITEMS.map((item, index) => {
          return (
            <NavigationItem
              key={item + index}
              block={`main`}
              item={item}
            />
          );
        })}
      </ul>
      <ul className="main-nav__list main-nav__list--user">
        {NAVIGATION_USER_ITEMS.map((item, index) => {
          return (
            <NavigationItem
              key={item + index}
              block={`main`}
              item={item}
              modifier="user"
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default MainNavigation;
