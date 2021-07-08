import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {AppRoute} from '../../const';
import {ReactComponent as LogoIcon} from '../../assets/img/svg/logo.svg';

const Logo = ({block}) => {
  return (
    <div className={`${block}__logo`}>
      <Link to={AppRoute.ROOT} className={`${block}__logo-link`} aria-label="Перейти на главную страницу">
        <LogoIcon className={`${block}__logo-icon`} />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  block: PropTypes.string.isRequired,
};

export default Logo;
