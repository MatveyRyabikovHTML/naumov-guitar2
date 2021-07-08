import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {getBasketLength} from '../../store/selectors';

const NavigationItem = ({block, item, modifier, basketLength}) => {
  const {name, href, icon: Icon} = item;

  return (
    <li className={`${block}-nav__item${modifier ? ` ${block}-nav__item--${modifier}` : ``}`}>
      <Link
        to={href}
        className={`${block}-nav__link${modifier ? ` ${block}-nav__link--${modifier}` : ``}`}
        aria-label={`Перейти на страницу ${name}`}
      >
        {modifier ? <Icon className={`${block}-nav__icon`} /> : name}
        {name === `Корзина` && <sup>{basketLength ? basketLength : ``}</sup>}
      </Link>
    </li>
  );
};

NavigationItem.propTypes = {
  block: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    icon: PropTypes.object,
  }).isRequired,
  modifier: PropTypes.string,
  basketLength: PropTypes.number
};

const mapStateToProps = (store) => ({
  basketLength: getBasketLength(store),
});

export default connect(mapStateToProps)(NavigationItem);
