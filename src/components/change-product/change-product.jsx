import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ModalWrapper from '../modal-wrapper/modal-wrapper';
import {getBasket, getCurrentCard} from '../../store/selectors';
import {setBasket, setChangeProductModalClose, setConfirmationModalOpen} from '../../store/action';
import {basketData, guitar} from '../../prop-types/prop-types';
import {AmountUpdateType} from '../../const';
import {
  removeItem,
  getUppercaseText,
  capitalizeFirstLetter,
  splittingDigits,
  getById,
  getUpdatedAmount
} from '../../utils';

const GUITAR_INITIAL_COUNT = 1;

const ChangeProduct = ({isAdd, currentCard, basketData, closeModal, addToBasket, removeFromBasket}) => {
  const {id, img, name, vendorCode, type, strings, price} = currentCard;
  const currentItemInBasket = getById(basketData, id);

  const handleAddToBasketClick = () => {
    if (!currentItemInBasket) {
      addToBasket([
        ...basketData,
        {
          id,
          vendorCode,
          price,
          amount: GUITAR_INITIAL_COUNT
        }
      ]);
      return;
    }

    addToBasket(getUpdatedAmount(basketData, currentItemInBasket, AmountUpdateType.INC));
  };

  const handleRemoveItemClick = () => {
    removeFromBasket(removeItem(basketData, currentItemInBasket));
  };

  return (
    <ModalWrapper
      block={`change-product`}
      title={isAdd ? `Добавить товар в корзину` : `Удалить этот товар?`}
      onModalClose={closeModal}
    >
      <div className="change-product">
        <picture>
          <source
            type="image/webp"
            srcSet={`${img.webpSmall} 1x, ${img.webpRetinaSmall} 2x`}
          />
          <img
            className="change-product__img"
            src={img.small}
            srcSet={`${img.retinaSmall} 2x`}
            width="48"
            height="124"
            alt={name}
          />
        </picture>
        <div className="change-product__details-wrapper">
          <p className="change-product__name">{getUppercaseText(name)}</p>
          <p className="change-product__description">Артикул: {vendorCode}</p>
          <p className="change-product__description">{capitalizeFirstLetter(type)}, {strings} струнная</p>
          <p className="change-product__price">Цена: {splittingDigits(price)} &#8381;</p>
        </div>
        {
          isAdd ?
            <button
              className="change-product__button"
              type="button"
              aria-label="Добавить в корзину"
              onClick={handleAddToBasketClick}
            >
              Добавить в корзину
            </button>
            :
            <div className="change-product__button-wrapper">
              <button
                className="change-product__button change-product__button--delete"
                type="button"
                aria-label="Добавить в корзину"
                onClick={handleRemoveItemClick}
              >
                Удалить товар
              </button>
              <button
                className="change-product__button change-product__button--next"
                type="button"
                aria-label="Продолжить покупки"
                onClick={closeModal}
              >
                Продолжить покупки
              </button>
            </div>
        }
      </div>
    </ModalWrapper>
  );
};

ChangeProduct.propTypes = {
  isAdd: PropTypes.bool.isRequired,
  currentCard: guitar.isRequired,
  basketData: basketData.isRequired,
  closeModal: PropTypes.func.isRequired,
  addToBasket: PropTypes.func.isRequired,
  removeFromBasket: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  currentCard: getCurrentCard(store),
  basketData: getBasket(store),
});

const mapDispatchToProps = (dispatch) => ({
  closeModal() {
    dispatch(setChangeProductModalClose());
  },
  addToBasket(data) {
    dispatch(setBasket(data));
    dispatch(setChangeProductModalClose());
    dispatch(setConfirmationModalOpen());
  },
  removeFromBasket(data) {
    dispatch(setBasket(data));
    dispatch(setChangeProductModalClose());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeProduct);
