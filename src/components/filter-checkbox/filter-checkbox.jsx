import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getOtherFilters} from '../../store/selectors';
import {setOtherFilters} from '../../store/action';
import {filters} from '../../prop-types/prop-types';
import {OtherFilterName, TypeOtherFilter, StringsAllowedForType, TypesAllowedForString} from '../../const';
import {extend, getCurrentFilters} from '../../utils';

const FilterCheckbox = ({id, nameFilter, value, isChecked, labelTitle, otherFilters, setOtherFilters, disabled = false}) => {
  const handleOtherFiltersChange = ({name, value, checked}) => {
    const currentValue = name === OtherFilterName.TYPE ? value : +value;

    if (checked) {
      switch (true) {
        case nameFilter === TypeOtherFilter.TYPE:
          setOtherFilters(extend(otherFilters, {
            [TypeOtherFilter.TYPE]: [
              ...otherFilters[name],
              currentValue
            ],
            [TypeOtherFilter.STRINGS]: getCurrentFilters(otherFilters[TypeOtherFilter.STRINGS], StringsAllowedForType, currentValue),
          }));
          break;
        case nameFilter === TypeOtherFilter.STRINGS:
          setOtherFilters(extend(otherFilters, {
            [TypeOtherFilter.STRINGS]: [
              ...otherFilters[name],
              currentValue
            ],
            [TypeOtherFilter.TYPE]: getCurrentFilters(otherFilters[TypeOtherFilter.TYPE], TypesAllowedForString, currentValue),
          }));
          break;
        default:
          return null;
      }
      return null;
    }

    setOtherFilters(extend(otherFilters, {
      [name]: [
        ...otherFilters[name].slice(0, otherFilters[name].indexOf(currentValue)),
        ...otherFilters[name].slice(otherFilters[name].indexOf(currentValue) + 1)
      ]
    }));
  };

  return (
    <>
      <input
        className="filter__checkbox visually-hidden"
        type="checkbox"
        id={id}
        name={nameFilter}
        value={value}
        checked={isChecked}
        onChange={(evt) => handleOtherFiltersChange(evt.target)}
        disabled={disabled}
      />
      <label className="filter__label" htmlFor={id}>{labelTitle}</label>
    </>
  );
};

FilterCheckbox.propTypes = {
  id: PropTypes.string.isRequired,
  nameFilter: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  isChecked: PropTypes.bool.isRequired,
  labelTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  otherFilters: filters.isRequired,
  setOtherFilters: PropTypes.func.isRequired,
  disabled: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]).isRequired,
};

const mapStateToProps = (store) => ({
  otherFilters: getOtherFilters(store),
});

const mapDispatchToProps = (dispatch) => ({
  setOtherFilters(data) {
    dispatch(setOtherFilters(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterCheckbox);
