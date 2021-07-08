import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ReactComponent as CloseIcon} from '../../assets/img/svg/icon-close.svg';
import {getTotalCost} from '../../store/selectors';
import {setChangeProductModalOpen} from '../../store/action';
import {AmountUpdateType, MAX_GUITARS} from '../../const';
import {capitalizeFirstLetter, getUppercaseText, splittingDigits} from '../../utils';

const GUITARS_TO_REMOVE = 0;

const BasketItem = ({id, vendorCode, name, type, strings, price, img, amount, openModal, onAmountChange}) => {
  const [focus, setFocus] = useState(false);
  const [currentAmount, setCurrentAmount] = useState(``);

  useEffect(() => {
    setCurrentAmount(amount);
  }, [amount]);


  const onDecrementClick = () => {
    if ((amount - 1) > GUITARS_TO_REMOVE) {
      onAmountChange(id, AmountUpdateType.DEC);
      return;
    }

    openModal(id);
  };

  const handleFocusChange = () => {
    setFocus(true);
    setCurrentAmount(``);
  };

  const handleBlurChange = () => {
    setFocus(false);
  };

  const handleCurrentAmountChange = (value) => {
    const currentValue = value.replace(/[^\d]/g,'');

    if (Number.isInteger(+currentValue) && +currentValue !== 0 && +currentValue <= MAX_GUITARS) {
      setCurrentAmount(currentValue);
      onAmountChange(id, AmountUpdateType.ADD, +currentValue);
      return;
    }

    if (Number.isInteger(+currentValue) && currentValue !== `0` && +currentValue <= MAX_GUITARS) {
      setCurrentAmount(currentValue);
    }
  };

  return (
    <li className="basket__item">
      <button
        className="basket__button basket__button--delete"
        type="button"
        aria-label="Удалить товар"
        onClick={() => openModal(id)}
      >
        <CloseIcon />
      </button>
      <picture>
        <source
          type="image/webp"
          srcSet={`${img.webpSmall} 1x, ${img.webpRetinaSmall} 2x`}
        />
        <img
          className="basket__img"
          src={img.small}
          srcSet={`${img.retinaSmall} 2x`}
          width="48"
          height="124"
          alt={name}
        />
      </picture>
      <div className="basket__description-wrapper">
        <h2 className="basket__title">{getUppercaseText(type)} {getUppercaseText(name)}</h2>
        <span className="basket__description">Артикул: {vendorCode}</span>
        <span className="basket__description">{capitalizeFirstLetter(type)}, {strings} струнная</span>
      </div>
      <span className="basket__price">{splittingDigits(price)} &#8381;</span>
      <fieldset className="basket__fieldset">
        <legend className="visually-hidden">Количество товара</legend>
        <button
          className="basket__button"
          type="button"
          aria-label="Добавить еще"
          onClick={onDecrementClick}
        >
          &ndash;
        </button>
        <label className="visually-hidden" htmlFor={`count-${id}`}>Введите количество товара</label>
        <input
          className="basket__input"
          id={`count-${id}`}
          type="text"
          title="Максимальное количество 99"
          value={!focus ? amount : currentAmount}
          onFocus={handleFocusChange}
          onBlur={handleBlurChange}
          onChange={(evt) => handleCurrentAmountChange(evt.target.value)}
        />
        <button
          className="basket__button"
          type="button"
          aria-label="Убрать товар"
          onClick={() => onAmountChange(id, AmountUpdateType.INC)}
        >
          &#43;
        </button>
      </fieldset>
      <span className="basket__price basket__price--total">
        {splittingDigits(amount * price)} &#8381;
      </span>
    </li>
  );
};

BasketItem.propTypes = {
  id: PropTypes.number.isRequired,
  vendorCode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  strings: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.object.isRequired,
  amount: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
  onAmountChange: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  totalCost: getTotalCost(store),
});

const mapDispatchToProps = (dispatch) => ({
  openModal(id) {
    dispatch(setChangeProductModalOpen(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
