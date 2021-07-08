import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import Cards from '../cards/cards';
import Filter from '../filter/filter';
import ChangeProduct from '../change-product/change-product';
import Confirmation from '../confirmation/confirmation';
import {getChangeProductModalData, getConfirmationModalFlag} from "../../store/selectors";
import {usePageTitle} from '../../hooks/use-page-title';

const CatalogScreen = ({title, pathname, getChangeProductModalData, getConfirmationModalFlag}) => {
  usePageTitle(title);

  return (
    <>
      <Header />
      <Main title={`Каталог гитар`} pathname={pathname}>
        <div className="main__content-wrapper">
          <Filter />
          <Cards />
        </div>
        {getChangeProductModalData && <ChangeProduct isAdd={true}/>}
        {getConfirmationModalFlag && <Confirmation/>}
      </Main>
      <Footer />
    </>
  );
};

CatalogScreen.propTypes = {
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  getChangeProductModalData: PropTypes.bool.isRequired,
  getConfirmationModalFlag: PropTypes.bool.isRequired,
};

const mapStateToProps = (store) => ({
  getChangeProductModalData: getChangeProductModalData(store),
  getConfirmationModalFlag: getConfirmationModalFlag(store),
});

export default connect(mapStateToProps)(CatalogScreen);
