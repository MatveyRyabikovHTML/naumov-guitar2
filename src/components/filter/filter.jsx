import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FilterInput from '../filter-input/filter-input';
import FilterCheckbox from '../filter-checkbox/filter-checkbox';
import {getData, getOtherFilters} from '../../store/selectors';
import {setFilterByPrice} from '../../store/action';
import {filters, guitarsData} from '../../prop-types/prop-types';
import {getMinMaxPrice} from '../../utils';
import {
  TypePrice,
  TypeFilterByPrice,
  LabelTitle,
  TypeGuitar,
  TypeString,
  TypeFilterByString,
  TitleByType,
  OtherFilterName
} from '../../const';

const Filter = ({getData, otherFilters, setPrice}) => {
  useEffect(() => {
    setPrice(getMinMaxPrice(getData));
  }, [getData, setPrice]);

  const getDisabledByType = (filters, type) => {
    switch (true) {
      case (type === TitleByType.ACOUSTIC):
        return filters.strings.includes(TypeFilterByString.FOUR) &&
          !filters.type.includes(TitleByType.ACOUSTIC) &&
          (filters.strings.length === 1);
      case (type === TitleByType.ELECTRIC):
        return filters.strings.includes(TypeFilterByString.TWELVE) &&
          !filters.type.includes(TitleByType.ELECTRIC) &&
          (filters.strings.length === 1);
      case (type === TitleByType.UKULELE):
        return !filters.strings.includes(TypeFilterByString.FOUR) &&
          !filters.type.includes(TitleByType.UKULELE) && (filters.strings.length);
      default:
        return false;
    }
  };

  const getDisabledByStrings = (filters, strings) => {
    switch (true) {
      case (strings === TypeFilterByString.FOUR):
        return filters.type.includes(TitleByType.ACOUSTIC) && (filters.type.length === 1);
      case (strings === TypeFilterByString.SIX):
      case (strings === TypeFilterByString.SEVEN):
        return filters.type.includes(TitleByType.UKULELE) && (filters.type.length === 1);
      case (strings === TypeFilterByString.TWELVE):
        return ((filters.type.includes(TitleByType.ELECTRIC) || filters.type.includes(TitleByType.UKULELE)) && (filters.type.length === 1)) ||
          (filters.type.includes(TitleByType.ELECTRIC) && filters.type.includes(TitleByType.UKULELE) && (filters.type.length === 2));
      default:
        return false;
    }
  };

  return (
    <section className="filter">
      <h2 className="filter__title">Фильтр</h2>
      <form className="filter__form" action="#">
        <fieldset className="filter__fieldset" title="Фильтр по цене">
          <legend className="filter__legend">Цена, <span>&#8381;</span></legend>
          <div className="filter__input-wrapper">
            {
              Object.keys(TypePrice).map((type, index) =>
                <FilterInput
                  key={type + index}
                  type={TypeFilterByPrice[type]}
                  labelTitle={LabelTitle[type]}
                />
              )
            }
          </div>
        </fieldset>
        <fieldset className="filter__fieldset" title="Фильтр по типу">
          <legend className="filter__legend">Тип гитар</legend>
          {
            Object.keys(TypeGuitar).map((type, index) =>
              <FilterCheckbox
                key={type + index}
                id={type}
                nameFilter={OtherFilterName.TYPE}
                value={TitleByType[type]}
                isChecked={otherFilters.type.includes(TitleByType[type])}
                labelTitle={LabelTitle[type]}
                disabled={getDisabledByType(otherFilters, TitleByType[type])}
              />
            )
          }
        </fieldset>
        <fieldset className="filter__fieldset" title="Фильтр по количеству струн">
          <legend className="filter__legend">Количество струн</legend>
          {
            Object.keys(TypeString).map((type, index) =>
              <FilterCheckbox
                key={type + index}
                id={type}
                nameFilter={OtherFilterName.STRINGS}
                value={TypeFilterByString[type]}
                isChecked={otherFilters.strings.includes(TypeFilterByString[type])}
                labelTitle={TypeFilterByString[type]}
                disabled={getDisabledByStrings(otherFilters, TypeFilterByString[type])}
              />
            )
          }
        </fieldset>
      </form>
    </section>
  );
};

Filter.propTypes = {
  getData: guitarsData.isRequired,
  otherFilters: filters.isRequired,
  setPrice: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  getData: getData(store),
  otherFilters: getOtherFilters(store),
});

const mapDispatchToProps = (dispatch) => ({
  setPrice(data) {
    dispatch(setFilterByPrice(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
