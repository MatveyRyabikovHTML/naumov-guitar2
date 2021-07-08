import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ReactComponent as ArrowIcon} from '../../assets/img/svg/icon-arrow-sort.svg';
import {getSortType, getSortDirection} from '../../store/selectors';
import {setSortType, setSortDirection} from '../../store/action';
import {DirectionSort, TypeSort} from '../../const';

const SortButton = ({children, className, id, disabled, onClick, ariaLabel}) => {
  return (
    <button
      className={className}
      id={id}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

const Sort = ({type, direction, setType, setDirection}) => {
  const handleTypeClick = (evt) => {
    evt.preventDefault();
    setType(evt.target.id);
  };

  const handleDirectionClick = (evt) => {
    evt.preventDefault();
    setDirection(evt.target.id);
  };

  return (
    <div className="sort">
      <div className="sort__wrapper">
        <span className="sort__title">Сортировать:</span>
        <SortButton
          className={`sort__button`}
          id={TypeSort.PRICE}
          disabled={type === TypeSort.PRICE}
          onClick={handleTypeClick}
          ariaLabel={`Сортировка по цене`}
        >
          по цене
        </SortButton>
        <SortButton
          className={`sort__button`}
          id={TypeSort.COMMENTS}
          disabled={type === TypeSort.COMMENTS}
          onClick={handleTypeClick}
          ariaLabel={`Сортировка по популярности`}
        >
          по популярности
        </SortButton>
      </div>
      <div className="sort__wrapper">
        <SortButton
          className={`sort__button sort__button--up`}
          id={DirectionSort.INC}
          disabled={direction === DirectionSort.INC}
          onClick={handleDirectionClick}
          ariaLabel={`Сортировка по возрастанию`}
        >
          <ArrowIcon className="sort__svg" />
        </SortButton>
        <SortButton
          className={`sort__button sort__button--down`}
          id={DirectionSort.DEC}
          disabled={direction === DirectionSort.DEC}
          onClick={handleDirectionClick}
          ariaLabel={`по убыванию`}
        >
          <ArrowIcon className="sort__svg" />
        </SortButton>
      </div>
    </div>
  );
};

Sort.propTypes = {
  type: PropTypes.string,
  direction: PropTypes.string,
  setType: PropTypes.func.isRequired,
  setDirection: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  type: getSortType(store),
  direction: getSortDirection(store),
});

const mapDispatchToProps = (dispatch) => ({
  setType(type) {
    dispatch(setSortType(type));
  },
  setDirection(direction) {
    dispatch(setSortDirection(direction));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
