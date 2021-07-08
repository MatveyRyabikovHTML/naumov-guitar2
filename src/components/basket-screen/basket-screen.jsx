import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header/header';
import Footer from '../footer/footer';
import Main from '../main/main';
import ChangeProduct from '../change-product/change-product';
import BasketItem from '../basket-item/basket-item';
import {basketData, guitarsData} from '../../prop-types/prop-types';
import {getBasket, getChangeProductModalData, getData, getPromoCode, getTotalCost} from '../../store/selectors';
import {setBasket, setPromoCode, setTotalCost} from '../../store/action';
import {PromoCode} from '../../const';
import {getById, getCurrentTotalAmount, getUpdatedAmount, splittingDigits, getUppercaseText} from '../../utils';
import {usePageTitle} from '../../hooks/use-page-title';

const BasketScreen = ({
                        title,
                        pathname,
                        getData,
                        basketData,
                        totalCost,
                        promoCode,
                        getChangeProductModalData,
                        addToBasket,
                        setTotalCost,
                        setPromoCode
}) => {
  const [code, setCode] = useState(``);
  const [error, setError] = useState(false);

  useEffect(()=>{
    setTotalCost(
      getCurrentTotalAmount(basketData, promoCode)
    );
  }, [promoCode, setTotalCost, basketData]);

  const handleAmountChange = (id, type, value) => {
    const currentItemInBasket = getById(basketData, id);

    addToBasket(getUpdatedAmount(basketData, currentItemInBasket, type, value));
  };

  const handlePromoInputChange = (evt) => {
    setCode(evt.target.value)
    setError(false);
  };

  const handlePromoButtonClick = (evt) => {
    evt.preventDefault();

    if (code.length) {
      const isValid = PromoCode.hasOwnProperty(getUppercaseText(code));

      if (isValid) {
        setError(false);
        setPromoCode(code);
        setCode(``);
        return;
      }

      setError(true);
    }
  };

  usePageTitle(title);

  return (
    <>
      <Header />
      <Main title={`Корзина`} pathname={pathname} modifier={`basket`}>
        <section className="basket">
          {
            !basketData.length ? <p style={{marginTop: `50px`}}>Корзина пуста</p> :
              <form className="basket__form" action="#" onSubmit={handlePromoButtonClick}>
                <ul className="basket__list">
                  {
                    basketData.map(({id, amount}) => {
                      const {vendorCode, name, type, strings, price, img} = getById(getData, id);

                      return (
                        <BasketItem
                          key={id + vendorCode}
                          id={id}
                          vendorCode={vendorCode}
                          name={name}
                          type={type}
                          strings={strings}
                          price={price}
                          img={img}
                          amount={amount}
                          onAmountChange={handleAmountChange}
                        />
                      );
                    })
                  }
                </ul>
                <div className="basket__bottom-wrapper">
                  <fieldset className="basket__promo-code promo-code">
                    <legend className="visually-hidden">Поле ввода промокода</legend>
                    <h3 className="promo-code__title">Промокод на скидку</h3>
                    <p className="promo-code__description">Введите свой промокод, если он у вас есть.</p>
                    <div className={`promo-code__wrapper${error && code ? ` promo-code__wrapper--error` : ``}`}>
                      <label className="visually-hidden" htmlFor="promoCode">Введите промокод</label>
                      <input
                        className="promo-code__input"
                        id="promoCode"
                        type="text"
                        value={code}
                        placeholder={getUppercaseText(promoCode)}
                        onChange={handlePromoInputChange}
                      />
                      <button
                        className="promo-code__button"
                        type="submit"
                        aria-label="Применить купон"
                        disabled={!code}
                      >
                        Применить купон
                      </button>
                    </div>
                  </fieldset>
                  <div className="basket__submit-wrapper">
                    <span className="basket__price basket__price--submit-total">Всего: {splittingDigits(totalCost)} &#8381;</span>
                    {/*eslint-disable-next-line*/}
                    <a className="basket__button-submit" href="#" aria-label="Оформить заказ">Оформить заказ</a>
                  </div>
                </div>
              </form>
          }
        </section>
        {getChangeProductModalData && <ChangeProduct isAdd={false}/>}
      </Main>
      <Footer />
    </>
  );
};

BasketScreen.propTypes = {
  title: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  getData: guitarsData.isRequired,
  basketData: basketData.isRequired,
  totalCost: PropTypes.number.isRequired,
  promoCode: PropTypes.string.isRequired,
  getChangeProductModalData: PropTypes.bool.isRequired,
  addToBasket: PropTypes.func.isRequired,
  setTotalCost: PropTypes.func.isRequired,
  setPromoCode: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  getChangeProductModalData: getChangeProductModalData(store),
  getData: getData(store),
  basketData: getBasket(store),
  totalCost: getTotalCost(store),
  promoCode: getPromoCode(store),
});

const mapDispatchToProps = (dispatch) => ({
  addToBasket(data) {
    dispatch(setBasket(data));
  },
  setTotalCost(totalCost) {
    dispatch(setTotalCost(totalCost));
  },
  setPromoCode(promoCode) {
    dispatch(setPromoCode(promoCode));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketScreen);
