import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const BREADCRUMB_LIST = [
  {
    title: `Главная`,
    href: AppRoute.ROOT
  },
  {
    title: `Каталог`,
    href: AppRoute.CATALOG
  },
  {
    title: `Оформляем`,
    href: AppRoute.BASKET
  },
];

const Main = ({title, children, pathname, modifier}) => {
  let isActive = false;

  return (
    <main className={`main${modifier ? ` main--${modifier}` : ``}`}>
      <div className="main__wrapper container">
        <h1 className="main__title">{title}</h1>
        <ul className="breadcrumb">
          {BREADCRUMB_LIST.map(({title, href}, index) => {
            if (!isActive) {
              isActive = pathname === href;

              return !isActive ?
                <li className="breadcrumb__item" key={title + index}>
                  <Link to={href} className="breadcrumb__link">
                    {title}
                  </Link>
                </li>
                :
                <li className="breadcrumb__item" key={title + index}>
                  {title}
                </li>;
            }
            return null;
          })}
        </ul>
        {children}
      </div>
    </main>
  );
};

Main.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired,
  modifier: PropTypes.string,
};

export default Main;
