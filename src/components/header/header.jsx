import React from 'react';
import MainNavigation from '../main-navigation/main-navigation';
import Logo from '../logo/logo';
import Wrapper from '../wrapper/wrapper';

const Header = () => {
  return (
    <header className="header">
      <Wrapper name={`header`}>
        <Logo block={`header`} />
        <MainNavigation />
      </Wrapper>
    </header>
  );
};

export default Header;
