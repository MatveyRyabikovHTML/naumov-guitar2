import React, {useEffect, useState, useCallback} from 'react';
import {connect} from 'react-redux';
import {splittingDigits, setCurrentValue, extend} from '../../utils';
import {getFilterByPrice, getDefaultPrice} from '../../store/selectors';
import {setFilterByPrice} from '../../store/action';
import {TypeFilterByPrice} from '../../const';
import PropTypes from 'prop-types';
import {priceFilter} from '../../prop-types/prop-types';

const FilterInput = ({type, labelTitle, filterPrice, defaultPrice, setValue}) => {
  const [focus, setFocus] = useState(false);
  const [price, setPrice] = useState(``);

  const currentMin = type === TypeFilterByPrice.MIN ?
    defaultPrice[TypeFilterByPrice.MIN] :
    filterPrice[TypeFilterByPrice.MIN];
  const currentMax = type === TypeFilterByPrice.MAX ?
    defaultPrice[TypeFilterByPrice.MAX] :
    filterPrice[TypeFilterByPrice.MAX];

  useEffect(() => {
    setPrice(filterPrice[type]);
  }, [filterPrice, type, setPrice]);

  const handlePriceChange = useCallback((newPrice) => {
    setValue(extend(filterPrice, newPrice));
  }, [filterPrice, setValue]);

  const handleFocusChange = () => {
    setFocus(true);
    setPrice(``);
  };

  const handleBlurChange = () => {
    setCurrentValue(filterPrice[type], currentMin, currentMax, type, handlePriceChange);
    setFocus(false);
  };

  const handleInputChange = (value) => {
    const currentValue = value.replace(/[^\d]/g,'');

    if (Number.isInteger(+currentValue) && +currentValue !== 0) {
      setPrice(currentValue);
      setValue(extend(filterPrice, {[type]: +currentValue}));
      return;
    }

    if (Number.isInteger(+currentValue) && currentValue !== `0`) {
      setPrice(currentValue);
    }
  };

  return (
    <>
      <input
        className="filter__input"
        type="text"
        id={type}
        name={type}
        placeholder={splittingDigits(defaultPrice[type])}
        value={focus ? price : splittingDigits(filterPrice[type])}
        onFocus={handleFocusChange}
        onBlur={handleBlurChange}
        onChange={(evt) => handleInputChange(evt.target.value)}
      />
      <label className="visually-hidden" htmlFor={type}>{labelTitle}</label>
    </>
  );
};

FilterInput.propTypes = {
  type: PropTypes.string.isRequired,
  filterPrice: priceFilter.isRequired,
  defaultPrice: priceFilter.isRequired,
  labelTitle: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  filterPrice: getFilterByPrice(store),
  defaultPrice: getDefaultPrice(store),
});

const mapDispatchToProps = (dispatch) => ({
  setValue(data) {
    dispatch(setFilterByPrice(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterInput);
